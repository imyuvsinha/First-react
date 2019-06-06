import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Weather Forecast" showBackNavigation={true}>
        <h1>weather Api:</h1>
      </Layout>
    );
  }
}
