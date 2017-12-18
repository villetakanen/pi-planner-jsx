import React, { Component } from 'react';
import Task from './Task.jsx';

/*
 *Ville: inProgress
 */
class Plan extends Component{
  exampleEvent(name){
    window.alert("Hey, it works for "+ name);
  }

  render(){
    return(<svg height="1080px" width={window.innerWidth} className="Increment">
      <Title value={this.props.data.name}/>
      <Sprint name="Create" order="0" scale={window.innerWidth}/>
      <Sprint name="Create" order="1" scale={window.innerWidth}/>
      <Sprint name="Fix" order="2" scale={window.innerWidth}/>
    </svg>
    );
  }
}

/*
 * Ville: inProgress
 */
class Title extends Component{
  render(){
    return(
      <g>
        <rect className="Label-box" fill="blue" x="10" y="10" width="300" height="30"/>
        <text x="20" y="30" font-sixe="10">{this.props.value}</text>
      </g>);
  }
}

/*
 * Placeholder
 */
class Sprint extends Component{

  constructor(props) {
    super(props);
    const w=(0+this.props.scale-80)/3;
    this.state={
      width:w,
      x:(0+this.props.order)*(w+10)+10,
      height:window.innerHeight-200
    }
  }

  render(){
    return(
      <g>
        <rect className="Label-box" x={this.state.x} y="50" width={this.state.width} height={this.state.height}/>
        <text x={this.state.x+10} y="70" font-sixe="10">{this.props.name}</text>
      </g>);
  }

}

export default Plan;
