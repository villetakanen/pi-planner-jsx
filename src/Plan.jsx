import React, { Component } from 'react';

/*
 *Ville: inProgress
 */
class Plan extends Component{
  constructor(props) {
    super(props);
  }
  renderSprints(data){

  }
  render(){
    return(<svg height="1080px" width="1920" className="Increment">
      <Title value={this.props.data.name}/>
      {this.renderSprints(this.props.data)}
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
        <rect class="Label-box" fill="blue" x="10" y="10" width="300" height="22"/>
        <text x="15" y="15" className="Plan-title">{this.props.value}</text>
      </g>);
  }
}

/*
 * Placeholder
 */
class Sprint extends Component{
  render(){
    return(
      <g>
        <rect class="Label-box" fill="red" x="10" y="10" width="300" height="22"/>
        <text x="15" y="15" className="Plan-title">{this.props.value}</text>
      </g>);
  }
}

/*
 * Placeholder
 */
class Task extends Component{
  render(){
    return(
      <g>
        <rect class="Label-box" fill="green" x="10" y="10" width="300" height="22"/>
        <text x="15" y="15" className="Plan-title">{this.props.value}</text>
      </g>);
  }
}

/*
 * Placeholder
 */
class Dependency extends Component{
  prepareCords() {
      let coords = {
        x1: this.props.x1,
        y1: this.props.y1,
        x1: this.props.x2,
        y1: this.props.y2
      }
      return coords;
    }
    render(){
      let coords=this.prepareCords();
      return(<line {...coords} stroke="green" strokeWidth={2} />
      );
}
}


export default Plan;
