"""Script to parse skill data files."""
from copy import deepcopy
from os import listdir
from os.path import isfile, join
import xml.etree.ElementTree as ET

def get_xml_root(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    return root

def get_data_files(directory):
    return [f for f in listdir(directory) if isfile(join(directory, f))]

def parse_file(filename):
    print(filename)
    root = get_xml_root(filename)
    output = {}

    # Go down through the body element to get to the data
    body_node = None
    data_node = None
    for node in root:
        if node.tag == 'body':
            body_node = node
            break

    if body_node is None:
        raise RuntimeError('Error Parsing file: <body> not found')

    # Parse through body node
    target_node = body_node
    for node in body_node:
        if node.attrib.get('id') == 'mw-wrapper':
            target_node = node
            break

    for node in target_node:
        if node.attrib.get('id') == 'mw-content-container':
            target_node = node
            break

    for node in target_node:
        if node.attrib.get('id') == 'mw-content-block':
            target_node = node
            break

    for node in target_node:
        if node.attrib.get('id') == 'mw-content-wrapper':
            target_node = node
            break

    for node in target_node:
        if node.attrib.get('id') == 'mw-content':
            target_node = node
            break

    for node in target_node:
        if node.attrib.get('id') == 'content':
            target_node = node
            break

    # Get class name
    class_name = None
    skills_node = None
    for node in target_node:
        if node.tag == 'h1':
            class_name = node.text.split('/')[0]
        # Get the different skill branches
        elif node.attrib.get('id') == 'bodyContent':
            skills_node = node

    # Get the data
    for node in skills_node:
        if node.attrib.get('id') == 'mw-content-text':
            skills_node = node
            break

    for node in skills_node:
        if node.attrib.get('class') == 'mw-parser-output':
            skills_node = node
            break

    branches = []
    branch_data = None
    for node in skills_node:
        print(node.tag, node.attrib.get('id'))
        if node.tag == 'h2':
            if branch_data is not None:
                branches.append(deepcopy(branch_data))

            branch_data = {
                'name': node[0].text.replace(' branch', ''),
                'skill_tables': []
            }
        elif node.tag == 'table':
            branch_data['skill_tables'].append(node)


    # Form the output
    output['source'] = filename
    output['class'] = class_name
    output['branches'] = branches

    print(output)
    print()
    raise RuntimeError('Doot')

source_dir = 'source_files/'
filenames = get_data_files(source_dir)
skill_data = [parse_file(join(source_dir, filename)) for filename in filenames]