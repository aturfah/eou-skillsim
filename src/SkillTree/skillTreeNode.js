import React, {Component} from 'react';
import './skillTree.css';

class SkillTreeNode extends Component {
    render() {
        console.log(this.props)
        let header = null;
        if(this.props.activeFlag) {
            header = <b>{this.props.skillData.name}</b>
        } else {
            header=<span>{this.props.skillData.name}</span>
        }


        return(<div id={this.props.skillData._id}
                onClick={this.props.onClickFunc}>{header} Lv.{this.props.skillLevel}</div>)
    }
}

export default SkillTreeNode;