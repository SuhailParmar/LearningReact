import React, { Component } from "react";

export default class DaysButtons extends Component {
  state = {
    daysOfWeek: {
      Mon: 0, //If clicked
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0
    }
  };

  handleClick(day) {
    let daysOfWeek = this.state.daysOfWeek;
    daysOfWeek[day] === 0 ? (daysOfWeek[day] = 1) : (daysOfWeek[day] = 0);
    console.log(daysOfWeek);
    this.setState({ daysOfWeek });
  }

  render() {
    return (
      <div className="daysButtons">
        <h4>
          Is there a day of the week you are most interested in? (Not Mandatory)
        </h4>
        <button
          className="Mon"
          style={{
            backgroundColor: this.state.daysOfWeek.Mon ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Mon", e)}
        >
          Monday
        </button>
        <button
          className="Tue"
          style={{
            backgroundColor: this.state.daysOfWeek.Tue ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Tue", e)}
        >
          Tuesday
        </button>
        <button
          className="Wed"
          style={{
            backgroundColor: this.state.daysOfWeek.Wed ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Wed", e)}
        >
          Wednesday
        </button>
        <button
          className="Thu"
          style={{
            backgroundColor: this.state.daysOfWeek.Thu ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Thu", e)}
        >
          Thursday
        </button>
        <button
          className="Fri"
          style={{
            backgroundColor: this.state.daysOfWeek.Fri ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Fri", e)}
        >
          Friday
        </button>
        <button
          className="Sat"
          style={{
            backgroundColor: this.state.daysOfWeek.Sat ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Sat", e)}
        >
          Saturday
        </button>
        <button
          className="Sun"
          style={{
            backgroundColor: this.state.daysOfWeek.Sun ? "red" : "grey",
            margin: "10px",
            display: "inline-block"
          }}
          onClick={e => this.handleClick("Sun", e)}
        >
          Sunday
        </button>
      </div>
    );
  }
}
