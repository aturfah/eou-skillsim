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

function verifySkillDependenciesAdd(chosenSkills) {
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
    let temp = verifySkillDependenciesAdd(chosenSkills);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = verifySkillDependenciesAdd(temp);
    }

    // Check if Mastery unlocks other skills
    // TODO: FIX THIS ONCE LEVELS ARE TAKEN INTO ACCOUNT

    return chosenSkills
}

function verifySkillDependenciesDel(chosenSkills) {
    let validSkills = [];
    chosenSkills.forEach(function (skillId) {
        let validSkill = true;
        let preReq = prereqData[skillId];
        if (preReq !== undefined) {
            preReq.forEach(function (prSkill) {
                if (!chosenSkills.includes(prSkill._id)) {
                    validSkill = false;
                }
            });
        }
        if (validSkill === true) {
            validSkills.push(skillId)
        }
    })

    if (validSkills.length === chosenSkills.length) {
        console.log('HERE1')
        return -1
    } else {
        console.log('HERE2')
        return validSkills
    }
}

export function fixSkillDependencyDelete(chosenSkills) {
    let temp = verifySkillDependenciesDel(chosenSkills);
    while (temp !== -1) {
        console.log(chosenSkills)
        console.log(temp)
        chosenSkills = temp;
        temp = verifySkillDependenciesDel(chosenSkills);
    }

    

    return chosenSkills
}
