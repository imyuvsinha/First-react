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
  componentWillMount() {
    db.collection("users")
      .add({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  func = () => {
    console.log("from book");
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data().born);
        });
      });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/book"
            render={props => <Book {...props} fun={this.func} />}
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
