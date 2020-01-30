"""Script to parse skill data files."""
from copy import deepcopy
import re
import json
import xml.etree.ElementTree as ET

def get_xml_root(filename):
    tree = ET.parse(filename)
    root = tree.getroot()
    return root
