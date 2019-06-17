import React, { Component } from "react";
import Layout from "../layout/Layout";
import { withRouter } from "react-router-dom";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import Snackbar from "material-ui/Snackbar";

const styles = {
  mainDiv: {
    backgroundColor: "MediumSeaGreen"
  },
  table: {
    paddingLeft: 0,
    paddingRight: 0
  },
  ButtonDiv: {
    margin: 144,
    width: 100,
    height: 50,
    borderRadius: 24,
    //  paddingLeft: 12,
    marginTop: 122
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: window.innerWidth
  },
  tableRow: {
    border: "1px solid #dddddd",
    textAlign: "left",
    paddingLeft: 10,
    width: window.innerWidth
  }
};

export default class ViewListRenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [1],
      open: false,
      openSnack: false,
      show: false,
      name: ""
    };
  }
  handleOpen = (e, name) => {
    this.setState({ open: true, show: true, name: name });
  };

  handleClose = () => {
    this.setState({ openSnack: false });
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };
  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };
  handleSnack = () => {
    this.setState({ open: false, openSnack: true });
  };

  render() {
    console.log(this.state.name);
    console.log(this.props.renterList);
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Book" primary={true} onClick={this.handleSnack} />
    ];

    return (
      <Layout
        title="View List of Renters"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDiv}>
          <h2>List of Renters:</h2>
        </div>
        <div style={styles.tableDiv}>
          <table style={styles.table}>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
            {this.props.renterList.map(data => (
              <tr style={styles.tableRow}>
                <td style={{ padding: 20 }}>{data.name}</td>
                <td>{data.contact}</td>
                <td>
                  <RaisedButton
                    label="Book"
                    buttonStyle={{
                      borderRadiundefinedus: 24,
                      backgroundColor: "MediumSeaGreen"
                    }}
                    onClick={e => this.handleOpen(e, data.name)}
                  />

                  {/* <FlatButton
                    labelStyle={{ borderRadius: 24 }}
                    backgroundColor="green"
                    hoverColor="red"
                    icon={<Motorcycle color={fullWhite} />}
                  /> */}
                </td>
              </tr>
            ))}
          </table>

          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Are you sure to Book Mr {this.state.name}?
          </Dialog>
          <Snackbar
            open={this.state.openSnack}
            message="Your Booking process has Started"
            autoHideDuration={2000}
            bodyStyle={{ height: 60 }}
            onRequestClose={this.handleClose}
          />
        </div>
      </Layout>
    );
  }
}
