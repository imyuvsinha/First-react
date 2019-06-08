import React, { Component } from "react";
import Home from "../components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CropInformation from "../components/cropInformation";
import CropPrice from "../components/cropPrice";
import Products from "../components/Products";
import WeatherForecast from "../components/WeatherForecast";
import QuestionAnswer from "../components/questionAnswer";
import unirest from "unirest";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: false
    };
  }
  componentWillMount() {
    this.getMyLocation();
  }
  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition(
        position => {
          this.getWeatherByLocation(
            position.coords.latitude,
            position.coords.latitude
          );
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  getWeatherByLocation = (latitude, longitude) => {
    unirest
      .get(
        "https://community-open-weather-map.p.rapidapi.com/forecast?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&q=Raipur%2Cin"
      )

      .header("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com")
      .header(
        "X-RapidAPI-Key",
        "4a672d7e34mshe5c3237cd5d608ap1ec190jsn1c656ef4644d"
      )
      .end(result => {
        const weather = {
          cityName: result.body.city.name,
          typeOfWeather: result.body.list[0].weather[0].main,
          description: result.body.list[0].weather[0].description,
          temp: result.body.list[0].main.temp,
          tempMin: result.body.list[0].main.temp_min,
          tempMax: result.body.list[0].main.temp_max,
          humidity: result.body.list[0].main.humidity,
          pressure: result.body.list[0].main.pressure,
          windSpeed: result.body.list[0].wind.speed
        };
        this.setState({ weather });
        console.log(result.status, result.headers, result.body);
        console.log(result.body.city.name);
        console.log(result.body.list[0].main.humidity);
        console.log(result.body.list[0].main.pressure);
        console.log(result.body.list[0].main.temp);
        console.log(result.body.list[0].main.temp_max);
        console.log(result.body.list[0].main.temp_min);
        console.log(result.body.list[0].weather[0].main);
        console.log(result.body.list[0].weather[0].description);
        console.log(result.body.list[0].wind.speed);
      });
  };
  render() {
    const { weather } = this.state;
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
            render={props => <WeatherForecast {...props} weather={weather} />}
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
