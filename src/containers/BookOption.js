import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import BookOption from "../components/BookOption";
import Book from "../components/Book";
import ViewListRenter from "../components/ViewListRenter";
import { db } from "../store";
import MyVehicle from "../components/MyVehicle";

export default class BookOptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renterList: [],
      vehicleList: []
    };
  }
  addfun = data => {
    console.log(data);
    db.collection("renters")
      .add({
        serviceDate: data.serviceDate ? data.serviceDate : new Date(),
        timeFrom: data.valueFrom ? data.valueFrom : "",
        timeTo: data.valueTo ? data.valueTo : "",
        area: data.area ? data.area : null,
        vehicleType: data.type ? data.type : ""
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
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/book"
            render={props => <BookOption {...props} />}
          />
          <Route
            exact
            path="/book/bookVehicle"
            render={props => <Book {...props} addfun={this.addfun} />}
          />
          {/* <Route
            exact
            path="/book/myVehicle"
            render={props => (
              <MyVehicle {...props} vehicleList={this.state.vehicleList} />
            )}
          /> */}
          <Route
            exact
            path="/book/bookVehicle/viewListRenter"
            render={props => (
              <ViewListRenter {...props} renterList={this.state.renterList} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}
