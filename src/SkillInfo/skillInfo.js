import React, {Component} from 'react';
import './skillInfo.css'

import skillData from '../data/skill_data';
import {parsePX} from '../helpers';

function oldBuildSkillText(skillDatum) {
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
            levelGrowth[idx] = <span className='levelGrowthElt'>{repVal}<br/></span>;
        } else {
            levelGrowth[idx] = <i className='levelGrowthElt'>{repVal}<br/></i>;
        }
    })

    // console.log(partText)
    return <div> {header} <br/> ---- <br/>
                <span className='SkillDescr'>{descr}</span>
                <br/> <br/>
                {levelGrowth}
            </div>
}

function buildSkillText(skillDatum) {
    if (skillDatum === undefined) {
        return 'doot'
    }

    if (skillDatum.force_boost === true || skillDatum.force_break === true) {
        return oldBuildSkillText(skillDatum)
    }

    // Body Part
    var usesText = null;
    var partText = null;
    if (skillDatum.bodypart !== undefined) {
        partText = <span className='SkillDescription'><i>Body Part: {skillDatum.bodypart}</i></span>;
    }
    if (skillDatum.stat !== undefined) {
        usesText = <span className='SkillDescription'><i>Stat(s) Used: {skillDatum.stat}</i></span>;
    }

    let skillDescr = skillDatum.description;

    // Build the table rows
    const regSkillData = {};
    const grimSkillData = {};
    const maxLevel = 10;
    const rowOrder = skillDatum.growth_order;
    skillDatum.levels.forEach(function (val, idx) {
        if (idx === 0) {
            return
        }
        idx = idx - 1
        
        if (!Object.keys(regSkillData).includes("Level")) {
            regSkillData["Level"] = []
            grimSkillData["Level"] = []
        }
        if (idx < maxLevel) {
            regSkillData["Level"].push(<th>{skillDatum.levels[idx+1].label}</th>)
        } else {
            grimSkillData["Level"].push(<th>{skillDatum.levels[idx+1].label}</th>)
        }

        rowOrder.forEach(function (val) {
            if (!Object.keys(regSkillData).includes(val)) {
                regSkillData[val] = []
                grimSkillData[val] = []
            }
        });
    });
    rowOrder.forEach(function(label) {
        let curLevel = 0;
        if (skillDatum.growth[label].length === 1) {
            if (skillDescr.includes("\n")) {
                skillDescr += ' Has a ' + label.toLowerCase() + ' of ' + skillDatum.growth[label][0].value + ' at all levels.'
            } else {
                skillDescr += '\n Has a ' + label.toLowerCase() + ' of ' + skillDatum.growth[label][0].value + ' at all levels.'
            }
            return
        }

        console.log(skillDatum)
        skillDatum.growth[label].forEach(function(val) {
            const levelSpan = parseInt(val.levelspan)
            if (curLevel < maxLevel && (curLevel + levelSpan) > maxLevel) {
                const firstRowSpan = maxLevel - curLevel
                regSkillData[label].push(<td colSpan={firstRowSpan}>{val.value}</td>)
                grimSkillData[label].push(<td colSpan={levelSpan - firstRowSpan}>{val.value}</td>)
                curLevel += levelSpan;
            } else {
                curLevel += levelSpan;
                if (curLevel > maxLevel) {
                    grimSkillData[label].push(<td colSpan={val.levelspan}>{val.value}</td>)
                } else {
                    regSkillData[label].push(<td colSpan={val.levelspan}>{val.value}</td>)
                }    
            }
        })
    }) 

    // Get stuff in format to be used by table
    const regSkillRows = []
    rowOrder.forEach(function(val) {
        if (regSkillData[val].length === 0) {
            return
        }
        regSkillRows.push(<tr>
            <td>{val}</td>
            {regSkillData[val]}
        </tr>)
    })


    // Check for boost
    let boostRows = true;
    const grimSkillRows = []
    rowOrder.forEach(function(val) {
        if (regSkillData[val].length === 0) {
            return
        } else if (grimSkillData[val].length === 0) {
            boostRows = false;
        }
        grimSkillRows.push(<tr>
            <td>{val}</td>
            {grimSkillData[val]}
        </tr>)
    })

    let boostTable = <>
        <tr>
            <th>Level</th>{grimSkillData["Level"]}
        </tr>
        {grimSkillRows}
    </>
    if (!boostRows) {
        boostTable = <></>
    }

    // Give us the table
    return <div><table>
        <thead className='SkillHeader'>
            <tr>
                <th>{skillDatum.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{partText}</td>
            </tr>
            <tr>
                <td>{usesText}</td>
            </tr>
            <tr>
                <td>{skillDescr.split("\n").map(str => <p className='SkillDescription'>{str}</p>)}</td>
            </tr>
            <tr>
                <td className='SkillInfoTable'>
                    <br/>
                <table>
                    <tbody>
                    <tr>
                        <th>Level</th>{regSkillData["Level"]}
                    </tr>
                    {regSkillRows}
                    {boostTable}
                    </tbody>
                </table>
                </td>
            </tr>
        </tbody>

    </table></div>
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
        this.maxWidth = 600;
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
        const skillText = buildSkillText(skillDatum);


        var visibility = 'hidden';
        var left = -1;
        var top = -1;
        if (activeSkillID !== null) {
            visibility = 'visible'
            left = parsePX(activeSkillBox.left) +
                (parsePX(graphParams.BOX_WIDTH) +
                2 * parsePX(graphParams.BOX_BORDER_WIDTH) +
                parsePX(graphParams.BOX_PADDING)) * 0.9 + 15;
            top = parsePX(activeSkillBox.top);

            if (activeSkillID === 'strike_chaser') {
                top = this.props.parentHeight - 550;
            }
            else if (top + 250 > this.props.parentHeight) {
                top = this.props.parentHeight - 250;
            }
        }

        const divStyle = {
            visibility: visibility,
            left: left,
            top: top,
            maxWidth: this.maxWidth + 'px',
        }

        return <div className="SkillInfoPanel" style={divStyle}>
            {skillText}
        </div>
    }
}

export default SkillInfoPanel;