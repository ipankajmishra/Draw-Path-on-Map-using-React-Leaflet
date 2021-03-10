import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Polyline } from 'leaflet';




import React, { Component } from 'react'
import MapComponent from './MapComponent';
import RouteComponent from './RouteComponent';
import { Button } from 'react-bootstrap';
// const limeOptions = { color: 'red' }
//   const center = [51.505, -0.09]

  // const polyline = [
  //   [51.505, -0.09],
  //   [51.51, -0.1],
  //   [51.51, -0.12],
  // ]
export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        { <Button style={{float:"left", marginTop:"10px", marginLeft:"20px"}} className="home-button">
                    Home
                  </Button>}
        <RouteComponent/>
        {/* <MapComponent/> */}
      </div>
    )
  }
}

