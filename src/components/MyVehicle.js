import React, { Component } from "react";
import Layout from "../layout/Layout";
import { withRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";

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
    width: window.innerWidth - 50
  },
  tableRow: {
    border: "1px solid #dddddd",
    textAlign: "left",
    paddingLeft: 10,
    width: window.innerWidth - 50
  },
  firstCard: { marginBottom: 20 }
};

class MyVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      expandSecond: false
    };
  }
  handleChange = (e, name) => {
    this.setState({ vehicleName: name });
  };
  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };
  handleExpandSecondChange = expandSecond => {
    this.setState({ expandSecond: expandSecond });
  };

  render() {
    console.log(this.props.vehicleList);
    let thresherData = this.props.vehicleList.filter(
      listdata => listdata.vehicleType === "thresher"
    );
    let tractorData = this.props.vehicleList.filter(
      listdata => listdata.vehicleType === "tractor"
    );
    console.log(thresherData);
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
        {/* firstCard */}
        <div style={styles.firstCard}>
          <Card
            expanded={this.state.expanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Tractor List"
              subtitle=""
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Tractors" expandable={true} />
            <CardText expandable={true}>
              <div style={styles.tableDiv}>
                <table style={styles.table}>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                  {tractorData.map(vehicleData => (
                    <tr style={styles.tableRow}>
                      <td style={{ padding: 20 }}>{vehicleData.vehicleName}</td>
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
            </CardText>
          </Card>
        </div>
        {/* secondCard */}
        <div style={styles.secondCard}>
          <Card
            expanded={this.state.expandSecond}
            onExpandChange={this.handleExpandSecondChange}
          >
            <CardHeader
              title="Thresher List"
              subtitle=""
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Threshers" expandable={true} />
            <CardText expandable={true}>
              <div style={styles.tableDiv}>
                <table style={styles.table}>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                  {thresherData.map(vehicleData => (
                    <tr style={styles.tableRow}>
                      <td style={{ padding: 20 }}>{vehicleData.vehicleName}</td>
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
            </CardText>
          </Card>
        </div>
        <div style={{ margin: 108 }}>
          <RaisedButton
            label="Booking Details"
            buttonStyle={{
              borderRadiundefinedus: 24,
              backgroundColor: "MediumSeaGreen"
            }}
            onClick={e => {
              e.preventDefault();
              this.props.history.push(
                "/myVehicle/vehicleDetails/" + this.props.vehicleList
              );
            }}
          />
        </div>
        <div style={{ marginLeft: 50, marginTop: 20 }}>
          <FloatingActionButton
            style={{ marginLeft: 292, position: "fixed", bottom: 97 }}
            iconStyle={{
              width: 60,
              height: 60,
              backgroundColor: "MediumSeaGreen"
            }}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/myVehicle/uploadVehicle");
            }}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </Layout>
    );
  }
}
export default withRouter(MyVehicle);
