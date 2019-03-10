import React, { Component } from "react";
import { authenticatedRequest } from "../middleware/request";
import {
  VictoryBar,
  VictoryGroup,
  VictoryAxis,
  VictoryChart,
  VictoryScatter
} from "victory";

/**
 * Page for when the results have loaded
 */
export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [
        {
          time_day_worded: "Mon",
          time_year: "2019",
          junction: 1
        },
        {
          time_day_worded: "Tue",
          time_year: "2019",
          junction: 2
        },
        {
          time_day_worded: "Tue",
          time_year: "2019",
          junction: 3
        },
        {
          time_day_worded: "Tue",
          time_year: "2019",
          junction: 3
        }
      ]
    };
  }

  getEventsFromAPI = () => {
    if (this.props.url) {
      authenticatedRequest(this.props.url).then(result => {
        var parsedEvents = [];
        result.forEach(string => {
          var parsedEvent = JSON.parse(string);
          parsedEvent.closest_cities = parsedEvent.closest_cities[0];
          parsedEvent.junction = parsedEvent.junction[0];
          parsedEvents.push(parsedEvent);
        });
        if (parsedEvents !== []) this.setState({ data: parsedEvents });
      });
    }
  };

  componentDidMount() {
    this.getEventsFromAPI();
  }

  renderIncidentsPerJunction = () => {
    // Create a graph based on number of
    // Events PER Junction
    let dataCopy = this.state.data;
    // Array of JSON, x=Junction Number {x : 25, y: 1}
    let junctions = [];
    dataCopy.forEach(event => {
      let j = event.junction;
      let found = false;
      // Check if the junction already exists
      for (var i = 0; i < junctions.length; i++) {
        if (junctions[i].x === j) {
          found = true;
          junctions[i].y += 1;
          break;
        }
      }
      if (!found) {
        junctions.push({ x: j, y: 1 });
      }
    });

    // Create the values for the Y axis
    let ticky = [];
    junctions.forEach(j => {
      ticky.push(j.y);
    });

    return (
      <div className="incPerJunc">
        <h3>Number of incidents per Junction</h3>
        <VictoryChart domainPadding={10}>
          <VictoryAxis />
          <VictoryAxis dependentAxis tickFormat={ticky} />
          <VictoryBar
            barWidth={5}
            data={junctions}
            domain={{ x: [1, 20] }}
            labels={l => `J${l.x}`}
            sortKey="x"
          />
        </VictoryChart>
      </div>
    );
  };

  render() {
    return (
      <div className="resultsPage">
        <h1>Here are your results!</h1>
        Query: {this.props.url}
        <this.renderIncidentsPerJunction />
      </div>
    );
  }
}

/**
 * <h4>{this.state.data}</h4>
 */
