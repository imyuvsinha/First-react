import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import MyVehicle from "../components/MyVehicle";
import { db } from "../store";
import VehicleDetails from "../components/VehicleDetails";
import UploadVehicle from "../components/UploadVehicle";
class MyVehicleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleList: []
    };
  }
  addVehicle = data => {
    console.log(data);
    db.collection("vehicles")
      .add({
        ownerId: this.props.user.uid ? this.props.user.uid : "",
        ownerName: data.ownerName ? data.ownerName : "",
        vehicleName: data.vehicleName ? data.vehicleName : "",
        vehicleNumber: data.vehicleNo ? data.vehicleNo : "",
        vehicleType: data.vehicleType ? data.vehicleType : "",
        area: data.fieldArea ? data.fieldArea : "",
        rate: data.rate ? data.rate : "",
        availability: data.availability
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  componentWillMount() {
    db.collection("vehicles").onSnapshot(
      querySnapshot => {
        let vehicleList = [];
        querySnapshot.forEach(doc => {
          const vehicleDatas = doc.data();
          vehicleDatas.id = doc.id;
          console.log(doc.id);
          console.log(doc.data());
          vehicleList.push(vehicleDatas);
        });
        this.setState({ vehicleList });
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
            path="/myVehicle/vehicleDetails/:id"
            render={props => (
              <VehicleDetails vehicles={this.state.vehicleList} {...props} />
            )}
          />
          <Route
            exact
            path="/myVehicle/uploadVehicle"
            render={props => (
              <UploadVehicle {...props} addVehicle={this.addVehicle} />
            )}
          />
          <Route
            exact
            path="/myVehicle"
            render={props => (
              <MyVehicle {...props} vehicleList={this.state.vehicleList} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(MyVehicleContainer);
