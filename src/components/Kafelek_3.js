import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Kafelki_1.css";
import { Link } from "react-router-dom";

export default function Kafelki_3() {
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Apracownicy_prge&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const data = response.data.features.map((feature, index) => ({
          id: index + 1,
          imie_pracownika: feature.properties.imie_pracownika,
          nazwisko_pracownika: feature.properties.nazwisko_pracownika,
          miasto_pracownika: feature.properties.miasto,
          biuro: feature.properties.biuro_pracownika,
        }));
        setRows(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <div className="kafelek_gora">
        <div className="kafelek_tytul">Dane</div>{" "}
        <Link to="/uslugi">
          <button className="edycja">Usługi</button>
        </Link>
        <Link to="/mapa">
          <button className="edycja">Mapa</button>
        </Link>
        <Link to="/baza_hoteli">
          {" "}
          <button className="edycja">Tabela</button>
        </Link>
      </div>
      <div
        className="kafelki_1_grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
          marginLeft: "15px",
        }}
      >
        {rows.map((item, index) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OeQ4UuPkjTWNPcdgAXwMZjFqgzeqgxjPpw&s"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.imie_pracownika + "\n" + item.nazwisko_pracownika}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.miasto_pracownika + "\n" + item.biuro}
              </Typography>
            </CardContent>
          </Card>
          // image={item.image}
        ))}
      </div>
    </div>
  );
}
