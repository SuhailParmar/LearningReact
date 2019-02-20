import React, { Component } from "react";

/**
 * On button click save the Label to a variable and change
 * the button's colour to yellow.
 */

export default class MotorwayButtons extends Component {
  handleClick(event) {
    this.Motorway = event.target.className;
    console.log(this.Motorway);
  }

  render() {
    return (
      <div className="mwButtons">
        <h4> {header} </h4>
        <button
          className="M1"
          style={btnStyle}
          onClick={this.handleClick.bind(this)}
        >
          M1
        </button>
        <button
          className="M25"
          style={btnStyle}
          onClick={this.handleClick.bind(this)}
        >
          M25
        </button>
        <button
          className="M6"
          style={btnStyle}
          onClick={this.handleClick.bind(this)}
        >
          M6
        </button>
      </div>
    );
  }
}
let btnStyle = {
  margin: "10px",
  display: "inline-block"
  //backgroundColor: "grey"
};

let header = "Which Motorway would you like to query?";
