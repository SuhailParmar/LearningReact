import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import MotorwayMap from "./components/Image";
import MotorwayButtons from "./components/MotorwayButtons";
import DaysButtons from "./components/DaysOfWeek";
import IncidentButtons from "./components/IncidentButtons";
import JunctionButtons from "./components/JunctionButttons";
import TimeButtons from "./components/TimeButtons";
import { saveAuthToken } from "./authdata/auth";
import { authenticatedRequest } from "./middleware/request";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Motorway: "",
      Junction: "",
      Incident: "",
      daysOfWeek: {
        Mon: 0, //If clicked
        Tue: 0,
        Wed: 0,
        Thu: 0,
        Fri: 0,
        Sat: 0,
        Sun: 0
      },
      Time: ""
    };
  }

  componentDidMount() {
    saveAuthToken();
    console.log('HELLIO');
    authenticatedRequest('http://localhost:8000/api/events/').then(res => console.log(res))
  }

  stateHandler = (value) => {
    this.setState(value);
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="appContainer">
          <h1 className="searchTitle">{title}</h1>
          <div className="searchTextDiv">
            {middletext}
          </div>
          <MotorwayButtons stateHandler={this.stateHandler} />
          <IncidentButtons stateHandler={this.stateHandler}/>
          <JunctionButtons stateHandler={this.stateHandler}/>
          <DaysButtons stateHandler={this.stateHandler}/>
          <TimeButtons stateHandler={this.stateHandler}/>
        </div>
      </div>
    );
  }
}

// HTML
var title = "Search our Motorway dataaaabase";
var middletext = `
On this page you're able to query the live motorway API,
you are able to see incident information on multiple
different motorways. You can query at any time of day.
Information is provided from the highways agency.
`;


function postRequest(url, data){
}

