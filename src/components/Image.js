import React, { Component } from "react";
import mw_map from "../mw_map.png";

export default class MotorwayMap extends Component {
  render() {
    return (
      <div className="motorwayMapContainer">
        <img
          className="motorwayMapImage"
          src={mw_map}
          alt="map of englands motorways."
        />
      </div>
    );
  }
}
