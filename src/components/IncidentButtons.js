import React, { Component } from "react";

export default class IncidentButtons extends Component {
  constructor() {
    super();
    this.state = {
      buttonColours: ["grey", "grey", "grey"],
      Incident: ""
    };
  }

  /*state = {
    buttonColours: ["grey", "grey", "grey"],
    Incident: ""
  };*/

  /**
   * On button click save the Label to a variable
   * Change the clicked button to red and the rest
   * change to grey.
   * @param {*} index
   * @param {*} e The event
   */
  handleClick(index, e) {
    let buttonColours = this.state.buttonColours;
    let Incident = e.target.className; // Get the motorway button clicked
    for (var i = 0; i < buttonColours.length; i++) {
      i == index ? (buttonColours[i] = "red") : (buttonColours[i] = "grey");
    }
    this.setState({ buttonColours, Incident });
    console.log(this.state.Incident);
  }

  render() {
    console.log("Clicked " + this.state.Incident);
    return (
      <div className="mwButtons">
        <h4> {header} </h4>
        <button
          className="General-Obstruction"
          style={{
            backgroundColor: this.state.buttonColours[0],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(0, e)}
        >
          General-Obstruction
        </button>
        <button
          className="Congestion"
          style={{
            backgroundColor: this.state.buttonColours[1],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(1, e)}
        >
          Congestion
        </button>
        <button
          className="Accident"
          style={{
            backgroundColor: this.state.buttonColours[2],
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick(2, e)}
        >
          Accident
        </button>
      </div>
    );
  }
}

let header = "Which Incident would you like to query?";
