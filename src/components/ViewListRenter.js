import React, { Component } from "react";
import Layout from "../layout/Layout";
import { withRouter } from "react-router-dom";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

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
      open: false
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };
  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton label="Book" primary={true} onClick={this.handleClose} />
    ];

    return (
      <Layout
        title="View List"
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
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>
                  <RaisedButton
                    label="Book"
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
                    Are you sure to Book Mr.{data.name}?
                  </Dialog>
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
        </div>
      </Layout>
    );
  }
}
