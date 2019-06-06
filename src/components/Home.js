import React, { Component } from "react";
import Layout from "../layout/Layout";
import { approved } from "../stylesheets/color";
import Divider from "material-ui/Divider";
import { withRouter } from "react-router-dom";
const styles = {
  mainDiv: {
    backgroundColor: approved,
    height: "150px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  paperDiv: {
    backgroundColor: "white",
    height: "130px",
    width: "97%",
    borderRadius: "10px",
    fontSize: 20,
    margin: 8
  },
  img: {
    width: "7%",
    float: "right",
    paddingRight: 93
  },
  pWeather: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  welcome: {
    backgroundColor: "white",
    border: "3px solid green",
    borderRadius: 12
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "grey",
    width: 414,
    height: 100,
    margin: 0
  },
  subContent: {
    backgroundColor: "white",
    width: window.innerWidth / 2 - 4,
    height: 100,
    border: "2px solid grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  infoImage: {
    width: 48,
    borderRadius: "50%",
    float: "center"
  },
  priceImg: {
    width: 62,
    borderRadius: "50%"
  },
  productImage: {
    width: 50,
    borderRadius: "50%"
  },
  weatherImage: {
    width: 50,
    borderRadius: "50%"
  },
  tractorImage: {
    width: 72,
    borderRadius: "50%"
  },
  QNAImage: {
    width: 50,
    borderRadius: "50%"
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout title="HOME">
        <div style={styles.mainDiv}>
          <div style={styles.paperDiv}>
            <p style={styles.pWeather}>Raipur </p>
            <Divider />
            <div>
              <img style={styles.img} src="Weather.png" alt="weather" />
            </div>
          </div>
        </div>
        <div style={styles.welcome}>
          <h2> Hi, User</h2>
          <p> Choose a Farm section</p>
        </div>
        <div style={styles.content}>
          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/home/cropInformation");
            }}
          >
            <img style={styles.infoImage} src="imagecorn.jpg" alt="crop info" />
            <p>Crop Information</p>
          </div>

          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/home/cropPrice");
            }}
          >
            <img style={styles.priceImg} src="price.png" alt="crop price" />
            <p>Crop Price</p>
          </div>
          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/home/products");
            }}
          >
            <img style={styles.productImage} src="farm.png" alt="products" />
            <p>Products</p>
          </div>
          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/home/weatherForecast");
            }}
          >
            <img
              style={styles.weatherImage}
              src="weather.png"
              alt="Forecasting"
            />
            <p>Weather Forecast</p>
          </div>
          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/home/questionAnswer");
            }}
          >
            <img style={styles.QNAImage} src="QandA.jpeg" alt="ques-Answer" />
            <p>Q & A Discussion</p>
          </div>
          <div
            style={styles.subContent}
            onClick={e => {
              e.preventDefault();
              this.props.history.push("/book");
            }}
          >
            <img
              style={styles.tractorImage}
              src="tractors.jpg"
              alt="Book-A-tractor"
            />
            <p>Book a Tractor</p>
          </div>
        </div>
      </Layout>
    );
  }
}
export default withRouter(Home);
