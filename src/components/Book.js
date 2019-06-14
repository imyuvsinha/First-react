import React, { Component } from "react";
import Layout from "../layout/Layout";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TimePicker from "material-ui/TimePicker";
import TextField from "material-ui/TextField";

import { withRouter } from "react-router-dom";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const styles = {
  mainDIv: {
    backgroundColor: "#E5E4D7",
    height: 60
  },
  Button: {
    width: 104,
    height: 33,
    margin: 15
  },
  InnerDiv: {
    width: 412,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#E5E4D7",
    border: "1px solid green"
  },
  Divider: {
    backgroundColor: "black"
  },
  Selector: {
    width: 272,
    height: 46,
    fontSize: 17
  },
  SubmitButton: {
    backgroundColor: "MediumSeaGreen",
    width: 145,
    height: 49,
    marginBottom: 15,
    marginTop: 3,
    marginLeft: 123,
    fontSize: 28,
    fontFamily: "monospace",
    borderRadius: 35
  }
};

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceDate: new Date(),
      valueFrom: null,
      valueTo: null,
      area: "",
      type: ""
    };
  }
  handleChange = (event, date) => {
    this.setState({
      serviceDate: date
    });
  };
  handleChangeFrom = (event, timefrom) => {
    this.setState({
      valueFrom: timefrom
    });
  };
  handleChangeTo = (event, timeto) => {
    this.setState({
      valueTo: timeto
    });
  };
  handleChangeArea = (event, area) => {
    this.setState({
      area: area
    });
  };
  handleIndexChange = (event, index, type) => {
    this.setState({ type });
  };

  render() {
    console.log(this.props);
    return (
      <Layout
        title="Book your Vehicle"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDIv}>
          <Divider style={styles.Divider} />
          <h1>Select your requirements</h1>
        </div>
        <div style={styles.InnerDiv}>
          <p style={{ fontSize: 20, fontFamily: "monospace" }}>Service Date:</p>
          <DatePicker
            value={this.state.serviceDate}
            hintText="Select your Date"
            container="inline"
            onChange={this.handleChange}
          />
          <div style={styles.Timer}>
            <p style={{ fontSize: 20, fontFamily: "monospace" }}>
              <u>Service Time:</u>
            </p>
            <span style={{ fontSize: 20, fontFamily: "monospace" }}>From:</span>
            <TimePicker
              value={this.state.valueFrom}
              hintText="From"
              minutesStep={5}
              onChange={this.handleChangeFrom}
            />
            <br />
            <span style={{ fontSize: 20, fontFamily: "monospace" }}>To</span>
            <TimePicker
              value={this.state.valueTo}
              hintText="To"
              minutesStep={10}
              onChange={this.handleChangeTo}
            />
          </div>
          <span style={{ fontSize: 20, fontFamily: "monospace" }}>
            Area (in Acres):
          </span>
          <TextField
            value={this.state.area}
            hintText="enter area in acres"
            onChange={this.handleChangeArea}
          />
          <span style={{ fontSize: 20, fontFamily: "monospace" }}>
            Vehicle Type:
            <SelectField
              value={this.state.type}
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
            </SelectField>
          </span>

          <button
            style={styles.SubmitButton}
            onClick={e => {
              e.preventDefault();
              this.props.addfun({ ...this.state });
              this.props.history.push("/book/viewListRenter");
            }}
          >
            Book
          </button>
        </div>
      </Layout>
    );
  }
}
export default withRouter(Book);
