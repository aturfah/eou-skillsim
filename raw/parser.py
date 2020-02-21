"""Script to parse skill data files."""
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

source_dir = 'source_files/'
filenames = get_data_files(source_dir)
skill_data = [parse_file(join(source_dir, filename)) for filename in filenames]