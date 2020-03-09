import React, {Component} from 'react';
import './skillInfo.css'

import skillData from '../data/skill_data';
import {parsePX} from '../helpers';

class SkillInfoPanel extends Component {
    render() {
        const activeClassIdx = this.props.activeClassIdx;
        const activeSkillID = this.props.activeInfo.activeSkillID;
        const activeSkillBox = this.props.activeInfo.activeSkillBox;
        const graphParams = this.props.activeInfo.graphParams;
        const skillDatum = skillData[activeClassIdx][activeSkillID]

        var visibility = 'hidden';
        var left = -1;
        var top = -1;
        if (activeSkillID !== null) {
            visibility = 'visible'
            left = parsePX(activeSkillBox.left) +
                (parsePX(graphParams.BOX_WIDTH) + 2 * parsePX(graphParams.BOX_BORDER_WIDTH)) / 4;
            top = parsePX(activeSkillBox.top) +
                (parsePX(graphParams.BOX_HEIGHT) + 2 * parsePX(graphParams.BOX_BORDER_WIDTH)) +
                parsePX(graphParams.BOX_PADDING / 4);
        }

        const divStyle = {
            visibility: visibility,
            left: left,
            top: top,
            maxWidth: '200px',
            maxHeight: '200px',
        }

        return <div className="SkillInfoPanel" style={divStyle}>
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
            doot doot doot doot doot doot doot doot doot doot
        </div>
    }
}

export default SkillInfoPanel;