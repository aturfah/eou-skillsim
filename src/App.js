import React, {Component} from 'react';
import './App.css';

// Component Import
import Header from './Header/header'
import SkillTree from './SkillTree/skillTree'

// Function Import
import {fixSkillDependencyAdd,
  fixSkillDependencyDelete,
  firstDegSkills,
  calculateTotalSP,
  listIntersect} from './helpers'

function defaultState() {
  return {
    level: 1,
    retirementIdx: 0,
    skillsChosen: {},
    activeClassIdx: 0
  };
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState()
    this.firstDegSkills = firstDegSkills();
    this.calculateSpRemaining = this.calculateSpRemaining.bind(this)
  }

  calculateSpRemaining() {
    const sp = calculateTotalSP(this.state.level, this.state.retirementIdx)
    const activeFDegSkills = listIntersect(Object.keys(this.state.skillsChosen), this.firstDegSkills);
    const skillsChosen = this.state.skillsChosen;

    let totalSpSpent = 0;
    Object.keys(skillsChosen).forEach(function (key) {
        totalSpSpent += skillsChosen[key];
    });

    return sp - totalSpSpent + activeFDegSkills.length
}

  updateState(key, value=undefined) {
    // Reset Everything
    if (key === undefined) {
      console.log('Resetting State...')
      this.setState(defaultState);
      return
    }
    //Set a specific part of state
    let oldState = this.state;
    if (value === undefined) {
      value = defaultState()[key]
    }
    // Changing class resets everything
    if (key === 'activeClassIdx') { 
      console.log('Class change -> resetting state...')
      oldState = defaultState();
    }

    // Change parameters
    if (key === 'skillsChosen') {
      const skillId = value._id;
      const skillLevel = value.level;
      if (Object.keys(value).length === 0) {
        console.log('Resetting Skills')
        oldState.skillsChosen = {};
      } else if (skillLevel === 0) {
        console.log('Removing', skillId)
        delete oldState.skillsChosen[skillId];
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen);
      } else if (!Object.keys(oldState.skillsChosen).includes(skillId) ||
          oldState.skillsChosen[skillId] < skillLevel) {
        console.log('Increasing level of', skillId, 'to', skillLevel)
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyAdd(oldState.skillsChosen);
      } else if (oldState.skillsChosen[skillId] > skillLevel) {
        console.log('Decreasing level of', skillId, 'to', skillLevel);
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen);
      }
    } else {
      console.log('Setting', key, 'to', value)
      oldState[key] = value;
    }

    const spRemaining = this.calculateSpRemaining()
    if (spRemaining < 0) {
      console.log('Increasing level by', -1*spRemaining, 'to meet SP needs');
      oldState['level'] -= spRemaining;
    }

    this.setState(oldState);
  }

  render() {
    return (
      <div className="App">
        <Header
          updateMethod={this.updateState.bind(this)}
          level={this.state.level}
          retirementIdx={this.state.retirementIdx}
          skillsChosen={this.state.skillsChosen}
          skillPointsTotal={calculateTotalSP(this.state.level, this.state.retirementIdx)}
          skillPointsRemaining={this.calculateSpRemaining()}
          activeClassIdx={this.state.activeClassIdx}
        ></Header>
        <SkillTree
          updateMethod={this.updateState.bind(this)}
          skillsChosen={this.state.skillsChosen}
          activeClassIdx={this.state.activeClassIdx}
        ></SkillTree>
      </div>
    );
  }
}

export default App;
