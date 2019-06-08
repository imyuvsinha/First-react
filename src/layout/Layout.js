import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import { approved } from "../stylesheets/color";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import IconHome from "material-ui/svg-icons/action/home";
import IconMotor from "material-ui/svg-icons/action/motorcycle";
import IconProfile from "material-ui/svg-icons/action/supervisor-account";
import Paper from "material-ui/Paper";

const styles = {
  appBarStyle: {
    backgroundColor: "#7ABA7A",
    textAlign: "center",
    width: "100%"
  },
  bottomNavigation: {
    bottom: 0,
    position: "fixed",
    width: "100%",
    backgroundColor: "#7ABA7A"
  }
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.showBackNavigation);
    return (
      <MuiThemeProvider>
        <AppBar
          style={styles.appBarStyle}
          title={this.props.title}
          iconElementLeft={
            <IconButton>
              {this.props.showBackNavigation ? (
                <ArrowBack
                  onClick={e => {
                    e.preventDefault();
                    this.props.history.goBack();
                  }}
                />
              ) : null}
            </IconButton>
          }
        />
        {this.props.children}
        <Paper zDepth={1}>
          <BottomNavigation style={styles.bottomNavigation}>
            <BottomNavigationItem
              label="Home"
              icon={<IconHome />}
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/home");
              }}
            />
            <BottomNavigationItem
              label="Book"
              icon={<IconMotor />}
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/book");
              }}
            />
            <BottomNavigationItem
              label="Profile"
              icon={<IconProfile />}
              onClick={e => {
                e.preventDefault();
                this.props.history.push("/profile");
              }}
            />
          </BottomNavigation>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(Layout);
