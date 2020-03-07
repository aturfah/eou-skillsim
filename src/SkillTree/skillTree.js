
import React, {Component} from 'react';
import SkillTreeNode from './skillTreeNode'
import './skillTree.css';

// Data Import
import skillData from '../data/skill_data';
import treeData from '../data/tree_data'

// Helper Functions
import {firstDegSkills, buildBarsBefore, buildBarsAfter} from '../helpers';


class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.firstSkills = firstDegSkills()
        this.divHeight = null;
        this.divWidth = null;
        this.buildSkillTreeNodes = this.buildSkillTreeNodes.bind(this);
        this._addSkill = this._addSkill.bind(this)
        this._setHeight = this._setHeight.bind(this)
        this._getHeight = this._getHeight.bind(this)
        this._setWidth = this._setWidth.bind(this)
        this._getWidth = this._getWidth.bind(this)
    }

    _setHeight(newHeight) {
        this.divHeight = newHeight;
    }

    _getHeight() {
        return this.divHeight;
    }

    _setWidth(newWidth) {
        this.divWidth = newWidth;
    }

    _getWidth() {
        return this.divWidth;
    }

    _addSkill(skillId) {
        console.log('-> _addSkill', skillId, 'clicked on');
        this.props.updateMethod('skillsChosen', skillId)
    }

    buildSkillTreeNodes() {
        const objProps = this.props;
        const skillTreeData = skillData[objProps.activeClassIdx];
        const addSkillFunc = this._addSkill;
        const updateMethod = this.props.updateMethod;

        const branches = skillTreeData.branches;
        const output = {};
        branches.forEach(function (skillBranch) {
            skillBranch.skill_data.forEach(function (skillDatum) {
                output[skillDatum._id] = <SkillTreeNode
                    key={skillDatum._id}
                    skillData={skillDatum}
                    activeFlag={Object.keys(objProps.skillsChosen).includes(skillDatum._id)}
                    onClickFunc={() => addSkillFunc(skillDatum._id)}
                    skillLevel={objProps.skillsChosen[skillDatum._id] || 0}
                    updateMethod={updateMethod}
                ></SkillTreeNode>
            });
        })
        return output
    }

    drawSkillTree(skillTreeNodes) {
        const BOX_WIDTH = 170;
        const BOX_HEIGHT = 60;
        const LINE_LENGTH = 60;
        const BOX_PADDING = LINE_LENGTH / 2;
        const LINE_THICKNESS = 4;
        const BOX_BORDER_WIDTH = LINE_THICKNESS;
        const lineParams = {
            BOX_WIDTH: BOX_WIDTH,
            BOX_HEIGHT: BOX_HEIGHT,
            LINE_LENGTH: LINE_LENGTH,
            BOX_PADDING: BOX_PADDING,
            LINE_THICKNESS: LINE_THICKNESS,
            BOX_BORDER_WIDTH: BOX_BORDER_WIDTH
        }
        const output = [];

        const skillTreeStructure = treeData[this.props.activeClassIdx]
        const setHeightMethod = this._setHeight
        const getHeightMethod = this._getHeight
        const setWidthMethod = this._setWidth
        const getWidthMethod = this._getWidth

        skillTreeStructure.forEach(function (datum) {
            // console.log(datum.skillID)
            var className = 'baseSkill';
            var xOffset = 0;
            var xCoord = null;
            var yCoord = null;

            if (!datum.baseSkill) {
                className = 'regularSkill';
                xOffset = BOX_WIDTH / 2;
            }
            xCoord = (BOX_WIDTH + BOX_PADDING) * datum.coords.x +
                (datum.coords.x > 0 ? datum.coords.x : 0) * (BOX_PADDING + 2*BOX_BORDER_WIDTH) + xOffset;
            yCoord = (BOX_HEIGHT + BOX_PADDING) * datum.coords.y

            // Add the element
            const boxStyle = {top: yCoord + 'px',
                              left: xCoord + 'px',
                              borderColor: '#000000',
                              borderWidth: BOX_BORDER_WIDTH + 'px',
                              borderStyle: 'solid',
                              width: BOX_WIDTH + 'px',
                              height: BOX_HEIGHT + 'px'
                            }
            output.push(<div key={datum.skillID + 'node'}
                        className={className + ' skillNode'}
                        style={boxStyle}>{skillTreeNodes[datum.skillID]}</div>)

            if (yCoord + BOX_HEIGHT > getHeightMethod()) {
                setHeightMethod(yCoord + BOX_HEIGHT)
            }
            if (xCoord + BOX_WIDTH + BOX_PADDING > getWidthMethod()) {
                setWidthMethod(xCoord + BOX_WIDTH + BOX_PADDING)
            }

            // Add Vertical and Horizontal bars as necessary
            if (datum.baseSkill) {
                if (datum.barSize) {
                    var barXCoord = xCoord + BOX_WIDTH / 4;
                    var barYCoord = yCoord + BOX_HEIGHT + 2 * BOX_BORDER_WIDTH;
                    var barLength = datum.barSize * (BOX_HEIGHT + BOX_PADDING) - BOX_HEIGHT / 2 - LINE_THICKNESS;
                    const barStyle = {top: barYCoord + 'px',
                                    left: barXCoord + 'px',
                                    height: barLength + 'px',
                                    borderLeftColor: '#5B6DCD',
                                    borderLeftWidth: LINE_THICKNESS + 'px',
                                    borderLeftStyle: 'solid'}
                    output.push(<div className='verticalBar'
                                style={barStyle}></div>)
                } else if (datum.numAfter > 0) {
                    // TODO: be able to add line horizontally when only 1 skill
                    buildBarsAfter(datum, xCoord, yCoord, lineParams).forEach((doot) => {output.push(doot)})
                }
            } else {
                buildBarsBefore(datum, xCoord, yCoord, lineParams).forEach((doot) => {output.push(doot)})
                buildBarsAfter(datum, xCoord, yCoord, lineParams).forEach((doot) => {output.push(doot)})
            }
        });

        return <div>{output}</div>
    }

    render() {
        this._setHeight(null);
        this._setWidth(null);
        const skillTreeNodes = this.buildSkillTreeNodes()
        const doot = this.drawSkillTree(skillTreeNodes);
        const divStyle = {
            height: this._getHeight(),
            width: this._getWidth()
        }

        return <div className="SkillTree" style={divStyle}>
            {doot}
            </div>
    }
}

export default SkillTree;
