import React, {Component} from 'react';

import skillData from './data/skill_data';

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
        this.retirementIdx = props.retirementIdx;
        this.activeClassIdx = props.activeClassIdx;
        this.skillPointsTotal = calculate_sp(this.level, this.retirementIdx);
        this.skillPointsRemaining = -1;
    }

    render() {
        const class_opts = getClasses();
        const class_chosen = class_opts[this.activeClassIdx];

        return <div>Header Goes Here (doot)
            <ul>
                <li>activeClass: {class_chosen}:{this.activeClassIdx}</li>
                <li>Level: {this.level}</li>
                <li>RetirementIdx: {this.retirementIdx} </li>
                <li>skillPointsTotal: {this.skillPointsTotal}</li>
                <li>skillPointsRemaining: {this.skillPointsRemaining}</li>
            </ul>
        </div>
    }
}

export default Header;