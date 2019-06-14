import React, { Component } from "react";
import Layout from "../layout/Layout";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

const styles = {
  mainDiv: {
    backgroundColor: "MediumSeaGreen"
  },
  table: {
    paddingLeft: 0,
    paddingRight: 0
  },
  ButtonDiv: {
    margin: 144,
    width: 100,
    height: 50,
    borderRadius: 24,
    //  paddingLeft: 12,
    marginTop: 122
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: window.innerWidth
  },
  tableRow: {
    border: "1px solid #dddddd",
    textAlign: "left",
    paddingLeft: 10,
    width: window.innerWidth
  }
};

class MyVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e, name) => {
    this.setState({ vehicleName: name });
  };

  render() {
    return (
      <Layout
        title="My Vehicle"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDiv}>
          <h2>List of Vehicles :</h2>
        </div>
        <div style={styles.tableDiv}>
          <table style={styles.table}>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {this.props.vehicleList.map(vehicleData => (
              <tr style={styles.tableRow}>
                <td style={{ padding: 20 }}>{vehicleData.data.vehicleName}</td>
                <td>
                  <RaisedButton
                    label="Booking Details"
                    buttonStyle={{
                      borderRadiundefinedus: 24,
                      backgroundColor: "MediumSeaGreen"
                    }}
                    onClick={e => {
                      e.preventDefault();
                      this.props.history.push(
                        "/myVehicle/vehicleDetails/" + vehicleData.id
                      );
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Layout>
    );
  }
}
export default withRouter(MyVehicle);
