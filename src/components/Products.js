import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout
        title="Products"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <h1>Products:</h1>
        <img style={{ width: window.innerWidth }} src="/comingsoon.jpg" />
      </Layout>
    );
  }
}
