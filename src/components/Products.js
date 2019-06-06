import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Products" showBackNavigation={true}>
        <h1>Products:</h1>
      </Layout>
    );
  }
}
