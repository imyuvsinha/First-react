import React, { Component } from "react";
import Layout from "../layout/Layout";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TimePicker from "material-ui/TimePicker";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/MenuItem";
import SelectField from "material-ui/SelectField";
import { withRouter } from "react-router-dom";

const styles = {
  mainDIv: {
    backgroundColor: "#E5E4D7",
    height: 100
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
    backgroundColor: "green",
    width: 146,
    height: 40,
    marginBottom: 21,
    marginTop: 18,
    marginLeft: 123,
    fontSize: 20,
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
      crop: ""
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
  handleChangeCrop = (event, index, value) => {
    this.setState({ value });
  };

  render() {
    console.log(this.props);
    return (
      <Layout title="Book your Vehicle" showBackNavigation={true}>
        <div style={styles.mainDIv}>
          <button style={styles.Button} onClick="" />
          <input type="text" placeholder="sub-location" />
          <Divider style={styles.Divider} />
        </div>
        <div style={styles.InnerDiv}>
          <p>Service Date:</p>
          <DatePicker
            value={this.state.serviceDate}
            hintText="Select your Date"
            container="inline"
            onChange={this.handleChange}
          />
          <div style={styles.Timer}>
            <p>
              <u>Service Time:</u>
            </p>
            From:
            <TimePicker
              value={this.state.valueFrom}
              hintText="From"
              minutesStep={5}
              onChange={this.handleChangeFrom}
            />
            <br />
            To:
            <TimePicker
              value={this.state.valueTo}
              hintText="To"
              minutesStep={10}
              onChange={this.handleChangeTo}
            />
          </div>
          Area (in Acres):
          <TextField
            value={this.state.area}
            hintText="enter area in acres"
            onChange={this.handleChangeArea}
          />
          Crop:
          <SelectField
            style={styles.Selector}
            floatingLabelText="select crop"
            value={this.state.value}
            onChange={this.handleChangeCrop}
          >
            <MenuItem value={1} primaryText="Ajwain" />
            <MenuItem value={2} primaryText="Bajra" />
            <MenuItem value={3} primaryText="Banana" />
            <MenuItem value={4} primaryText="Cotton" />
            <MenuItem value={5} primaryText="Groundnut" />
            <MenuItem value={6} primaryText="Mustard" />
            <MenuItem value={7} primaryText="Paddy" />
            <MenuItem value={8} primaryText="Potato" />
            <MenuItem value={9} primaryText="Wheat" />
            <MenuItem value={10} primaryText="Vegetables" />
          </SelectField>
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
