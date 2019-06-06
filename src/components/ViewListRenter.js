import React, { Component } from "react";
import Layout from "../layout/Layout";
import { approved } from "../stylesheets/color";
import Divider from "material-ui/Divider";
import { withRouter } from "react-router-dom";
const styles = {
  mainDiv: {
    backgroundColor: "MediumSeaGreen"
  }
};
export default class ViewListRenter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="View List" showBackNavigation={true}>
        <div style={styles.mainDiv}>
          <h2>List of Renters:</h2>
        </div>
      </Layout>
    );
  }
}
