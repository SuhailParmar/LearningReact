import React, { Component } from "react";

/**
 * On button click save the Label to a variable and change
 * the button's colour to yellow.
 */

export default class MotorwayButtons extends Component {
  onclick = () => {};

  render() {
    return (
      <div className="mwButtons">
        <button className="M1" style={btnStyle}>
          M1
        </button>
        <button style={btnStyle}>M25</button>
        <button style={btnStyle}>M6</button>
      </div>
    );
  }
}

let btnStyle = {
  margin: "10px",
  display: "inline-block"
};

let Motorway = "M6";
