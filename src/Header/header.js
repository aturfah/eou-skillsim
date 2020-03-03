import React, {Component} from 'react';
import './header.css';

import skillData from '../data/skill_data';

// Helper Functions
import {firstDegSkills, listIntersect} from '../helpers'

function calculate_sp(level, retirementIdx) {
    // TODO: Account for Retirement
    return level + 2
  }

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
        this.calculateSpRemaining = this.calculateSpRemaining.bind(this)
        this._setLevel = this._setLevel.bind(this)
        this._clearSkills = this._clearSkills.bind(this)
        this._resetAll = this._resetAll.bind(this)
    }

    calculateSpRemaining(sp) {
        const activeFDegSkills = listIntersect(Object.keys(this.props.skillsChosen), this.firstDegSkills);
        const skillsChosen = this.props.skillsChosen;

        let totalSpSpent = 0;
        Object.keys(skillsChosen).forEach(function (key) {
            totalSpSpent += skillsChosen[key];
        });

        return sp - totalSpSpent + activeFDegSkills.length
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
        const class_opts = getClasses();
        const class_chosen = class_opts[this.props.activeClassIdx];

        const skillPointsTotal = calculate_sp(this.props.level, this.props.retirementIdx);
        const skillPointsRemaining = this.calculateSpRemaining(skillPointsTotal)
        if (skillPointsRemaining < 0) {
            this._setLevel(this.props.level - skillPointsRemaining);
        }

        return <div className="HeaderBar">Header Goes Here (doot)
            <ul>
                <li>activeClass: {class_chosen}:{this.activeClassIdx}</li>
                <li onClick={this._changeLevel.bind(this)}>Level: <span ref='level'>{this.props.level}</span></li>
                <li>RetirementIdx: {this.props.retirementIdx} </li>
                <li>skillPointsTotal: {skillPointsTotal}</li>
                <li>skillPointsRemaining: {skillPointsRemaining}</li>
                <li onClick={() => this._clearSkills()}>CLEAR SKILLS!</li>
                <li onClick={() => this._resetAll()}>RESET</li>
            </ul>
        </div>
    }
}

export default Header;