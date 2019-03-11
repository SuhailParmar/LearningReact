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
    for (var i = 0; i < buttonColours.length; i++) {
      i === index ? (buttonColours[i] = "red") : (buttonColours[i] = "grey");
    }
    // Junction is a stored as an array. Postgres requires {} for array fields.
    let junction = "{" + e.target.className + "}";
    this.setState({ buttonColours });
    this.props.stateHandler({ junction });
  }

  render() {
    return (
      <div className="juncButtons">
        <h4> {header} </h4>
        <button
          className="3"
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
          className="10"
          style={{
            backgroundColor: this.state.buttonColours[1],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(1, e)}
        >
          J10
        </button>
        <button
          className="19"
          style={{
            backgroundColor: this.state.buttonColours[2],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(2, e)}
        >
          J19
        </button>
      </div>
    );
  }
}

let header =
  "Is there a specific Junction you would like to investigate? (Not Mandatory)";
