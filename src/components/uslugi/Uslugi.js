import React from "react";
import samolot from "./samolot-lini-LOT.jpg";
import "./Uslugi.css";
import przycisk from "./mapa-removebg-preview.png";
import przycisk_2 from "./drugi_obrazek-removebg-preview.png";
import { Link } from "react-router-dom";

export default function Uslugi() {
  return (
    <div>
      <div className="uslugi_gora">
        <div className="uslugi_napis">Dostępne usługi</div>
        <img className=" samolot_foto" src={samolot} alt="fruuuuu"></img>
      </div>
      <div className="uslugi_srodek">
        <Link to="/mapa">
          <button className="uslugi_przyciski">
            <div className="przyciski_wyglad">
              <img className="uslugi_obrazek" src={przycisk} alt="klik"></img>
            </div>
            <div className="uslugi_podpis">Mapa biur podróży</div>
          </button>
        </Link>
        <Link to="/baza_biur_podrozy">
          <button className="uslugi_przyciski">
            <div className="przyciski_wyglad">
              <img
                className="uslugi_obrazek_2"
                src={przycisk_2}
                alt="klik_2"
              ></img>
            </div>
            <div className="uslugi_podpis">Baza danych biur podróży</div>
          </button>
        </Link>
        <Link to="/baza_hoteli">
          <button className="uslugi_przyciski">
            <div className="przyciski_wyglad">
              <img
                className="uslugi_obrazek_2"
                src={przycisk_2}
                alt="klik_2"
              ></img>
            </div>
            <div className="uslugi_podpis">Baza danych hoteli</div>
          </button>
        </Link>
        <Link to="/baza_pracownikow">
          <button className="uslugi_przyciski">
            <div className="przyciski_wyglad">
              <img
                className="uslugi_obrazek_2"
                src={przycisk_2}
                alt="klik_2"
              ></img>
            </div>
            <div className="uslugi_podpis">Baza danych pracownikow</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
