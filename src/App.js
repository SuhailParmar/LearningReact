import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import MotorwayMap from "./components/Image";
import MotorwayButtons from "./components/MotorwayButtons";
import DaysButtons from "./components/DaysOfWeek";
import IncidentButtons from "./components/IncidentButtons";
class App extends Component {
  constructor() {
    super();
    this.state = {
      Motorway: "M0"
    };
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="appContainer">
          <h1 className="searchTitle">{title}</h1>
          <div className="searchTextDiv">
            <text> {middletext}</text>
          </div>
          <MotorwayButtons Motorway={this.state.Motorway} />
          <IncidentButtons />
          <DaysButtons />
        </div>
      </div>
    );
  }
}

// HTML
var title = "Search our Motorway database";
var middletext = `
On this page you're able to query the live motorway API,
you are able to see incident information on multiple
different motorways. You can query at any time of day.
Information is provided from the highways agency.
`;

export default App;
//<MotorwayMap />
