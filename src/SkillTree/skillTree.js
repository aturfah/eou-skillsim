
import React, {Component} from 'react';
import SkillTreeNode from './skillTreeNode'
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
        console.log('-> _addSkill', skillId, 'clicked on');
        this.props.updateMethod('skillsChosen', skillId)
    }

    buildSkillTree(skillTreeData) {
        const objProps = this.props;
        const addSkillFunc = this._addSkill;
        const updateMethod = this.props.updateMethod;

        const branches = skillTreeData.branches;
        const output = [];
        branches.forEach(function (skillBranch) {
            if (skillBranch.skill_data.length !== 0) {
                output.push(<h2>{skillBranch.name} Branch</h2>)
            }

            skillBranch.skill_data.forEach(function (skillDatum) {
                output.push(<SkillTreeNode
                    skillData={skillDatum}
                    activeFlag={Object.keys(objProps.skillsChosen).includes(skillDatum._id)}
                    onClickFunc={() => addSkillFunc(skillDatum._id)}
                    skillLevel={0}
                    updateMethod={updateMethod}
                ></SkillTreeNode>)
            });
        })
        return <div>
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
