import React, { Component } from "react";
import Layout from "../layout/Layout";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import ActionAndroid from "material-ui/svg-icons/communication/email";

export default class Login extends Component {
  render() {
    return (
      <Layout title="Login" showBackNavigation={false}>
        <div
          style={{
            width: window.innerWidth,
            height: window.innerHeight,
            background: "url('/log.jpeg')"
          }}
        >
          <span style={{ textAlign: "center", marginTop: 50, fontSize: 50 }}>
            Login Page
          </span>

          {/* <button
            style={{
              borderColor: "#4CAF50",
              color: "green",
              border: "2px solid black",
              fontSize: 16,
              cursor: "pointer"
            }}
          > */}
          {/* Success
          </button> */}

          <FlatButton
            style={{ margin: 50, color: "green" }}
            labelPosition="before"
            icon={<ActionAndroid />}
            onClick={e => {
              e.preventDefault();
              window.location = "http://gmail.com";
            }}
          >
            <b>Login </b>
          </FlatButton>
        </div>
      </Layout>
    );
  }
}
