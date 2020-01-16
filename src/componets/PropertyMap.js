import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
mapboxgl.accessToken = 'pk.eyJ1IjoiYzBsbGluc2RldiIsImEiOiJjazVmYmE0dHEyZ2IyM2RvZXB6YXE4OXV5In0.vDo9Yr5htncb-iuBRpZEeA';

// import "../css/App.css";

export default class PropertyMap extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      lng: props.lng,
      lat: props.lat,
      zoom: 15
    };
    }
     
    componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    const size = 200;
    var pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),
       
      // get rendering context for the map canvas when layer is added to the map
      onAdd: function() {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      this.context = canvas.getContext('2d');
      },
       
      // called once before every frame where the icon will be used
      render: function() {
      var duration = 1000;
      var t = (performance.now() % duration) / duration;
       
      var radius = (size / 2) * 0.3;
      var outerRadius = (size / 2) * 0.7 * t + radius;
      var context = this.context;
       
      // draw outer circle
      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(
      this.width / 2,
      this.height / 2,
      outerRadius,
      0,
      Math.PI * 2
      );
      context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
      context.fill();
       
      // draw inner circle
      context.beginPath();
      context.arc(
      this.width / 2,
      this.height / 2,
      radius,
      0,
      Math.PI * 2
      );
      context.fillStyle = 'rgba(255, 100, 100, 1)';
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();
       
      // update this image's data with data from the canvas
      this.data = context.getImageData(
      0,
      0,
      this.width,
      this.height
      ).data;
       
      // continuously repaint the map, resulting in the smooth animation of the dot
      map.triggerRepaint();
       
      // return `true` to let the map know that the image was updated
      return true;
      }
      };
    map.on('move', () => {
      map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
        'type': 'geojson',
        'data': {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [this.state.lng, this.state.lat]
        }
        }
        ]
        }
        },
        'layout': {
        'icon-image': 'pulsing-dot'
        }
        });
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
    });
    }
     
 render(){
  return (
    <div class="map-dv">
      <h3>Localizacao</h3>
      <div className="fullwidth-home-map">
      {/* <div className='sidebarStyle'>
<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
</div> */}
<div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
  
    </div>
  );
 }
}


