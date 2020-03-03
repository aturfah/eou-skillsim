import React, {Component} from 'react';
import './skillTree.css';

class SkillTreeNode extends Component {
    constructor(props) {
        super(props)

        this.increaseSkillLevel = this.increaseSkillLevel.bind(this);
        this.decreaseSkillLevel = this.decreaseSkillLevel.bind(this);
    }

    increaseSkillLevel() {
        if (this.props.skillLevel < 10) {
            console.log('Increasing Skill Level')
            this.props.updateMethod('skillsChosen',
                {_id: this.props.skillData._id, level: this.props.skillLevel + 1})
        }
    }

    decreaseSkillLevel() {
        if (this.props.skillLevel > 0) {
            console.log('Decreasing Skill Level')
            this.props.updateMethod('skillsChosen',
            {_id: this.props.skillData._id, level: this.props.skillLevel - 1})
        }
    }

    render() {
        // console.log(this.props)
        let header = null;
        if(this.props.activeFlag) {
            header = <b>{this.props.skillData.name}</b>
        } else {
            header=<span>{this.props.skillData.name}</span>
        }

        let levelInfo = <span>Lv.{this.props.skillLevel}</span>;

        return(<div id={this.props.skillData._id}
                onClick={() => {}}>
                    {header} {levelInfo} &nbsp;&nbsp;&nbsp;
                    <span onClick={() => this.increaseSkillLevel()}>(Lv. &uarr;)</span> 
                    <span onClick={() => this.decreaseSkillLevel()}>(Lv. &darr;)</span></div>)
    }
}

export default SkillTreeNode;