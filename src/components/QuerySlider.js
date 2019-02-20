import React, { Component } from "react";

/**
 * On button click save the Label to a variable and change
 * the button's colour to yellow.
 */

export default class QuerySlider extends Component {
  handleClick(event) {
    this.Motorway = event.target.className;
    console.log(this.Motorway);
  }

  render() {
    console.log(this.props);
    return (
      <div className="mwQuerySections">
        <div className="whichMotorwayDiv">
          <h4> {header} </h4>
          <div className="mwButtons">
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
        </div>
      </div>
    );
  }
}

let btnStyle = {
  margin: "10px",
  display: "inline-block"
};

let header = "Which Motorway would you like to query?";
