import { googleApi } from "../../../../server/src/config/keys_dev";

import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import MapMarker from "./MapMarker";
import MapMarkerInfoCard from "./MapMarkerInfoCard";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class PlanMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMarkerId: null
    };

    this.selectMarker = this.selectMarker.bind(this);
  }

  componentDidMount() {
    const { fetchPlan, planId } = this.props;
    fetchPlan(planId);
  }

  selectMarker(e) {
    console.log("click");

    this.setState({
      selectedMarkerId: e.currentTarget.id
    });
  }

  renderMarkers() {
    let markers = this.props.attractions.map(attraction => {
      let { lat, lng } = attraction.geometry.location;
      let id = attraction.id;
      return (
        <MapMarker
          lat={lat}
          lng={lng}
          id={id}
          key={id}
          clickHandler={this.selectMarker}
        />
      );
    });

    return markers;
  }

  renderInfoCards() {
    for (let i = 0; i < this.props.attractions.length; i++) {
      const attraction = this.props.attractions[i];
      const { lat, lng } = attraction.geometry.location;

      if (attraction.id === this.state.selectedMarkerId) {
        return (
          <MapMarkerInfoCard lat={lat} lng={lng} attraction={attraction} />
        );
      }
    }

    return null;
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={{ lat: 48.85296820000001, lng: 2.3499021 }}
          defaultZoom={13}
        >
          {this.renderMarkers()}
          {this.renderInfoCards()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default withStyles(styles)(PlanMap);
