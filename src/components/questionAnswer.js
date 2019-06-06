import React, { Component } from "react";
import Layout from "../layout/Layout";

export default class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="Question-Answer" showBackNavigation={true}>
        <h1>Q&Api:</h1>
      </Layout>
    );
  }
}
