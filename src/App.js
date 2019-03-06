import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import MotorwayMap from "./components/Image";
import MotorwayButtons from "./components/MotorwayButtons";
import DaysButtons from "./components/DaysOfWeek";
import IncidentButtons from "./components/IncidentButtons";
import JunctionButtons from "./components/JunctionButttons";
import TimeButtons from "./components/TimeButtons";
import { saveAuthToken } from "./middleware/auth";
import { authenticatedRequest } from "./middleware/request";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    /**
     * On page load grab the authorization token
     */
    saveAuthToken();
    console.log("Saved Auth token to local storage.");
  }

  stateHandler = value => {
    this.setState(value);
    console.log(this.state);
  };

  buildQueryString = () => {
    let query = Object.keys(this.state)
      .map(key => key + "=" + this.state[key])
      .join("&");
    console.log(query);
    return query;
  };

  getFromAPI = () => {
    let query = this.buildQueryString();
    if (query) {
      let url = "http://localhost:8000/api/events/?" + query;
      console.log(url);
      let x = authenticatedRequest(url).then(result => {
        this.setState({ data: result });
        console.log(this.state.data);
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route
            path="/search"
            render={() => {
              return (
                <div className="searchPage">
                  <h1 className="searchTitle">{title}</h1>
                  <div className="searchTextDiv">{middletext}</div>
                  <MotorwayButtons stateHandler={this.stateHandler} />
                  <IncidentButtons stateHandler={this.stateHandler} />
                  <JunctionButtons stateHandler={this.stateHandler} />
                  <DaysButtons stateHandler={this.stateHandler} />
                  <TimeButtons stateHandler={this.stateHandler} />
                  <div className="submit">
                    <button onClick={this.getFromAPI}>Search!</button>
                  </div>
                </div>
              );
            }}
          />
          <Route
            path="/result"
            render={() => {
              return <h1>Temp</h1>;
            }}
          />
          <Route
            path="/help"
            render={() => {
              return <h1>Help</h1>;
            }}
          />
          <Route
            path="/home"
            render={() => {
              return <h1>Home</h1>;
            }}
          />
        </div>
      </Router>
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
