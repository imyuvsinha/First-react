import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class cropPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout
        title="Crop Price"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <h1>Welcome to crop Price details</h1>
      </Layout>
    );
  }
}
