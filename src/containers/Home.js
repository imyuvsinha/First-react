import React, { Component } from "react";
import Home from "../components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CropInformation from "../components/cropInformation";
import CropPrice from "../components/cropPrice";
import Products from "../components/Products";
import WeatherForecast from "../components/WeatherForecast";
import QuestionAnswer from "../components/questionAnswer";

export default class HomeContainer extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" render={props => <Home {...props} />} />

          <Route
            exact
            path="/home/cropInformation"
            render={props => <CropInformation {...props} />}
          />
          <Route
            exact
            path="/home/cropPrice"
            render={props => <CropPrice {...props} />}
          />
          <Route
            exact
            path="/home/products"
            render={props => <Products {...props} />}
          />
          <Route
            exact
            path="/home/weatherForecast"
            render={props => <WeatherForecast {...props} />}
          />
          <Route
            exact
            path="/home/questionAnswer"
            render={props => <QuestionAnswer {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}
