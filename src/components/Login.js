import React, { Component } from "react";
import Layout from "../layout/Layout";
import RaisedButton from "material-ui/RaisedButton";
import Icon from "material-ui/svg-icons/image/filter-vintage";

export default class Login extends Component {
  render() {
    return (
      <Layout title="Login" showBackNavigation={false}>
        <div
          style={{
            width: window.innerWidth,
            height: window.innerHeight,
            background: "url('/log.jpeg')",
            backgroundSize: "130%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Icon
            style={{
              marginTop: 50,
              marginLeft: 171,
              height: 50,
              width: 50,
              color: "MediumSeaGreen",
              backgroundColor: " white",
              borderRadius: "50%"
            }}
          />
          <span
            style={{
              textAlign: "center",
              margin: 20,
              fontSize: 30,
              color: " white",
              fontFamily: "fantasy"
            }}
          >
            Discover Agro
          </span>

          <RaisedButton
            label="Login with GOOGLE"
            primary={true}
            labelStyle={{ fontSize: 20 }}
            onClick={this.props.signWithGoogle}
            buttonStyle={{
              position: "fixed",
              bottom: 0,
              backgroundColor: "MediumSeaGreen",
              height: 60
            }}
          />
        </div>
      </Layout>
    );
  }
}
