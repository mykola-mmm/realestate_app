import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
import "./map.scss"
import 'leaflet/dist/leaflet.css';
import Pin from "../pin/pin"

export default function Map({items}) {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {
            items.map((item, id) => (
                <Pin key={id} item={item} />
            ))
        }
    </MapContainer>
  );
}
