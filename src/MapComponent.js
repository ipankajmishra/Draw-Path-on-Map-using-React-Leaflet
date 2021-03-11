import React, { Component } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "./MapComponent.css";
export default class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polyline: [],
      limeOptions: { color: "black" },
      center: [20.5937, 78.9629],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.polyline !== state.polyline) {
      return {
        polyline: props.polyline,
      };
    }
    return null;
  }
  render() {
    return (
      <div id="mapid">
        <MapContainer
          style={{ height: "55vh" }}
          center={this.state.center}
          zoom={4}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Polyline
            pathOptions={this.state.limeOptions}
            positions={this.state.polyline}
          />
        </MapContainer>
      </div>
    );
  }
}
