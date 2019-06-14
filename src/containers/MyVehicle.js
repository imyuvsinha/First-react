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
class MyVehicleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleList: []
    };
  }

  componentWillMount() {
    db.collection("vehicles").onSnapshot(
      querySnapshot => {
        let vehicleList = [];

        querySnapshot.forEach(doc => {
          console.log(doc.id);
          console.log(doc.data());
          vehicleList.push({ id: doc.id, data: doc.data() });
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
            path="/myVehicle"
            render={props => (
              <MyVehicle {...props} vehicleList={this.state.vehicleList} />
            )}
          />
          <Route
            exact
            path="/myVehicle/vehicleDetails/:id"
            render={props => <VehicleDetails {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default withRouter(MyVehicleContainer);
