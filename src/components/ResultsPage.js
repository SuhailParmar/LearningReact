import React, { Component } from "react";
import { authenticatedRequest } from "../middleware/request";

/**
 * Page for when the results have loaded
 */
export default class ResultsPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.getFromAPI();
  }

  getFromAPI = () => {
    let query = localStorage.getItem("QUERY_STRING");
    if (query) {
      let url = "http://localhost:8000/api/events/?" + query;
      console.log(url);
      let req = authenticatedRequest(url).then(result => {
        this.setState({ data: result });
        console.log(this.state.data);
      });
    }
  };

  render() {
    return (
      <div className="resultsPage">
        <h1>Results</h1>
      </div>
    );
  }
}
