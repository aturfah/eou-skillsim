import React, {Component} from 'react';
import './skillInfo.css'

import skillData from '../data/skill_data';
import {parsePX} from '../helpers';

function buildSkillText(skillDatum) {
    if (skillDatum === undefined) {
        return 'doot'
    }

    const header = <b className='SkillHeader'>{skillDatum.name}</b>
    var descr = skillDatum.description

    // Build Text for Skill Info
    const growthOrder = skillDatum.growth_order;
    const levelGrowth = []

    // First initialize levelGrowth with 'Level #:' strings
    skillDatum.levels.forEach(function (level) {
        if (level.label !== 'Level') {
            levelGrowth.push('Lv. ' + level.label + ': ');
        }
    })


    // Clean up skills to get 15-length vectors
    growthOrder.forEach(function (growthID) {
        const rawInfo = skillDatum.growth[growthID];
        if (rawInfo.length === 1) {
            descr += ' Has a ' + growthID.toLowerCase() + ' of ' + rawInfo[0].value + ' at all levels.'
        } else {
            const trueInfo = []
            rawInfo.forEach(function (pew) {
                const levelSpan = parseInt(pew.levelspan);
                for (var i = 0; i < levelSpan; i++) {
                    if (growthID.includes('(turns)')) {
                        trueInfo.push(pew.value + ' turns');
                    } else {
                        trueInfo.push(pew.value);
                    }
                }
            });
            growthID = growthID.replace(' (turns)', '');

            trueInfo.forEach(function (skillGrowthDatum, idx) {
                levelGrowth[idx] += growthID + ' of ' + skillGrowthDatum + ', '
            })
        }
    });

    // Add line breaks at the end
    levelGrowth.forEach(function (val, idx) {
        const repVal = val.substring(0, val.length - 2);
        if (idx + 1 <= 10) {
            levelGrowth[idx] = <span>{repVal}<br/></span>;
        } else {
            levelGrowth[idx] = <i>{repVal}<br/></i>;
        }
    })

    return <div> {header} <br/> ---- <br/>
                <span className='SkillDescr'>{descr}</span>
                <br/> <br/>
                {levelGrowth}
            </div>
}

function parseSkillBranches(classSkillInfo) {
    const output = {};
    classSkillInfo.branches.forEach(function (branch) {
        branch.skill_data.forEach(function (skillDatum) {
            output[skillDatum._id] = skillDatum;
        });
    });

    return output;
}

class SkillInfoPanel extends Component {

    constructor(props) {
        super(props);
        this.activeClassIdx = props.activeClassIdx;
        this.parsedSkillData = parseSkillBranches(skillData[this.activeClassIdx])
        this.maxWidth = 375;
    }

    render() {
        const activeClassIdx = this.props.activeClassIdx;
        if (activeClassIdx !== this.activeClassIdx) {
            this.parsedSkillData = parseSkillBranches(skillData[activeClassIdx])
        }

        const activeSkillID = this.props.activeInfo.activeSkillID;
        const activeSkillBox = this.props.activeInfo.activeSkillBox;
        const graphParams = this.props.activeInfo.graphParams;
        const skillDatum = this.parsedSkillData[activeSkillID];


        var visibility = 'hidden';
        var left = -1;
        var top = -1;
        if (activeSkillID !== null) {
            visibility = 'visible'
            left = parsePX(activeSkillBox.left) -
                (parsePX(graphParams.BOX_WIDTH) + 2 * parsePX(graphParams.BOX_BORDER_WIDTH)) / 4;
            top = parsePX(activeSkillBox.top) +
                (parsePX(graphParams.BOX_HEIGHT) + 2 * parsePX(graphParams.BOX_BORDER_WIDTH)) +
                parsePX(graphParams.BOX_PADDING / 4);
        }

        const divStyle = {
            visibility: visibility,
            left: left,
            top: top,
            maxWidth: this.maxWidth + 'px',
        }

        return <div className="SkillInfoPanel" style={divStyle}>
            {buildSkillText(skillDatum)}
        </div>
    }
}

export default SkillInfoPanel;