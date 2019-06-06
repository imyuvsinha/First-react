import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class cropPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Crop Price" showBackNavigation={true}>
        <h1>welcome to crop Price details</h1>
      </Layout>
    );
  }
}
