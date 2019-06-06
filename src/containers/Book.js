import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Book from "../components/Book";
import { db } from "../store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ViewListRenter from "../components/ViewListRenter";

class BookContainer extends Component {
  addfun = data => {
    console.log("from book");
    console.log(data.value);
    db.collection("renters")
      .add({
        serviceDate: data.serviceDate ? data.serviceDate : new Date(),
        timeFrom: data.valueFrom ? data.valueFrom : "",
        timeTo: data.valueTo ? data.valueTo : "",
        area: data.area ? data.area : "",
        corn: data.value ? data.value : ""
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/book"
            render={props => <Book {...props} addfun={this.addfun} />}
          />
          <Route
            path="/book/viewListRenter"
            render={props => <ViewListRenter {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(BookContainer);
