import React, { useEffect, useState } from "react";
import "./Mapa.css";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { pink } from "@mui/material/colors";
var myStyle = {
  color: "#ff0000",
  weight: 5,
  opacity: 1,
};

function Map() {
  const [biura, setbiura] = useState(null);

  const makePopup = (feature, layer) => {
    if (feature.properties) {
      //console.log(feature.properties);
      layer.bindPopup(`
      <h1>Biura podróży</h1>
      <strong>Miasto:</strong> ${feature.properties.miasto}</br>
      <strong>Nazwa biura:</strong> ${feature.properties.nazwa_biura}
      <strong>Przychod biura:</strong> ${feature.properties.przychod_biura}
      `);
    }
  };
  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Abiura_podorzy_prge&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setbiura(dane.data);
        });
    };
    getData();
  }, []);
  const [hotele, sethotele] = useState(null);

  const makePopup_hotele = (feature, layer) => {
    if (feature.properties) {
      //console.log(feature.properties);
      layer.bindPopup(`
      <h1>Hotele</h1>
      <strong>Miasto:</strong> ${feature.properties.miasto}</br>
      <strong>Nazwa hotelu:</strong> ${feature.properties.nazwa_hotelu}
      <strong>Liczba pokoi:</strong> ${feature.properties.liczba_pokoi}
      <strong>Biuro:</strong> ${feature.properties.biuro}
      `);
    }
  };
  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Ahotele_prge&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          sethotele(dane.data);
        });
    };

    getData();
  }, []);

  const [pracownicy, setpracownicy] = useState(null);

  const makePopup_pracownicy = (feature, layer) => {
    if (feature.properties) {
      //console.log(feature.properties);
      layer.bindPopup(`
      <h1>Pracownicy</h1>
      <strong>Miasto:</strong> ${feature.properties.miasto}</br>
      <strong>Imie pracownika:</strong> ${feature.properties.imie_pracownika}
      <strong>Nazwisko pracownika:</strong> ${feature.properties.nazwisko_pracownika}
      <strong>Biuro pracownika:</strong> ${feature.properties.biuro_pracownika}
      `);
    }
  };
  useEffect(() => {
    console.log("aaa");
    const getData = () => {
      axios
        .get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy_prge&maxFeatures=50&outputFormat=application%2Fjson"
        )
        .then((dane) => {
          console.log(dane);
          setpracownicy(dane.data);
        });
    };

    getData();
  }, []);

  return (
    <div className="mapa">
      <MapContainer center={[52.2322222, 21.0]} zoom={10}>
        <LayersControl>
          <LayersControl.BaseLayer name="OSM">
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Google">
            <TileLayer url="http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Google Satelite">
            <TileLayer url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}" />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="biura">
            {biura ? (
              <GeoJSON data={biura} onEachFeature={makePopup} style={myStyle} />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="hotele">
            {hotele ? (
              <GeoJSON
                data={hotele}
                onEachFeature={makePopup_hotele}
                style={myStyle}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
          <LayersControl.Overlay name="pracownicy">
            {pracownicy ? (
              <GeoJSON
                data={pracownicy}
                onEachFeature={makePopup_pracownicy}
                style={myStyle}
              />
            ) : (
              ""
            )}
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
export default Map;
