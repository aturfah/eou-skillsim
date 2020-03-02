
import React, {Component} from 'react';
import './skillTree.css';

// Data Import
import skillData from '../data/skill_data';

// Helper Functions
import {firstDegSkills} from '../helpers';


class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.firstSkills = firstDegSkills()
        this.buildSkillTree = this.buildSkillTree.bind(this);
        this._addSkill = this._addSkill.bind(this)
    }

    _addSkill(skillId) {
        console.log(skillId);
    }

    buildSkillTree(skillTreeData) {
        const objProps = this.props;
        const addSkillFunc = this._addSkill;

        const branches = skillTreeData.branches;
        const output = [];
        branches.forEach(function (skillBranch) {
            if (skillBranch.skill_data.length !== 0) {
                output.push(<h2>{skillBranch.name} Branch</h2>)
            }

            console.log(skillBranch.name);
            console.log(skillBranch.skill_data)
            skillBranch.skill_data.forEach(function (skillDatum) {
                console.log(skillDatum)
                let node = [];
                if (skillDatum.prerequisites.length === 0 || true === true) {
                    node.push(<span id={skillDatum._id}
                        onClick={() => addSkillFunc(skillDatum._id)}>{skillDatum.name}</span>);
                } else {
                    node.push(<span id={skillDatum._id}>{skillDatum.name}</span>);
                }

                console.log(node);
                if (objProps.skillsChosen.includes(skillDatum._id)) {
                    node.push(' (Active)')
                }

                node.push(<br/>)
                output.push(node)
            });
        })
        return <div>
            <p>Here is the Tree!!!</p>
            {output}
        </div>
    }

    render() {
        const skillTree = this.buildSkillTree(skillData[this.props.activeClassIdx])

        return <div className="SkillTree">
            Skill Data Goes Here (pew)
            {skillTree}
            </div>
    }
}

export default SkillTree;
