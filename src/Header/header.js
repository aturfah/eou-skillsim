import React, {Component} from 'react';
import './header.css';

import skillData from '../data/skill_data';

// Helper Functions
import {firstDegSkills} from '../helpers'

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

        // Updater Functions
        this._setLevel = this._setLevel.bind(this);
        this._changeLevel = this._changeLevel.bind(this)
        this._clearSkills = this._clearSkills.bind(this);
        this._resetAll = this._resetAll.bind(this);
        this.updateClassIdx = this.updateClassIdx.bind(this);
    }

    buildLevelBox() {
        return <div onClick={this._changeLevel}>Level: <span ref='level'>{this.props.level}</span></div>
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