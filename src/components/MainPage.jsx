import React, { PureComponent, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Map from "./Map";
import {
  getEarthquakes,
  setEarthquakesAction,
} from "../storeClasses/earthquakeData";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function MainPage(props) {
  const dispatch = useDispatch();
  const earhquakes = useSelector(getEarthquakes);

  const refreshEarthquakesData = () => {
    dispatch(setEarthquakesAction());
  };
  useEffect(refreshEarthquakesData, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div style={{ width: "100vw", height: "100vh", margin: "0px" }}>
      {dimensions.width <= 750 ? (
        <>
          <div style={{}}>
            <Map locations={earhquakes} isDesktop={dimensions.width > 750}></Map>
          </div>
          <div style={{}}>
            <LeftSideBar rows={earhquakes} isDesktop={dimensions.width > 750}></LeftSideBar>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "inline-block",
              verticalAlign: "top",
              width: "20%",
            }}
          >
            <LeftSideBar rows={earhquakes} isDesktop={dimensions.width > 750}></LeftSideBar>
          </div>
          <div style={{ display: "inline-block", width: "80%" }}>
            <Map locations={earhquakes} isDesktop={dimensions.width > 750}></Map>
          </div>
        </>
      )}
    </div>
  );
}

/*
<div
        style={{ display: "inline-block", verticalAlign: "top", width: "20%" }}
      >
        <LeftSideBar rows={earhquakes}></LeftSideBar>
      </div>
      <div style={{ display: "inline-block", width: "80%" }}>
        <Map locations={earhquakes}></Map>
      </div>
*/

/*
import React, { PureComponent } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Map from "./Map";
import * as earthquakeService from "../services/EarthquakeService"



export default class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        { key: "1", mag: 2.5, place: "10km SSW of Idyllwild, CA" , lat : 33.6633333,long:-116.7776667},
      ],
    };
  }

  componentDidMount() {
    earthquakeService
    .get()
    .then((r) => {
      let sortedProducts = [...r.data.body];
      sortedProducts.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
      sortedProducts.forEach(element => {
        const milliseconds = element.date * 1000 // 1575909015000
        const dateObject = new Date(milliseconds)
        element.date = dateObject.toLocaleString() //2019-12-9 10:30:15
        element["key"] = element.id;
      });
      this.setState({rows : sortedProducts});
      console.log(r.data.body)
    })
    .catch(r => {
      
    });

  }

  render() {
    return (
      <div style={{ width:"100vw",height:"100vh", margin:'0px'}}>
        <div style={{display:"inline-block",verticalAlign:"top",width:"20%"}}>
          <LeftSideBar rows={this.state.rows}></LeftSideBar>
        </div>
        <div style={{display:"inline-block",width:"80%"}}>
          <Map locations={this.state.rows}></Map>
        </div>
      </div>
    );
  }
}
*/
