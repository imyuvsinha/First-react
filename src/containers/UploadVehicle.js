// import React, { Component } from "react";
// import UploadVehicle from "../components/UploadVehicle";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect
// } from "react-router-dom";
// import { db } from "../store";

// export default class UploadVehicleContainer extends Component {
//   // addVehicle = data => {
//   //   console.log(data);
//   //   db.collection("vehicles")
//   //     .add({
//   //       ownerId: this.props.user.uid ? this.props.user.uid : "",
//   //       ownerName: data.ownerName ? data.ownerName : "",
//   //       vehicleName: data.vehicleName ? data.vehicleName : "",
//   //       vehicleNumber: data.vehicleNo ? data.vehicleNo : "",
//   //       vehicleType: data.vehicleType ? data.vehicleType : "",
//   //       area: data.fieldArea ? data.fieldArea : "",
//   //       rate: data.rate ? data.rate : "",
//   //       availability: data.availability
//   //     })
//   //     .then(function(docRef) {
//   //       console.log("Document written with ID: ", docRef);
//   //     })
//   //     .catch(function(error) {
//   //       console.error("Error adding document: ", error);
//   //     });
//   // };

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route
//             exact
//             path="/book/myVehicle/uploadVehicle"
//             render={props => <UploadVehicle {...props} />}
//           />
//         </Switch>
//       </Router>
//     );
//   }
// }
