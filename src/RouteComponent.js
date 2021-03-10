import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "./RouteComponent.css";
import MapComponent from "./MapComponent";
export default class RouteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cordinatesArray: [],
      currentCity:"",
      currentLat:"",
      currentLong:"",
      enableSubmit:false,
      polyline : [
        
      ]
    };
  }




  onShowRoute=()=>{
    let polyline = [];
    // eslint-disable-next-line
    this.state.cordinatesArray.map(data=>{
        let arr = [];
        arr.push(parseFloat(data.lat));
        arr.push(parseFloat(data.lon))
        polyline.push(arr);
        
    })
    this.setState({
        polyline
    })
  }

  onChange=(e,key)=>{
    if(key===1){
        this.setState({
            currentCity:e.target.value
        })
    }
    else if(key===2){
        this.setState({
            currentLat:e.target.value
        })
    }
    else if(key===3){
        this.setState({
            currentLong:e.target.value
        })
    }
    if(this.state.currentCity.length>0 && this.state.currentLat.length>0 && this.state.currentLong.length>0){
        this.setState({
            enableSubmit:true
        })
    }
    else{
        this.setState({
            enableSubmit:false
        })
    }

  }

  onSubmit=()=>{
      let data={
        name: this.state.currentCity,
        lat: this.state.currentLat,
        lon: this.state.currentLong,
      }
      let arr = this.state.cordinatesArray;
      arr.push(data);
      this.setState({
          cordinatesArray:arr,
          currentCity:"",
          currentLat:"",
          currentLong:"",
          enableSubmit:false
      })
      }
  

  cordinatesComponent = (data,key) => {
    return (
        <div style={{marginLeft:"30px"}}>
           
           <Row>
              <Col xs={5} className="">
              <span className="city-name-lp">{key}) {data.name}</span> 
              </Col>
              <Col xs={2}>
              {/* <span className="city-name-lp">{key}) {data.name}</span>  */}
              </Col>
              <Col xs={2}>
              <span className="city-name-lp">{data.lat}</span> 
              </Col>
              <Col xs={0.5}>
              {/* <span className="city-name-lp">{key}) {data.name}</span>  */}
              </Col>
              <Col xs={2}>
              <span className="city-name-lp">{data.lon}</span> 
              </Col>
            </Row>
        </div>
    )
  };

  render() {
    const data = this.state.cordinatesArray.map((data,key) => {
      return this.cordinatesComponent(data,key+1);
    });
    return (
      <div>
        <div className="main-component content">
          <div style={{ height: "15vh" }}>
            <Row style={{ marginRight: "30px", marginLeft: "30px" }}>
              <Col xs={2} className="">
                <div style={{ marginTop: "40px" }}>
                  <label className="input-label">Location Name</label>
                  <br></br>
                  <input className="input-custom" value={this.state.currentCity} onChange={(e=>this.onChange(e,1))} placeholder="Location" />
                </div>
              </Col>
              <Col xs={2} className="">
                <div style={{ marginTop: "40px" }}>
                  <label className="input-label">Enter Lattitude</label>
                  <br></br>
                  <input className="input-custom" value={this.state.currentLat} onChange={(e=>this.onChange(e,2))} placeholder="Lat." />
                </div>
              </Col>
              <Col xs={2} className="">
                <div style={{ marginTop: "40px" }}>
                  <label className="input-label">Enter Longitude</label>
                  <br></br>
                  <input className="input-custom" value={this.state.currentLong} onChange={(e=>this.onChange(e,3))} placeholder="Lon" />
                </div>
              </Col>
              <Col xs={2}></Col>
              <Col xs={4}>
                <div style={{ marginTop: "70px" }}>
                  {!this.state.enableSubmit &&  <Button className="submit-button-disable" variant="primary">
                    Submit
                  </Button>}
                  { this.state.enableSubmit && <Button className="submit-button-enable" onClick={()=>this.onSubmit()} variant="primary">
                    Submit
                  </Button>}
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: "",
              height: "55vh",
              borderRadius: "0px 0px 36px 36px",
            }}
          >
            <Row style={{ marginRight: "2px", marginLeft: "2px" }}>
              <Col xs={6} className="left-pane">
                <div style={{ backgroundColor: "", height: "45vh" }}>
                    <div className="all-cordinates">
                    <span >
                    All Co-ordinates:
                    </span>
                    </div>
                    
                  {/* <div> */}
                    {/* <span className="all-cord">All Co-ordinates:</span><br></br> */}
              {/* </div> */}

                  <div style={{ textAlign:"left" }}>{data}</div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <Button className="submit-button-left" onClick={()=>this.onShowRoute()} variant="primary">
                    Show Route
                  </Button>{" "}
                </div>
              </Col>
              <Col xs={6} className="right-pane">
                <MapComponent polyline={this.state.polyline} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
