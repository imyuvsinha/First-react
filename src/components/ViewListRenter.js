import React, { Component } from "react";
import Layout from "../layout/Layout";
import { approved } from "../stylesheets/color";
import Divider from "material-ui/Divider";
import { withRouter } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";
import Motorcycle from "material-ui/svg-icons/action/motorcycle";
import { fullWhite } from "material-ui/styles/colors";

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
      selected: [1]
    };
  }
  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };
  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };
  render() {
    return (
      <Layout title="View List" showBackNavigation={true}>
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
                  <FlatButton
                    labelStyle={{ borderRadius: 24 }}
                    backgroundColor="green"
                    hoverColor="red"
                    icon={<Motorcycle color={fullWhite} />}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </Layout>
    );
  }
}
