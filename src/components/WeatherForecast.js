import React, { Component } from "react";
import Layout from "../layout/Layout";
import Paper from "material-ui/Paper";

const styles = {
  mainDiv: {
    width: window.innerWidth,
    height: window.innerHeight - 145,
    backgroundColor: "white"
  },
  paperDiv: {
    height: window.innerHeight - 500,
    width: window.innerWidth - 42,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#7ABA7A"
  },
  paperDiv2: {
    height: window.innerHeight - 440,
    width: window.innerWidth - 40,
    margin: 0,
    marginTop: -14,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    borderRadius: 30,
    backgroundColor: " #7ABA7A"
  },

  innerDiv: {
    padding: 20,
    borderRadius: 30
  },
  city: {
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 10
  },
  meterbar: {
    width: window.innerWidth - 350,
    paddingLeft: window.innerWidth - 110
  },
  Temp: {
    fontSize: 30,
    textAlign: "right"
  },
  cloudImg: {
    width: window.innerWidth - 274,
    marginTop: -94
  }
};
export default class WeatherForecast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout
        title="Weather Forecast"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <div style={styles.mainDiv}>
          <div style={styles.innerDiv}>
            <Paper style={styles.paperDiv} zDepth={1}>
              <span style={styles.city}>
                Name:{this.props.weather.cityName}
              </span>

              <img style={styles.meterbar} src="/meterbar.svg" />
              <span style={styles.Temp}>
                {(this.props.weather.temp - 273.15).toFixed(2)}
                <sup>0</sup>C
              </span>
              <img style={styles.cloudImg} src="/subcloudy.png" />
              <span style={{ fontSize: 25, paddingLeft: 20 }}>
                {this.props.weather.typeOfWeather}
              </span>
            </Paper>
          </div>
          <div style={styles.innerDiv}>
            <Paper style={styles.paperDiv2} zDepth={1}>
              <span
                style={{
                  fontSize: 21,
                  fontFamily: "cursive",
                  paddingLeft: "15px",
                  paddingTop: "10px"
                }}
              >
                Min Temp:{(this.props.weather.tempMin - 273.15).toFixed(2)}{" "}
                <sup>0</sup>C
                <br />
                <br />
                Max Temp:{(this.props.weather.tempMax - 273.15).toFixed(2)}{" "}
                <sup>0</sup>C
                <br />
                <br />
                Weather Type: {this.props.weather.description}
                <br />
                <br />
                Humidity:{this.props.weather.humidity}%
                <br />
                <br />
                Pressure:{this.props.weather.pressure}(m/bar)
                <br />
                <br />
                WindSpeed:{this.props.weather.windSpeed}km/h
              </span>
            </Paper>
          </div>
        </div>
      </Layout>
    );
  }
}
