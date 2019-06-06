import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class cropInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Crop Information" showBackNavigation={true}>
        <h1>welcome to cropInformation</h1>
      </Layout>
    );
  }
}
