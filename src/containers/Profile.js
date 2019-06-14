import React, { Component } from "react";
import Profile from "../components/Profile";
import BookingStatus from "../components/BookingStatus";
import About from "../components/About";
import { googleSignOut } from "../store";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default class ProfileContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile
                {...props}
                signOut={googleSignOut}
                user={this.props.user}
              />
            )}
          />
          <Route
            exact
            path="/profile/bookingStatus"
            render={props => <BookingStatus {...props} />}
          />
          <Route
            exact
            path="/profile/about"
            render={props => <About {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
