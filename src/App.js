import React, { Component } from 'react';
import './App.css';
import Feature from './Feature.jsx';
import Dependency from './Dependency.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple PI planner</h1>
        </header>
        <Planner></Planner>
      </div>
    );
  }
}

class Planner extends Component{

  constructor(props) {
    super(props);
    this.state = {
      sprints: ["01 - Create", "02 - Create", "03 - Fix"]
    }
    this.dependencymap=<Dependency area={this}/>;
    this.onClick = (evt) => {this.state.sprints.push("New Sprint");
    console.log(this.state.sprints);
    this.forceUpdate()};
  }

  rendersprints(sprints){
    return sprints.map((sprint) => <Sprint name={sprint}/>);
  }

  render(){
    return(
      <div>
      <div className="dependencymap">{this.dependencymap}</div>

      <div className="Planner">
      {this.rendersprints(this.state.sprints)}
      <div onClick={this.onClick}>Add Sprint</div>
      </div>
    </div>);
  };
}


class Sprint extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.name,
      features: ["example"]
    };
    this.onChange = (evt) => this.setState({value: evt.target.value});
    this.onFocus = (evt) => evt.target.select();
    this.onClick = (evt) => {this.state.features.push("New Feature");
    console.log(this.state.features);
    this.forceUpdate()};

  }

  renderfeatures(features){
    return features.map((feature) => <Feature name={feature}/>);
  }

  render(){
    return(<div className="Sprint">
      <input value={this.state.value} onChange={this.onChange} onFocus={this.onFocus}/>
      {this.renderfeatures(this.state.features)}
      <div onClick={this.onClick}>Add Feature</div>
    </div>);
  }

}


export default App;
