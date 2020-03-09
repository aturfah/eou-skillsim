import React, {Component} from 'react';
import './skillInfo.css'

class SkillInfoPanel extends Component {
    render() {
        const activeClassIdx = this.props.activeClassIdx;
        const activeSkillID = this.props.activeInfo.activeSkillID;
        const activeSkillBox = this.props.activeInfo.activeSkillBox;


        var visibility = 'hidden'
        if (activeSkillID !== null) {
            visibility = 'visible'
        }

        const divStyle = {
            visibility: visibility
        }

        console.log(activeClassIdx, activeSkillID, activeSkillBox)
        console.log(divStyle)

        return <div className="SkillInfoPanel" style={divStyle}>
            doot
        </div>
    }
}

export default SkillInfoPanel;