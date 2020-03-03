import React, {Component} from 'react';
import './skillTree.css';

class SkillTreeNode extends Component {
    constructor(props) {
        super(props)

        this.incrementSkillLevel = this.incrementSkillLevel.bind(this);
        this.increaseSkillLevel = this.increaseSkillLevel.bind(this);
        this.decreaseSkillLevel = this.decreaseSkillLevel.bind(this);
        this.maxSkillLevel = this.maxSkillLevel.bind(this);
        this.minSkillLevel = this.minSkillLevel.bind(this);
    }

    increaseSkillLevel() {
        if (this.props.skillLevel < 10) {
            this.incrementSkillLevel(1)
        }
    }

    incrementSkillLevel(levelDelta) {
            console.log('Modifying Skill Level by', levelDelta)
            this.props.updateMethod('skillsChosen',
                {_id: this.props.skillData._id, level: this.props.skillLevel + levelDelta})
    }

    maxSkillLevel() {
        const delta = 10 - this.props.skillLevel;
        if (delta > 0) {
            console.log('Maxing out skill level')
            this.incrementSkillLevel(delta)
        }
    }

    minSkillLevel() {
        console.log('Setting skill level to 0')
        this.incrementSkillLevel(0 - this.props.skillLevel)
    }

    decreaseSkillLevel() {
        if (this.props.skillLevel > 0) {
            console.log('Decreasing Skill Level')
            this.incrementSkillLevel(-1);
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
                    {header} {levelInfo} <br/>
                    <span onClick={() => this.increaseSkillLevel()}>(Lv. &uarr;)</span> &nbsp;
                    <span onClick={() => this.maxSkillLevel()}>(Lv. &uArr;)</span> &nbsp;
                    <span onClick={() => this.decreaseSkillLevel()}>(Lv. &darr;)</span> &nbsp;
                    <span onClick={() => this.minSkillLevel()}>(Lv. &dArr;)</span></div>)
    }
}

export default SkillTreeNode;