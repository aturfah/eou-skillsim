import React, {Component} from 'react';
import './header.css';

import skillData from '../data/skill_data';

// Helper Functions
import {firstDegSkills, listIntersect, calculateTotalSP} from '../helpers'

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
        this._setLevel = this._setLevel.bind(this);
        this._clearSkills = this._clearSkills.bind(this);
        this._resetAll = this._resetAll.bind(this);
        this.buildClassDropdown = this.buildClassDropdown.bind(this);
        this.updateClassIdx = this.updateClassIdx.bind(this);
    }

    updateClassIdx() {
        const newClassIdx = this.refs.classDropdownList.value;
        console.log('Updating to class', newClassIdx, this.classOpts[newClassIdx]);
        this.props.updateMethod('activeClassIdx', newClassIdx);
    }

    buildClassDropdown() {
        const classOptions = []
        this.classOpts.forEach(function(className, idx) {
            classOptions.push(<option key={idx + className} value={idx} >{className}</option>)
        })
        return <div>
            <select
                defaultValue={this.props.activeClassIdx}
                ref='classDropdownList'
                id="classDropdown"
                onChange={() => {this.updateClassIdx()}}>
            {classOptions}
            </select></div>
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
        const class_chosen = this.classOpts[this.props.activeClassIdx];
        const classDropdown = this.buildClassDropdown(this.classOpts);
        //const skillPointsTotal = calculateTotalSP(this.props.level, this.props.retirementIdx);
        //const skillPointsRemaining = this.calculateSpRemaining(skillPointsTotal)
        // if (skillPointsRemaining < 0) { // todo: Move this check to App level
        //     this._setLevel(this.props.level - skillPointsRemaining);
        // }

        return <div className="HeaderBar">Header Goes Here (doot)
            <ul>
                <li>activeClass: {class_chosen}:{this.activeClassIdx}</li>
                <li onClick={this._changeLevel.bind(this)}>Level: <span ref='level'>{this.props.level}</span></li>
                <li>RetirementIdx: {this.props.retirementIdx} </li>
                <li>skillPointsTotal: {this.props.skillPointsTotal}</li>
                <li>skillPointsRemaining: {this.props.skillPointsRemaining}</li>
                <li onClick={() => this._clearSkills()}>CLEAR SKILLS!</li>
                <li onClick={() => this._resetAll()}>RESET</li>
            </ul>
            {classDropdown}
        </div>
    }
}

export default Header;