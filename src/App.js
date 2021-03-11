import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import RouteComponent from "./RouteComponent";
import { Button } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <Button
            style={{ float: "left", marginTop: "10px", marginLeft: "20px" }}
            className="home-button"
          >
            Home
          </Button>
        }
        <RouteComponent />
      </div>
    );
  }
}
