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
          reason: 1,
          time_year: "2019"
        }
      ]
    };
  }

  getEventsFromAPI = () => {
    console.log(this.props.url);
    authenticatedRequest(this.props.url).then(result => {
      this.setState({ data: result });
      console.log(result);
    });
  };

  componentDidMount() {
    this.getEventsFromAPI();
  }

  chartRender = () => {
    return (
      <div>
        <VictoryChart domainPadding={20}>
          <VictoryBar
            data={this.state.data}
            x="time_day_worded"
            //y="time_year"
          />
        </VictoryChart>
      </div>
    );
  };

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
