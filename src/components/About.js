import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="ABOUT">
        <h1>HEllo About</h1>
      </Layout>
    );
  }
}
