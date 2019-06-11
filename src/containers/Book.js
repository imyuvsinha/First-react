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
  constructor(props) {
    super(props);
    this.state = {
      renterList: []
    };
  }

  addfun = data => {
    db.collection("renters")
      .add({
        serviceDate: data.serviceDate ? data.serviceDate : new Date(),
        timeFrom: data.valueFrom ? data.valueFrom : "",
        timeTo: data.valueTo ? data.valueTo : "",
        area: data.area ? data.area : null,
        corn: data.value ? data.value : ""
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  componentDidMount() {
    db.collection("renterList").onSnapshot(
      querySnapshot => {
        let renterList = [];
        querySnapshot.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data());
          renterList.push(doc.data());
        });
        this.setState({ renterList });
      },
      err => {
        console.log(`Encountered error: ${err}`);
      }
    );
  }
  render() {
    console.log(this.state.renterList);

    return (
      <div>
        <Route
          exact
          path="/book"
          render={props => <Book {...props} addfun={this.addfun} />}
        />
        <Route
          exact
          path="/book/viewListRenter"
          render={props => (
            <ViewListRenter {...props} renterList={this.state.renterList} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(BookContainer);
