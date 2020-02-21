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

def find_child_node(parent, attrib_key, attrib_val):
    output = None
    for node in parent:
        if node.attrib.get(attrib_key) == attrib_val:
            output = node
            break

    if output is None:
        raise RuntimeError('No child found')

    return output

def parse_branch(branch_data):
    output = {}
    output['name'] = branch_data['name']
    output['skill_data'] = [parse_table(table) for table in branch_data['skill_tables']]
    raise RuntimeError('Doot Doot')
    return output

def parse_table(table_node):
    name = None
    mastery = False
    levels = []
    growth = {}
    for row in table_node[0]:
        if name is None:
            name = row[0][0].attrib.get('id').replace('_', ' ')

    output = {
        'name': name,
        'mastery': mastery,
        'levels': levels,
        'growth': growth
    }

    print(output)
    raise RuntimeError('Pew Pew')
    return output

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
    target_node = find_child_node(body_node, 'id', 'mw-wrapper')
    target_node = find_child_node(target_node, 'id', 'mw-content-container')
    target_node = find_child_node(target_node, 'id', 'mw-content-block')
    target_node = find_child_node(target_node, 'id', 'mw-content-wrapper')
    target_node = find_child_node(target_node, 'id', 'mw-content')
    target_node = find_child_node(target_node, 'id', 'content')

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
    skills_node = find_child_node(skills_node, 'id', 'mw-content-text')
    skills_node = find_child_node(skills_node, 'class', 'mw-parser-output')

    raw_branches = []
    branch_data = None
    for node in skills_node:
        if node.tag == 'h2':
            if branch_data is not None:
                raw_branches.append(deepcopy(branch_data))

            branch_data = {
                'name': node[0].text.replace(' branch', ''),
                'skill_tables': []
            }
        elif node.tag == 'table':
            branch_data['skill_tables'].append(node)

    parsed_branches = [parse_branch(branch) for branch in raw_branches]

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