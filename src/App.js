import React from "react";
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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={props => <LoginContainer {...props} />} />

        <Route path="/home" render={props => <HomeContainer {...props} />} />
        <Route path="/book" render={props => <BookContainer {...props} />} />
        <Route
          path="/profile"
          render={props => <ProfileContainer {...props} />}
        />
        {/* <Route path="/chat" render={props => <Chat {...props} />} /> */}
        {/* <Route path="/profile" render={props => <Profile {...props} />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
