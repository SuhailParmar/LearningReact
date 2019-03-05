import React, { Component } from "react";
import TimeField from "react-simple-timefield";

export default class TimeButtons extends Component {

  constructor(){
    super();
    this.state = {
      time: "00:00:00"
    }
  }

  onTimeChange = (time) => {
    //this.setState({ time });
    this.setState({time});
    this.props.stateHandler({time});
  }

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
