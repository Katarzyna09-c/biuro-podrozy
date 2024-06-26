import React from "react";
import home_foto from "./home.png";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home_gora">
        <Link to="/system">
          <button className="home_o_systemie">O systemie</button>
        </Link>
      </div>
      <div className="home_srodek">
        <img src={home_foto} alt="foto" className="home_foto"></img>
        <div className="home_napisy">
          <div className="home_tytul">GEOPORTAL</div>
          <div className="home_podtytul">
            System zarzadzajacy siecia biur podrozy oraz jej klientami
          </div>
        </div>
      </div>
      <div className="home_dol">
        <Link to="/uslugi">
          {" "}
          <button className="home_start">Start</button>
        </Link>
      </div>
    </div>
  );
}
