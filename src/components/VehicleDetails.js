import React, { Component } from "react";
import Layout from "../layout/Layout";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: window.innerWidth
  }
};

export default class VehicleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }
  handleChange = value => {
    this.setState({
      slideIndex: value
    });
  };

  render() {
    console.log(this.props.match.params.id);
    let vehicle = null;
    if (this.props.vehicles.length > 0) {
      vehicle = this.props.vehicles.find(
        e => e.id === this.props.match.params.id
      );
      console.log(vehicle);
    }
    return (
      <Layout
        title="title"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div>
          <span style={{ margin: 20, fontSize: 20 }} />
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
            tabItemContainerStyle={{ backgroundColor: "grey" }}
            inkBarStyle={{ backgroundColor: "MediumSeaGreen" }}
          >
            <Tab
              label="Requests"
              value={0}
              labelStyle={{ fontSize: 10, textColor: "blue" }}
            />
            <Tab label="Accepted" value={1} />
            {/* <Tab label="Action" value={2} /> */}
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div>
              <h2 style={styles.headline}>List of Bookers request</h2>
              <table style={styles.table}>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Area</th>
                  <th>Action</th>
                </tr>
              </table>
              <br />
            </div>
            <div style={styles.slide}>Second Data</div>
            {/* <div style={styles.slide}>slide n°3</div> */}
          </SwipeableViews>
        </div>
      </Layout>
    );
  }
}
