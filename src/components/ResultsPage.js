import React, { Component } from "react";
import { authenticatedRequest } from "../middleware/request";
import {
  VictoryBar,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryPie
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
          junction: 1,
          reason: "accident",
          time_hour: 12
        },
        {
          time_day_worded: "Tue",
          time_year: "2019",
          junction: 2,
          reason: "accident",
          time_hour: 12
        },
        {
          time_day_worded: "Tue",
          time_year: "2019",
          junction: 3,
          reason: "congestion",
          time_hour: 6
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

  renderIncidentsRecorded = () => {
    return (
      <div className="incRecorded">
        <h3>
          There are {this.state.data.length} recorded incidents in the database.
        </h3>
      </div>
    );
  };

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
        <h4>Bar Chart: Number of incidents per Junction</h4>
        <VictoryChart domainPadding={10}>
          <VictoryAxis padding={2} label="Junction Number" />
          <VictoryAxis dependentAxis tickFormat={ticky} label="Occurrence" />
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

  renderIncidentsByType = () => {
    // Create a pie chart.
    let pieData = [];
    this.state.data.forEach(event => {
      let reason = event.reason;
      let index = -1;
      for (var i = 0; i < pieData.length; i++) {
        if (pieData[i].x === reason) {
          index = i;
          break;
        }
      }

      index === -1 ? pieData.push({ x: reason, y: 1 }) : (pieData[i].y += 1);
    });

    return (
      <div className="incByType">
        <h4>Pie Chart: Percentage of types of incident</h4>
        <VictoryPie
          padding={80}
          data={pieData}
          domainPadding={20}
          padAngle={3}
        />
      </div>
    );
  };

  renderIncidentsByDay = () => {
    // Create a bar chart.
    let lineData = [
      { x: "Mon", y: 0 },
      { x: "Tue", y: 0 },
      { x: "Wed", y: 0 },
      { x: "Thu", y: 0 },
      { x: "Fri", y: 0 },
      { x: "Sat", y: 0 },
      { x: "Sun", y: 0 }
    ];

    this.state.data.forEach(event => {
      let day = event.time_day_worded;
      for (var i = 0; i < lineData.length; i++) {
        if (lineData[i].x === day) {
          lineData[i].y += 1;
          break;
        }
      }
    });

    // Create the values for the Y axis
    let ticky = [];
    lineData.forEach(j => {
      ticky.push(j.y);
    });

    return (
      <div className="incByDay">
        <h4>Line Chart: Number of incidents recorded by day</h4>
        <VictoryChart>
          <VictoryAxis dependentAxis tickFormat={ticky} label="Occurrence" />
          <VictoryAxis padding={20} label="Day of the week" />
          <VictoryLine data={lineData} sortKey="x" />
        </VictoryChart>
      </div>
    );
  };

  renderIncidentsByHour = () => {
    let lineData = [];
    this.state.data.forEach(event => {
      let hour = event.time_hour;
      let index = -1;
      for (var i = 0; i < lineData.length; i++) {
        if (lineData[i].x === hour) {
          index = i;
          break;
        }
      }

      index === -1 ? lineData.push({ x: hour, y: 1 }) : (lineData[i].y += 1);
    });

    // Create the values for the Y axis
    let ticky = [];
    lineData.forEach(j => {
      ticky.push(j.y);
    });

    return (
      <div className="incPerHour">
        <h4>Bar Chart: Number of incidents per Junction</h4>
        <VictoryChart domainPadding={10}>
          <VictoryAxis padding={2} label="Hour Of Day (24/hr format)" />
          <VictoryAxis dependentAxis tickFormat={ticky} label="Occurrence" />
          <VictoryBar
            sortKey="x"
            data={lineData}
            barWidth={5}
            //labels={l => `${l.x}:00`}
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
        <this.renderIncidentsRecorded />
        <this.renderIncidentsPerJunction />
        <this.renderIncidentsByType />
        <this.renderIncidentsByDay />
        <this.renderIncidentsByHour />
      </div>
    );
  }
}
