import React, { Component } from 'react';


class Dependency extends Component{
  constructor(props) {
    super(props);
    this.lines=[];
    this.area=props.area;
  }
  addline(origin, destination){
    this.lines.push(<Line ox={origin.left} oy={origin.top} dx={destination.left} dy={destination.top} />);
    this.forceUpdate();

  }
  render(){
    return(<svg width={this.props.area.widht} height={this.props.area.height}>
      <Line ox="100" dx="300" oy="200" dy="400" />
      {this.lines}
    </svg>
    );
  }
}
class Line extends Component{
  prepareCords() {
      let coords = {
        x1: this.props.ox,
        y1: this.props.oy,
        x1: this.props.dx,
        y1: this.props.dy
      }
      return coords;
    }
    render(){
      let coords=this.prepareCords();
      return(<line {...coords} stroke="green" strokeWidth={2} />
      );
}
}


export default Dependency;
