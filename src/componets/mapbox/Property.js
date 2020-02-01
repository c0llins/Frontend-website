import mapboxgl from "mapbox-gl";
import React, { Component } from "react";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYzBsbGluc2RldiIsImEiOiJjazVmYmE0dHEyZ2IyM2RvZXB6YXE4OXV5In0.vDo9Yr5htncb-iuBRpZEeA";
// import { Container } from './styles';

export default class PropertyMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: this.props.lng,
      lat: this.props.lat,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}
