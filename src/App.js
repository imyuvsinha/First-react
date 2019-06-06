import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Book from "./containers/Book";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" render={props => <Home {...props} />} />
        <Route path="/book" render={props => <Book {...props} />} />
        {/* <Route path="/chat" render={props => <Chat {...props} />} /> */}
        {/* <Route path="/profile" render={props => <Profile {...props} />} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
