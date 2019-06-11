import React, { Component } from "react";
import Layout from "../layout/Layout";
import Avatar from "material-ui/Avatar";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import { withRouter } from "react-router-dom";
import Divider from "material-ui/Divider";

const styles = {
  mainDiv: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  }
};
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "username",
      address: ""
    };
  }
  // handleChange = event => {
  //   this.setState({
  //     value: event.target.value
  //   });
  // };
  handleLogout = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Layout
        title="MY Profile"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDiv}>
          <List>
            <ListItem
              style={{ marginLeft: -8 }}
              leftAvatar={<Avatar src="/boy.svg" />}
            />
            <span>
              Name:
              <TextField
                style={{ paddingLeft: 20 }}
                id="text-field-controlled"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </span>
            <ListItem
              style={{ marginLeft: -8, width: "10%" }}
              leftAvatar={<Avatar src="/home.png" />}
            />
            <span>
              Address:
              <TextField
                style={{ paddingLeft: 20 }}
                id="text-field-controlled"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </span>
            <ListItem
              style={{ marginLeft: -8, width: "10%" }}
              leftAvatar={<Avatar src="/phone.png" />}
            />
            <span>
              Contact:
              <TextField
                style={{ paddingLeft: 20 }}
                id="text-field-controlled"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </span>
            <Divider />

            <img
              src="/about.png"
              style={{ width: 80 }}
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/profile/about");
              }}
            />
            <FlatButton
              label="Check your Booking status"
              style={{ backgroundColor: "MediumSeaGreen", margin: 50 }}
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/profile/bookingStatus");
              }}
            />
          </List>
        </div>
        <div style={{ marginLeft: 150, marginTop: 50 }}>
          <RaisedButton
            label="Logout"
            buttonStyle={{
              borderRadius: 24,
              backgroundColor: "red"
            }}
            onClick={e => {
              e.preventDefault();
              this.props.signOut();
            }}
          />
        </div>
      </Layout>
    );
  }
}
export default withRouter(Profile);
