import React, { Component } from 'react';
import link from './linker.svg';

class Feature extends Component{
  constructor(props) {
    super(props);
    this.state = {value: this.props.name};
    this.onChange = (evt) => this.setState({value: evt.target.value});
    this.onFocus = (evt) => evt.target.select();
  }
  render(){
    return(<div className="Feature">
      <input value={this.state.value} onChange={this.onChange} onFocus={this.onFocus}/>
      <img className="linker" src={link}/>
    </div>);
  }
}
export default Feature;
