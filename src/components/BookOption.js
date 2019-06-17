import React, { Component } from "react";
import Layout from "../layout/Layout";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { withRouter } from "react-router-dom";
const style = {
  marginRight: 20
};

class BookOption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout
        title="Choose your criteria"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <h1 style={{ margin: 30 }}>Who are you?</h1>
        <div style={{ marginLeft: 100, marginBottom: 20 }}>
          <FloatingActionButton
            style={style}
            iconStyle={{ width: 200, height: 200, backgroundColor: "blue" }}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/book/bookVehicle");
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontFamily: "monospace",
                letterSpacing: 2
              }}
            >
              User
            </span>
          </FloatingActionButton>
        </div>
        <div style={{ marginLeft: 100 }}>
          <FloatingActionButton
            secondary={true}
            style={style}
            iconStyle={{
              width: 200,
              height: 200,
              backgroundColor: "MediumSeaGreen"
            }}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/myVehicle");
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontFamily: "monospace",
                letterSpacing: 2
              }}
            >
              Renter
            </span>
          </FloatingActionButton>
        </div>
      </Layout>
    );
  }
}
export default withRouter(BookOption);
