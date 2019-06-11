import React, { Component } from "react";
import Login from "../components/Login";
import { googleSignIn } from "../store";

export default class LoginContainer extends Component {
  render() {
    return <Login signWithGoogle={googleSignIn} />;
  }
}
