import React, { Component } from 'react';

/*
 *Ville: inProgress
 */
class Plan extends Component{
  exampleEvent(name){
    window.alert("Hey, it works for "+ name);
  }

  renderSprints(data){
    return(
      data.sprints.map((sprint, i)=> <Sprint name={sprint.name} order={i} features={sprint.features} controller={this}/>)
    );
  }

  renderDependencies(data){
    let i=0;
    let j=0;
    let locs={};
    for(const sprint in data.sprints){
      for (const feature in sprint.features){
        const id=feature.id;
        console.log(id);
        let xc=10+i*310;
        let yc=80+j*50;
        locs=locs+{id:{"xc":xc, "yc":yc}};
        j++;
      }
      i++;
    }
    console.log(locs.id+ " aaa " );

    let rval={};

    for(const sprint in data.sprints){
      for (const feature in sprint.features){
        for(const dep in feature.dependencies){
          console.log(dep);
          rval=rval+ <Dependency ox={locs.dep.id.xc}/>
        }
      }
    }
  }

  render(){
    return(<svg height="1080px" width="1920" className="Increment">
      <Title value={this.props.data.name}/>
      {this.renderSprints(this.props.data)}
      {this.renderDependencies(this.props.data)}
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
    this.onClick= (evt) => this.props.controller.exampleEvent(this.props.name);
    this.xc=10+this.props.order*310;
    let features=0;
    if (this.props.features!=null) features=this.props.features.length || 0;
    this.height=features*40+50+10;
    console.log("order is: "+this.props.order+" and "+this.height);
  }
  renderTasks(data, sprint){
    return(
      data.map((task, i)=> <Task name={task.name} sprint={sprint} order={i} controller={this}/>)
    );
  }

  render(){
    return(
      <g>
        <rect className="Label-box" fill="red" x={this.xc} y="50" width="300" height={this.height} onClick={this.onClick}/>
        <text x={this.xc+10} y="70" font-sixe="10">{this.props.name}</text>
        {this.renderTasks(this.props.features, this.props.order)}
      </g>);
  }
}


class Task extends Component{
  constructor(props) {
    super(props);
    this.xc=15+this.props.sprint*310;
    this.yc=80+this.props.order*50;
  }
  render(){
    return(
      <g>
        <rect class="Label-box" fill="green" x={this.xc} y={this.yc} width="280" height="30"/>
        <text x={this.xc+10} y={this.yc+20} className="Plan-title">{this.props.name}</text>
      </g>);
  }
}/**/


class Dependency extends Component{
  prepareCords() {
      let coords = {
        x1: this.props.x1,
        y1: this.props.y1,
        x2: this.props.x2,
        y2: this.props.y2
      }
      return coords;
    }
    render(){
      let coords=this.prepareCords();
      return(<line {...coords} stroke="green" strokeWidth={2} />
      );
}
}/**/


export default Plan;
