import React, { Component } from "react";

export default class JunctionButtons extends Component {
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
    let Junction = e.target.className;
    for (var i = 0; i < buttonColours.length; i++) {
      if (i == index) {
        buttonColours[i] = "red";
      } else {
        buttonColours[i] = "grey";
      }
    }
    this.setState({ buttonColours, Junction });
  }

  render() {
    console.log("Clicked " + this.state.Junction);
    return (
      <div className="juncButtons">
        <h4> {header} </h4>
        <button
          className="J3"
          style={{
            backgroundColor: this.state.buttonColours[0],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(0, e)}
        >
          J3
        </button>
        <button
          className="J41"
          style={{
            backgroundColor: this.state.buttonColours[1],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(1, e)}
        >
          J41
        </button>
        <button
          className="J32"
          style={{
            backgroundColor: this.state.buttonColours[2],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(2, e)}
        >
          J32
        </button>
      </div>
    );
  }
}
let m = {
  margin: "10px",
  display: "inline-block"
};

let header =
  "Is there a specific Junction you would like to investigate? (Not Mandatory)";
