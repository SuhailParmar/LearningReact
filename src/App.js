import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import MotorwayMap from "./components/Image";
import MotorwayButtons from "./components/MotorwayButtons";
class App extends Component {
  render() {
    let Motorway = "M6";

    return (
      <div>
        <NavigationBar />
        <div className="appContainer">
          <h1 className="searchTitle">{title}</h1>
          <div className="searchTextDiv">
            <text> {middletext}</text>
          </div>
          <MotorwayButtons Motorway={Motorway} />
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
