import React, {Component} from 'react';
import './header.css';

import skillData from '../data/skill_data';

// Helper Functions
import {firstDegSkills, isNumber} from '../helpers'

function getClasses() {
    const classes = [];
    skillData.forEach(function (datum) {
      classes.push(datum.class)
    })
  
    return(classes);
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.level = props.level;
        this.firstDegSkills = firstDegSkills();
        this.classOpts = getClasses();

        // Element Builder Functions
        this.buildClassDropdown = this.buildClassDropdown.bind(this);
        this.buildLevelBox = this.buildLevelBox.bind(this);
        this.updateLevel = this.updateLevel.bind(this);

        // Updater Functions
        this._setLevel = this._setLevel.bind(this);
        this._changeLevel = this._changeLevel.bind(this)
        this._clearSkills = this._clearSkills.bind(this);
        this._resetAll = this._resetAll.bind(this);
        this.updateClassIdx = this.updateClassIdx.bind(this);
    }

    updateLevel() {
        const levelBox = this.refs.levelDropdownList;
        if (isNumber(levelBox.value)) {
            let newLevel = levelBox.value;
            if (newLevel) {
                newLevel = parseInt(newLevel);
                if (newLevel > 99) {
                    this._setLevel(99);
                } else {
                    this._setLevel(newLevel);
                }
            } else {
                this._setLevel();
            }
        }
    }

    buildLevelBox() {
        const levelBoxOpts = []
        for (let i = 1; i < 100; i++) {
            levelBoxOpts.push(<option key={i} value={i}>{i}</option>)
        }

        return <div>
        Level: <select
            value={this.props.level}
            ref='levelDropdownList'
            id='levelDropdown'
            onChange={() => {this.updateLevel()}}
        >
            {levelBoxOpts}
        </select>
        </div>
    }

    buildClassDropdown() {
        const classOptions = []
        this.classOpts.forEach(function(className, idx) {
            classOptions.push(<option key={idx + className} value={idx} >{className}</option>)
        })
        return <div>
            <select
                value={this.props.activeClassIdx}
                ref='classDropdownList'
                id="classDropdown"
                onChange={() => {this.updateClassIdx()}}>
            {classOptions}
            </select></div>
    }

    updateClassIdx() {
        const newClassIdx = this.refs.classDropdownList.value;
        console.log('Updating to class', newClassIdx, this.classOpts[newClassIdx]);
        this.props.updateMethod('activeClassIdx', newClassIdx);
    }

    _changeLevel() {
        const levelSpan = this.refs.level
        const newLevel = parseInt(levelSpan.textContent) + 1;
        console.log('-> _changeLevel', newLevel);
        this._setLevel(newLevel)
    }

    _setLevel(newLevel) {
        this.props.updateMethod('level', newLevel)
    }

    _clearSkills() {
        this.props.updateMethod('skillsChosen', undefined)
    }

    _resetAll() {
        this.props.updateMethod()
    }

    render() {
        const classDropdown = this.buildClassDropdown(this.classOpts);
        const skillPointsInfo = <div>Skill Points: {this.props.skillPointsRemaining}/{this.props.skillPointsTotal}</div>;
        const levelBox = this.buildLevelBox()

        return <div className="HeaderBar">Header Goes Here (doot)
            {classDropdown}
            {levelBox}
            {skillPointsInfo}
            <ul>
                <li>RetirementIdx: {this.props.retirementIdx} </li>
                <li onClick={() => this._clearSkills()}>CLEAR SKILLS!</li>
                <li onClick={() => this._resetAll()}>RESET</li>
            </ul>
        </div>
    }
}

export default Header;