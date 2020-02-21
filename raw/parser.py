"""Script to parse skill data files."""
from copy import deepcopy
from os import listdir
from os.path import isfile, join
import xml.etree.ElementTree as ET
import json

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

    return output

def parse_table(table_node):
    name = None
    mastery = None
    levels = []
    growth = {}
    growth_order = []
    for row in table_node[0]:
        # Check for name
        if name is None:
            name = row[0][0].attrib.get('id').replace('_', ' ')
            # print('Name:', name)
            continue
        
        # Check for Mastery
        if mastery is None:
            for node in row[0]:
                if node.tag == 'i' and 'Mastery' in node.text:
                    mastery = True
            mastery = mastery is not None
            # print('Mastery Skill:', mastery)
            continue

        # Check for Levels
        if not levels:
            for node in row:
                levels.append({
                    'label': node.text,
                    'width': node.attrib.get('style').replace('width:', '')
                })
            continue

        # Get everything else
        if name and (mastery is not None) and levels:
            label = None
            data = []
            for node in row:
                if node.tag == 'th' and label is None:
                    label = node.text
                    # print(label)
                    growth_order.append(label)
                    continue
                elt = {}
                elt['levelspan'] = node.attrib.get('colspan')
                elt['value'] = node.text
                data.append(elt)
            growth[label] = deepcopy(data)

    output = {
        'name': name,
        'mastery': mastery,
        'levels': levels,
        'growth': growth,
        'growth_order': growth_order
    }

    # print(output)
    # print('\n')
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
    output['branches'] = parsed_branches

    return output

def output_js(data, filename, var_name):
    new_file_data = """var {variable} = {data};
    export default {variable};
    """
    data = json.dumps(data)

    with open(filename, 'w') as nf:
        nf.write(new_file_data.format(variable=var_name,
                                      data=data))

source_dir = 'source_files/'
filenames = get_data_files(source_dir)
skill_data = [parse_file(join(source_dir, filename)) for filename in filenames]
output_js(skill_data, 'skill_data.js', 'skillData')
