import React, { Component } from 'react';
import './App.css';
import Plan from './Plan.jsx';
import Data from './mockdata.json';
import OnABoat from './on_a_boat.svg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="Logo" src={OnABoat} alt="On a boat"/>
          <h1>On a Boat</h1>
        </header>
        <Planner></Planner>
      </div>
    );
  }
}

class Planner extends Component{

  render(){ 
    return(
      <div className="Planner">
        <Plan area={this} data={Data}/>
    </div>);
  };
}
export default App;
