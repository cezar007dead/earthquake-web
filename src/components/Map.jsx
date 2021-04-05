import * as React from "react";
import { useState,useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle,useMap } from "react-leaflet";
import Leaflet from 'leaflet'
import { useDispatch } from "react-redux";
import * as markerService from "../services/MapRadiusColor"

// import 'leaflet/dist/leaflet.css';

import {
  changeColor,
} from "../storeClasses/earthquakeData";

import { useSelector } from "react-redux";

function SetMapView(){
  const map = useMap();
  console.log("SetMapView")

  const mapCoordinates = useSelector((store)=>{
    return store.mainstore.mapCoordinates;
  });
  useEffect(()=>{
    map.setView([mapCoordinates.lat, mapCoordinates.long], mapCoordinates.zoom)
    map.closePopup();
    return ()=>{
      //clean up code (component unmount) (on kill component)
    };
  },[mapCoordinates])

  return null
}

export default function Map(props) {
  const dispatch = useDispatch();
  const mapCoordinates = useSelector((store)=>{
    return store.mainstore.mapCoordinates;
  });

  const corner1 = Leaflet.latLng(-360, -800)
  const corner2 = Leaflet.latLng(360, 800)
  const bounds = Leaflet.latLngBounds(corner1, corner2)

  const [keyMap, setCount] = useState("main-map-key");

//   const iconPerson = new Leaflet.Icon({
//     iconUrl: require('../img/marker-pin-person.svg'),
//     iconRetinaUrl: require('../img/marker-pin-person.svg'),
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(60, 75),
//     className: 'leaflet-div-icon'
// });


  return (
    <div>
      {/* <div>{mapCoordinates.lat}</div> */}
      <MapContainer
        key={keyMap}
        minZoom={2}
        worldCopyJump={true}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        center={[mapCoordinates.lat, mapCoordinates.long]}
        zoom={3}
        scrollWheelZoom={true}
        style={props.isDesktop?{ width: "100vw-20%", height: "100vh" }:{ width: "100vw", height: "70vh" }}
        // style={{ width: "100vw", height: "80vh" }}
      >
        <SetMapView></SetMapView>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {/* <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        /> */}
        {props.locations.map((location) => (
          <div key={location.key}>
            <Marker ico position={[location.lat, location.long]} >
              <Popup onOpen={()=>{dispatch(changeColor(location.id));}}>
                Mag {location.mag} {location.place}
                <br />
              </Popup>
            </Marker>
            <Circle
              center={[location.lat, location.long]}
              pathOptions={markerService.getColorByMag(location.mag)}
              radius={markerService.getRadiusByMag(location.mag,location.lat)}
            />
          </div>
        ))}
        {/* Dublicate to right */}
        {props.locations.map((location) => (
          <div key={location.key}>
            <Marker position={[location.lat, location.long + 360]}>
              <Popup onOpen={()=>{dispatch(changeColor(location.id));}}>
                Mag {location.mag} {location.place}
                <br />
              </Popup>
            </Marker>
            <Circle
              center={[location.lat, location.long + 360]}
              pathOptions={markerService.getColorByMag(location.mag)}
              radius={markerService.getRadiusByMag(location.mag,location.lat)}
            />
          </div>
        ))}
        {/* Dublicate to left */}
        {props.locations.map((location) => (
          <div key={location.key}>
            <Marker position={[location.lat, location.long - 360]}>
              <Popup onOpen={()=>{dispatch(changeColor(location.id));}}>
                Mag {location.mag} {location.place}
                <br />
              </Popup>
            </Marker>
            <Circle
              center={[location.lat, location.long - 360]}
              pathOptions={markerService.getColorByMag(location.mag)}
              radius={markerService.getRadiusByMag(location.mag,location.lat)}
            />
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
