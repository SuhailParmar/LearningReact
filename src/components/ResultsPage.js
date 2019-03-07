import React, { Component } from "react";
import { authenticatedRequest } from "../middleware/request";
import { VictoryBar, VictoryChart } from "victory";

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
          reason: 1
        }
      ]
    };
  }

  getEventsFromAPI = () => {
    console.log(this.props.url);
    authenticatedRequest(this.props.url).then(result => {
      this.setState({ data: result });
      console.log(this.state.data);
    });
  };

  componentDidMount() {
    this.getEventsFromAPI();
  }

  chartRender() {
    const sdata = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 }
    ];

    const x = [
      {
        time_day_worded: "Mon",
        reason: "accident"
      }
    ];

    return (
      <div>
        <VictoryChart>
          <VictoryBar data={this.state.data} x="time_day_worded" y="reason" />
        </VictoryChart>
      </div>
    );
  }

  render() {
    return (
      <div className="resultsPage">
        <h1>Results</h1>
        <this.chartRender />
      </div>
    );
  }
}

/**
 * <h4>{this.state.data}</h4>
 */
