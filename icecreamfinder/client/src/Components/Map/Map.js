import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
require("dotenv").config();
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLEAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.5407}
            lng={-77.4360}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;