import masterySkills from './data/mastery_skills';
import prereqData from './data/prereq_data';

function deepCopy (inObject) {
    // Stolen From
    // https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
    let outObject, value, key
  
    if(typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = (typeof value === "object" && value !== null) ? deepCopy(value) : value
    }
    
    return outObject
  }

export function listSubtract(listA, listB) {
    return listA.filter(x => !listB.includes(x))
}

export function listIntersect(listA, listB) {
    return listA.filter(x => listB.includes(x))
}

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

export function objCompare(objA, objB) {
    if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false
    }

    let outputFlag = true
    // Check B for A's keys
    Object.keys(objA).forEach(function (key) {
        if (!Object.keys(objB).includes(key)) {
            outputFlag = false;
        } else if (objB[key] !== objA[key]) {
            outputFlag = false;
        }
    });

    // Check A for B's keys
    Object.keys(objB).forEach(function (key) {
        if (!Object.keys(objA).includes(key)) {
            outputFlag = false;
        } else if (objB[key] !== objA[key]) {
            outputFlag = false;
        }
    });

    return outputFlag;
}

function verifySkillDependenciesAdd(chosenSkills) {
    let newChosenSkills = deepCopy(chosenSkills);

    Object.keys(newChosenSkills).forEach(function (skillId) {
        let preReq = prereqData[skillId]
        if (preReq !== undefined) {
            preReq.forEach(function (preReqSkill) {
                if (Object.keys(newChosenSkills).includes(preReqSkill._id)) {
                    if (newChosenSkills[preReqSkill._id] < preReqSkill.level) {
                        newChosenSkills[preReqSkill._id] = preReqSkill.level;
                    }
                } else {
                    newChosenSkills[preReqSkill._id] = preReqSkill.level;
                }
            });
        }
    })

    if (objCompare(newChosenSkills, chosenSkills)) {
        return -1
    } else {
        return newChosenSkills
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
    let validSkills = {};
    Object.keys(chosenSkills).forEach(function (skillId) {
        let validSkill = true;
        let preReq = prereqData[skillId];
        if (preReq !== undefined) {
            preReq.forEach(function (prSkill) {
                if (!Object.keys(chosenSkills).includes(prSkill._id)) {
                    validSkill = false;
                } else if(chosenSkills[prSkill._id] < prSkill.level) {
                    validSkill = false;
                }
            })
        }

        if (validSkill === true) {
            validSkills[skillId] = chosenSkills[skillId];
        }
    });

    if (objCompare(validSkills, chosenSkills)) {
        return -1
    } else {
        return validSkills;
    }
}

export function fixSkillDependencyDelete(chosenSkills) {
    let temp = verifySkillDependenciesDel(chosenSkills);
    while (temp !== -1) {
        chosenSkills = temp;
        temp = verifySkillDependenciesDel(chosenSkills);
    }

    return chosenSkills
}
