import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Messages" showBackNavigation={true}>
        <h1>Conversations:</h1>
      </Layout>
    );
  }
}
