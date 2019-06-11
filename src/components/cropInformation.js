import React, { Component } from "react";
import Layout from "../layout/Layout";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { AlertAddAlert } from "material-ui/svg-icons";
import Divider from "material-ui/Divider";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: window.innerWidth,
    height: window.innerHeight,
    overflowY: "auto"
  }
};
const tilesData = [
  {
    img: "/paddie.jpg",
    title: "Paddy",
    link: "https://www.farmingindia.in/paddy-cultivation/"
  },
  {
    img: "/cotton.jpg",
    title: "Cotton",
    link:
      "http://www.yourarticlelibrary.com/agriculture/cotton-production-in-india-technology-methods-and-research/11357"
  },
  {
    img: "/Ajwain.jpg",
    title: "Ajwain",
    link: "http://contentzza.com/cultivation-methods-of-ajwain/"
  },
  {
    img: "/mustard.jpg",
    title: "Mustard",
    link: "https://www.apnikheti.com/en/pn/agriculture/crops/oilseeds/mustard"
  },
  {
    img: "/wheat.jpg",
    title: "Wheat",
    link: "https://www.agric.wa.gov.au/wheat/essentials-successful-wheat-crop"
  },
  {
    img: "/banana.jpeg",
    title: "Banana",
    link:
      "http://vikaspedia.in/agriculture/crop-production/package-of-practices/fruits-1/banana"
  },
  {
    img: "/corn-crop.jpg",
    title: "Corn",
    link: "https://www.agric.wa.gov.au/wheat/essentials-successful-wheat-crop"
  },
  {
    img: "/Groundnut.jpg",
    title: "GroundNut",
    link: "http://agropedia.iitk.ac.in/content/ground-nut-package-practices"
  }
];
export default class cropInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout
        title="Crop Information"
        showAppBar={true}
        showBackNavigation={true}
        showBottom={true}
      >
        <h2> CropInformation</h2>
        <Divider />

        <div style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            <Subheader>
              <b>Crop Lists</b>
            </Subheader>

            {tilesData.map(tile => (
              <GridTile
                onClick={e => {
                  e.preventDefault();
                  window.location = tile.link;
                }}
                key={tile.img}
                title={tile.title}
                link={<span>{tile.link}</span>}
                actionIcon={
                  <IconButton>
                    <StarBorder color="white" />
                  </IconButton>
                }
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </Layout>
    );
  }
}
