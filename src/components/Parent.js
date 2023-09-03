import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (newValue) => {
    this.setState({
      inputValue: newValue,
    });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <p>{this.state.inputValue}</p>
        <Child inputValue={this.state.inputValue} onInputChange={this.handleInputChange}/>
      </div>
    );
  }
}

export default Parent;