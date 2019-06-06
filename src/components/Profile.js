import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="MY Profile" showBackNavigation={true}>
        <h1>Settings:</h1>
      </Layout>
    );
  }
}
