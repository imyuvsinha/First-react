import React, { Component } from "react";
import Layout from "../layout/Layout";
import DatePicker from "material-ui/DatePicker";
import Divider from "material-ui/Divider";
import TimePicker from "material-ui/TimePicker";
import TextField from "material-ui/TextField";
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
    this.state = {};
  }
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
          <DatePicker hintText="Select your Date" container="inline" />
          <div style={styles.Timer}>
            <p>
              <u>Service Time:</u>
            </p>
            From:
            <TimePicker hintText="From" minutesStep={5} />
            <br />
            To:
            <TimePicker hintText="To" minutesStep={10} />
          </div>
          Area (in Acres):
          <TextField hintText="enter area in acres" />
          Crop:
          <select style={styles.Selector}>
            <option value="Ajwain" selected>
              Ajwain
            </option>
            <option value="bajra">Bajra</option>
            <option value="banana">Banana</option>
            <option value="cotton">Cotton</option>
            <option value="Groundnut">Groundnut</option>
            <option value="Mustard">Mustard</option>
            <option value="Paddy">Paddy</option>
            <option value="potato">Potato</option>
            <option value="wheat">Wheat</option>
            <option value="vegetables">Vegetables</option>
          </select>
          <button
            style={styles.SubmitButton}
            onClick={e => {
              e.preventDefault();
              this.props.fun();
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
