import React, { Component } from "react";
import Layout from "../layout/Layout";
import Dialog from "material-ui/Dialog";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Snackbar from "material-ui/Snackbar";

const styles = {
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: window.innerWidth - 2
  },
  tableRow: {
    border: "1px solid #dddddd",
    textAlign: "left",
    marginLeft: 20
  }
};

export default class BookingStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [1], open: false, popup: true };
  }
  handleOpen = () => {
    //alert("your Booking has cancelled");
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  //   handleCancel = () => {
  //     this.setState({ open: false });
  //   };
  handleAfterCancel = () => {
    this.setState({
      popup: true,
      open: false
    });
  };
  render() {
    const actions = [
      <FlatButton label="No" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Yes" primary={true} onClick={this.handleAfterCancel} />
    ];

    return (
      <Layout
        title="My Bookings"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <h1>Review your Bookings</h1>
        <div style={styles.tableDiv}>
          <table style={styles.table}>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tr style={styles.tableRow}>
              <td style={{ paddingLeft: 30 }}>Name</td>
              <td>Booked/in process/NA</td>
              <td>
                <RaisedButton
                  label="Cancel"
                  buttonStyle={{
                    borderRadius: 24,
                    backgroundColor: "MediumSeaGreen"
                  }}
                  onClick={this.handleOpen}
                />
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  Are you sure to cancel this Booking?
                </Dialog>
                <Snackbar
                  popup={this.state.popup}
                  message="Your Booking has cancelled"
                  autoHideDuration={2000}
                  onRequestClose={this.handleAfterCancel}
                />
              </td>
            </tr>
          </table>
        </div>
      </Layout>
    );
  }
}
