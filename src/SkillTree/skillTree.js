
import React, {Component} from 'react';
import './skillTree.css';

// Data Import
import masterySkills from '../data/mastery_skills';
import prereqData from '../data/prereq_data';
import skillData from '../data/skill_data';

function firstDegSkills() {
    const output = [];
    Object.keys(prereqData).forEach(function (key) {
        const datum = prereqData[key];
        let firstDeg = false;

        datum.forEach(function(prereqSkill) {
            if (masterySkills.includes(prereqSkill._id)) {
                firstDeg = true;
            }
        });

        if (firstDeg === true) {
            output.push(key);
        }
    })

    return output
}

class SkillTree extends Component {
    constructor(props) {
        super(props);
        this.firstSkills = firstDegSkills()
        console.log(props);
    }

    buildSkillTree(skillTreeData) {
        return <div>Here is the Tree!!!</div>
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
