import React, { Component } from "react";
import "./App.css";
import BookContainer from "./containers/Book";
import LoginContainer from "./containers/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProfileContainer from "./containers/Profile";
import HomeContainer from "./containers/Home";
import { firebase } from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    const path = user ? "/home" : "/login";
    return (
      <Router>
        <Switch>
          <Route path="/home" render={props => <HomeContainer />} />
          <Route
            exact
            path="/login"
            render={props => <LoginContainer {...props} />}
          />
          <Route path="/book" render={props => <BookContainer {...props} />} />
          <Route
            path="/profile"
            render={props => <ProfileContainer {...props} />}
          />
          <Redirect from="/" to={path} />
        </Switch>
      </Router>
    );
  }
}

export default App;
