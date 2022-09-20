import React, {Component} from 'react';
import './header.css';

import skillData from '../data/skill_data';

// Helper Functions
import {isNumber} from '../helpers'

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
        this.classOpts = getClasses();

        // Element Builder Functions
        this.buildClassDropdown = this.buildClassDropdown.bind(this);
        this.buildLevelBox = this.buildLevelBox.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
        this.buildRetirementBox = this.buildRetirementBox.bind(this);
        this.updateRetirementIdx = this.updateRetirementIdx.bind(this);

        // Updater Functions
        this._setLevel = this._setLevel.bind(this);
        this._changeLevel = this._changeLevel.bind(this)
        this._clearSkills = this._clearSkills.bind(this);
        this._resetAll = this._resetAll.bind(this);
        this.updateClassIdx = this.updateClassIdx.bind(this);
    }


    updateRetirementIdx() {
        this.props.updateMethod('retirementIdx', parseInt(this.refs.retirementDropdownList.value))
    }

    buildRetirementBox() {
        const retirementLabels = ['N/A', '30-39', '40-49', '50-59', '60-69', '70-98', '99']
        const retirementOpts = []
        retirementLabels.forEach(function (label, idx) {
            retirementOpts.push(<option key={label} value={idx}>{label}</option>)
        })

        return <div><span className="HeaderLabel">Retirement Level:</span> <select
                ref="retirementDropdownList"
                value={this.props.retirementIdx}
                onChange={() => this.updateRetirementIdx()}>
                {retirementOpts}
            </select>
        </div>
    }

    updateMaxLevel() {
        const maxLevelBox = this.refs.maxLevelDropdownList;
        let newLevel = maxLevelBox.value;
        this.props.updateMethod('maxLevel', newLevel);
    }

    buildMaxLevelBox() {
        const levelBoxOpts = []
        for (let i = 1; i < 100; i++) {
            levelBoxOpts.push(<option key={i} value={i}>{i}</option>)
        }

        return <div>
        <span className="HeaderLabel">Max Level:</span> <select
            value={this.props.maxLevel}
            ref='maxLevelDropdownList'
            id='maxLevelDropdown'
            onChange={() => {this.updateMaxLevel()}}
        >
            {levelBoxOpts}
        </select>
        </div>
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
        <span className="HeaderLabel">Level:</span> <select
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
            <span className="HeaderLabel">Class:</span> <select
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

    _copySkillsClipboard() {
        this.props.copySkillsClipboard()
    }

    render() {
        const classDropdown = this.buildClassDropdown(this.classOpts);
        const skillPointsInfo = <div><span className="HeaderLabel">Skill Points:</span> {this.props.skillPointsRemaining}/{this.props.skillPointsTotal}</div>;
        const levelBox = this.buildLevelBox()
        const retirementBox = this.buildRetirementBox()
        const maxLevelBox = this.buildMaxLevelBox()

        const imgStyle = {
            float: 'left',
            marginLeft: '5%',
        }

        return <div className="HeaderBar">
            <div className="HeaderImg">
                <a href="https://github.com/aturfah/eou-skillsim">
                <img src={process.env.PUBLIC_URL + "/skillsim_img.png"}  alt="alt_text" style={imgStyle}/>
                </a>
            </div>
            <div className="HeaderControls">
                {classDropdown}
                {levelBox}
                {maxLevelBox}
                {retirementBox}
                {skillPointsInfo}
                <div>
                    <span className="ButtonText" onClick={() => this._clearSkills()}>(CLEAR SKILLS)</span> <br/>
                    <span className="ButtonText" onClick={() => this._copySkillsClipboard()}>(COPY BUILD)</span>
                </div>
            </div>
        </div>
    }
}

export default Header;