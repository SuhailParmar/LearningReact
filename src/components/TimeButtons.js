import React, { Component } from "react";
import TimeField from "react-simple-timefield";

export default class TimeButtons extends Component {
  constructor() {
    super();
    this.state = {
      time: "00:00:00"
    };
  }

  onTimeChange = time => {
    this.setState({ time });
    let a = time.split(":");
    let time_hour = a[0];
    let time_minutes = a[1];
    let time_seconds = a[2];
    this.props.stateHandler({
      time_hour,
      time_minutes,
      time_seconds
    });
  };

  render() {
    const { time } = this.state.time;

    return (
      <div className="timeButtons">
        <h4> {header} </h4>
        <TimeField value={time} onChange={this.onTimeChange} showSeconds />
      </div>
    );
  }
}

let header =
  "Would you like to query a specific time? (Not Mandatory, 00:00:00 is default)";
