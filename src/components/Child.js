import React, { Component } from 'react';

class Child extends Component {
  handleInput = (event) => {
    const newValue = event.target.value;
    this.props.onInputChange(newValue);
  };

  render() {
    return (
      <div className="child">
        <h2>Child Component</h2>
        <input className='input' type="text" value={this.props.inputValue} onChange={this.handleInput}/>
      </div>
    );
  }
}

export default Child;