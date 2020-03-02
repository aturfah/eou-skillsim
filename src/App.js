import React, {Component} from 'react';
import './App.css';

// Component Import
import Header from './Header/header'
import SkillTree from './SkillTree/skillTree'

function defaultState() {
  return {
    level: 1,
    retirementIdx: 0,
    skillsChosen: [],
    activeClassIdx: 0
  };
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState()
  }

  updateState(key, value=undefined) {
    let oldState = this.state;
    if (value === undefined) {
      value = defaultState()[key]
    }
    if (key === 'skillsChosen') {
      if (value === undefined) {
        console.log('Resetting Skills')
        oldState.skillsChosen = [];
      } else if (oldState.skillsChosen.includes(value)) {
        console.log('Removing', value)
        oldState.skillsChosen.splice( oldState.skillsChosen.indexOf(value), 1 );
      } else {
        console.log('Adding', value)
        oldState.skillsChosen.push(value);
      }
    } else {
      oldState[key] = value;
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
