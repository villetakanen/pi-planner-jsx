import React, { Component } from 'react';

class Task extends Component{
  constructor(props) {
    super(props);

    const scale=this.props.scale;

    this.state={
      "x": 20 + this.props.sprintindex * scale,
      "y": 50 + this.props.teamindex * scale,
      "height": 30,
      "width": 150,
      "teamindex": 0 + this.props.team,
      "sprintindex": 0 + this.props.sprint
    }
  }
  render(){
    return(
      <g>
        <rect
          className="Task-box"
          x={this.state.x}
          y={this.state.x}
          width={this.state.width}
          height={this.state.height}
        />
        <text
          x={this.x+10}
          y={this.y+20}
          className="Plan-title"
          onClick={this.props.controller.editTask(this)}>{this.props.name}</text>
      </g>);
  }
}

export default Task;
