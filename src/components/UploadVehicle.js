import React, { Component } from "react";
import Layout from "../layout/Layout";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Toggle from "material-ui/Toggle";
import { withRouter } from "react-router-dom";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  mainDiv: {
    margin: 15
  },
  innerDiv: {
    display: "flex",
    flexDirection: "column"
  },
  selectDiv: {
    display: "flex",
    flexDirection: "row"
  },
  spanStyle: {
    marginTop: 2,
    padding: 10
  }
};

class UploadVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerName: "",
      vehicleName: "",
      vehicleNo: "",
      fieldArea: "",
      vechicleType: "",
      rate: "",
      availability: false
    };
  }
  handleChangeName = (event, name) => {
    this.setState({
      ownerName: name
    });
  };
  handleVehicleName = (event, vname) => {
    this.setState({
      vehicleName: vname
    });
  };
  handleVehicleNo = (event, number) => {
    this.setState({
      vehicleNo: number
    });
  };
  handleArea = (event, area) => {
    this.setState({
      fieldArea: area
    });
  };
  handleRate = (event, rate) => {
    this.setState({
      rate: rate
    });
  };
  handleAvailable = (event, availability) => {
    this.setState({
      availability
    });
  };
  handleIndexChange = (event, index, type) => {
    this.setState({ vehicleType: type });
  };
  render() {
    // console.log("upload page");
    return (
      <Layout
        title="Add your vehicle"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDiv}>
          <span style={{ fontSize: 30, marginLeft: 10, paddingBottom: 30 }}>
            Add your vehicle Details
          </span>
          <br />
        </div>
        <div style={styles.innerDiv}>
          <div style={styles.selectDiv}>
            <span style={styles.spanStyle}> Vehicle Type :</span>
            <SelectField
              value={this.state.vehicleType}
              style={{ marginLeft: 10 }}
              onChange={this.handleIndexChange}
            >
              <MenuItem
                value={"tractor"}
                label="Tractor"
                primaryText="Tractor"
              />
              <MenuItem
                value={"thresher"}
                label="Thresher"
                primaryText="Thresher"
              />
            </SelectField>{" "}
          </div>
          <span style={styles.spanStyle}>
            Owner Name :
            <TextField
              value={this.state.ownerName}
              hintText=""
              style={{ marginLeft: 10 }}
              onChange={this.handleChangeName}
            />
          </span>
          <span style={styles.spanStyle}>
            Vehicle Name :
            <TextField
              hintText=""
              value={this.state.vehicleName}
              style={{ marginLeft: 10 }}
              onChange={this.handleVehicleName}
            />
          </span>
          <span style={styles.spanStyle}>
            Vehicle No :
            <TextField
              hintText=""
              value={this.state.vehicleNo}
              style={{ marginLeft: 10 }}
              onChange={this.handleVehicleNo}
            />
          </span>
          <span style={styles.spanStyle}>
            Area:
            <TextField
              hintText=""
              value={this.state.fieldArea}
              style={{ marginLeft: 50 }}
              onChange={this.handleArea}
            />
          </span>
          <span style={styles.spanStyle}>
            Standard Rate :
            <TextField
              hintText=""
              value={this.state.rate}
              style={{ marginLeft: 10 }}
              onChange={this.handleRate}
            />
          </span>
          <span style={styles.spanStyle}>
            Availability
            <Toggle
              value={this.state.availability}
              style={{ margin: 16 }}
              onToggle={this.handleAvailable}
            />
          </span>
        </div>
        <div style={{ margin: 10 }}>
          <RaisedButton
            labelStyle={{ fontSize: 20 }}
            label="SAVE"
            buttonStyle={{
              width: 150,
              height: 50,
              borderRadius: 24,
              backgroundColor: "MediumSeaGreen"
            }}
            onClick={e => {
              e.preventDefault();
              this.props.addVehicle({ ...this.state });
              this.props.history.push("/myVehicle");
            }}
          />
        </div>
      </Layout>
    );
  }
}
export default withRouter(UploadVehicle);
