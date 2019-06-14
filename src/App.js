import React, { Component } from "react";
import "./App.css";
import BookContainer from "./containers/Book";
import LoginContainer from "./containers/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import ProfileContainer from "./containers/Profile";
import HomeContainer from "./containers/Home";
import { firebase } from "./store";
import { db } from "./store";
import MyVehicleContainer from "./containers/MyVehicle";
import UploadVehicleContainer from "./containers/UploadVehicle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        // call
        console.log(authUser);

        this.addUser(authUser.uid);
      }
      this.setState({ user: authUser });
      console.log(authUser);
    });
  }
  // componentDidMount() {
  //   this.addUser();
  //   console.log("user");
  // }

  addUser = uid => {
    console.log(uid);
    db.collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        if (!doc.exists) {
          db.collection("users")
            .doc(uid)
            .set({
              userId: this.state.user.uid,
              userName: this.state.user.displayName,
              email: this.state.user.email
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        }
      });
  };

  render() {
    const { user } = this.state;
    const path = user ? "/home" : "/login";
    return (
      <Router>
        <Switch>
          <Route
            path="/home"
            render={props => <HomeContainer {...props} user={user} />}
          />
          <Route
            exact
            path="/login"
            render={props => <LoginContainer {...props} />}
          />
          <Route
            exact
            path="/book"
            render={props => <BookContainer {...props} />}
          />
          <Route
            path="/profile"
            render={props => <ProfileContainer {...props} user={user} />}
          />
          <Route
            path="/uploadVehicle"
            render={props => (
              <UploadVehicleContainer {...props} user={this.state.user} />
            )}
          />
          <Route
            path="/myVehicle"
            render={props => <MyVehicleContainer {...props} />}
          />
          {/* {!user} ? <Redirect from="/" to="/login" /> : */}
          {/* <Redirect from="/login" to="/home" /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
