
import React, {Component} from 'react';
import SkillTreeNode from './skillTreeNode'
import './skillTree.css';

// Data Import
import skillData from '../data/skill_data';
import treeData from '../data/tree_data'

// Helper Functions
import {firstDegSkills} from '../helpers';


class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.firstSkills = firstDegSkills()
        this.buildSkillTreeNodes = this.buildSkillTreeNodes.bind(this);
        this._addSkill = this._addSkill.bind(this)
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
        const LINE_LENGTH = 80;
        const BOX_PADDING = LINE_LENGTH / 2;
        const LINE_THICKNESS = 4;
        const BOX_BORDER_WIDTH = LINE_THICKNESS;
        const output = [];

        const skillTreeStructure = treeData[this.props.activeClassIdx]

        skillTreeStructure.forEach(function (datum) {
            console.log(datum)
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
                              'border-color': '#000000',
                              'border-width': BOX_BORDER_WIDTH + 'px',
                              'border-style': 'solid',
                              width: BOX_WIDTH + 'px',
                              height: BOX_HEIGHT + 'px'
                            }
            output.push(<div key={datum.skillID}
                        className={className + ' skillNode'}
                        style={boxStyle}>{skillTreeNodes[datum.skillID]}</div>)


            // Add Vertical and Horizontal bars as necessary
            if (datum.baseSkill) {
                var barXCoord = xCoord + BOX_WIDTH / 4;
                var barYCoord = yCoord + BOX_HEIGHT + 2 * BOX_BORDER_WIDTH;
                var barLength = datum.barSize * (BOX_HEIGHT + BOX_PADDING) - BOX_HEIGHT / 2 - LINE_THICKNESS;
                const barStyle = {top: barYCoord + 'px',
                                  left: barXCoord + 'px',
                                  height: barLength + 'px',
                                  'border-left-color': '#5B6DCD',
                                  'border-left-width': LINE_THICKNESS + 'px',
                                  'border-left-style': 'solid'}
                output.push(<div className='verticalBar' key='doot'
                            style={barStyle}></div>)
            } else {
                // draw horizontal lines before
                if (datum.numBefore > 0) {
                    var barLeftXCoord = xCoord;
                    var barLeftYCoord = yCoord + BOX_HEIGHT / 2;
                    const leftBarStyle = {top: barLeftYCoord + 'px',
                                      left: barLeftXCoord - (LINE_LENGTH / 2) + 'px',
                                      width: (LINE_LENGTH)/ 2 + 'px',
                                      'border-top-color': '#FF0000',
                                      'border-top-width': LINE_THICKNESS + 'px',
                                      'border-top-style': 'solid'}
                    if (datum.coords.x === 0) {
                        // this line is a bit shorter
                        leftBarStyle.width = BOX_WIDTH / 4
                        leftBarStyle.left = barLeftXCoord - leftBarStyle.width
                    }
                    output.push(<div className='horizontalBar' style={leftBarStyle}></div>)

                    // Draw vertical line before if necessary
                    if (datum.numBefore > 1) {
                        var preBarXCoord = barLeftXCoord - (LINE_LENGTH / 2);
                        var preBarYCoord = barLeftYCoord + (LINE_THICKNESS / 2);
                        var preBarHeight = (datum.numBefore - 1) * (BOX_HEIGHT + BOX_PADDING) + LINE_THICKNESS;
                        if (datum.beforeStyle === 'centered') {
                            preBarYCoord = preBarYCoord - preBarHeight / 2
                        }
                        const preBarStyle = {top: preBarYCoord + 'px',
                            left: preBarXCoord + 'px',
                            height: preBarHeight + 'px',
                            'border-left-color': '#5B6DCD',
                            'border-left-width': LINE_THICKNESS + 'px',
                            'border-left-style': 'solid'}
                        output.push(<div className='verticalBar' key='doot'
                                style={preBarStyle}></div>)
                    }
                }

                // draw horizontal lines after
                if (datum.numAfter > 0) {
                    var barRightXCoord = xCoord + BOX_WIDTH + 2 * BOX_BORDER_WIDTH;
                    var barRightYCoord = barLeftYCoord;
                    const rightBarStyle = {top: barRightYCoord + 'px',
                                    left: barRightXCoord + 'px',
                                    width: (LINE_LENGTH / 2) + 'px',
                                    'border-top-color': '#5B6DCD',
                                    'border-top-width': LINE_THICKNESS + 'px',
                                    'border-top-style': 'solid'}
                    output.push(<div className='horizontalBar' style={rightBarStyle}></div>)
                    // Draw Vertical Bar After if Necessary
                    if (datum.numAfter > 1) {
                        var postBarXCoord = barRightXCoord + (LINE_LENGTH / 2);
                        var postBarYCoord = barRightYCoord;
                        var postBarHeight = (datum.numAfter - 1) * (BOX_HEIGHT + BOX_PADDING) + LINE_THICKNESS;
                        if (datum.afterStyle === 'centered') {
                            postBarYCoord = postBarYCoord - preBarHeight / 2
                        }
                        const postBarStyle = {top: postBarYCoord + 'px',
                            left: postBarXCoord + 'px',
                            height: postBarHeight + 'px',
                            'border-left-color': '#5B6DCD',
                            'border-left-width': LINE_THICKNESS + 'px',
                            'border-left-style': 'solid'}
                        output.push(<div className='verticalBar' key='doot'
                                style={postBarStyle}></div>)
                    }
                }
            }
        });

        return <div>{output}</div>
    }

    render() {
        const skillTreeNodes = this.buildSkillTreeNodes()
        const doot = this.drawSkillTree(skillTreeNodes);

        return <div className="SkillTree">
            Skill Data Goes Here (pew)
            {doot}
            </div>
    }
}

export default SkillTree;
