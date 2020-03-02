import masterySkills from './data/mastery_skills';
import prereqData from './data/prereq_data';

export function firstDegSkills() {
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

function verifySkillDependencies(chosenSkills) {
    let newChosenSkills = new Set(chosenSkills);
    chosenSkills.forEach(function (skillId) {
        let preReq = prereqData[skillId];
        if (preReq !== undefined) {
            preReq.forEach(function (preReqSkill) {
                newChosenSkills.add(preReqSkill._id)
            })
        }
    });
    newChosenSkills = [...newChosenSkills]

    if (newChosenSkills.filter(x => !chosenSkills.includes(x)).length !== 0) {
        return newChosenSkills;
    } else {
        return -1
    }
}

export function fixSkillDependencyAdd(chosenSkills) {
    // Check if Prerequisites needed
    let temp = verifySkillDependencies(chosenSkills);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = verifySkillDependencies(temp);
    }

    // Check if Mastery unlocks other skills
    // TODO: FIX THIS ONCE LEVELS ARE TAKEN INTO ACCOUNT

    return chosenSkills
}

export function fixSkillDependencyDelete(chosenSkills) {
    console.log(chosenSkills)
    return chosenSkills
}
