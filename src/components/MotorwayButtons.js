import React, { Component } from "react";

export default class MotorwayButtons extends Component {
  state = {
    buttonColours: ["grey", "grey", "grey"]
  };

  /**
   * On button click save the Label to a variable
   * Change the clicked button to red and the rest
   * change to grey.
   * @param {*} index
   * @param {*} e The event
   */
  handleClick(index, e) {
    let buttonColours = this.state.buttonColours;
    for (var i = 0; i < buttonColours.length; i++) {
      i === index ? (buttonColours[i] = "red") : (buttonColours[i] = "grey");
    }
    this.setState({ buttonColours });
    let motorway = e.target.className;
    this.props.stateHandler({ motorway });
  }

  render() {
    return (
      <div className="mwButtons">
        <h4> {header} </h4>
        <button
          className="1"
          style={{
            backgroundColor: this.state.buttonColours[0],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(0, e)}
        >
          M1
        </button>
        <button
          className="25"
          style={{
            backgroundColor: this.state.buttonColours[1],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(1, e)}
        >
          M25
        </button>
        <button
          className="6"
          style={{
            backgroundColor: this.state.buttonColours[2],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(2, e)}
        >
          M6
        </button>
      </div>
    );
  }
}
let m = {
  margin: "10px",
  display: "inline-block"
};

let header = "Which Motorway would you like to investigate? (Mandatory)";
