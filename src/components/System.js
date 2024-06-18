import React from "react";
import foto from "./system.png"; // Poprawna ścieżka do obrazu
import "./System.css"; // Importowanie stylów

function TextWithImage() {
  return (
    <div className="text-with-image">
      <img src={foto} alt="Opis zdjęcia" className="image" />

      <p className="text">
        Na polskim rynku działa wiele organizatorów wakacji, niestety nie każdy
        z nich jest uczciwy i godny zaufania. Jeśli zainteresowany planuje
        zorganizowany urlop, powinien przede wszystkim znaleźć biuro i sprawdzić
        informacje na jego temat w Centralnej Ewidencji Organizatorów Turystyki
        i Pośredników Turystycznych Ministerstwa Sportu i Turystyki. W drugiej
        kolejności powinien dowiedzieć się, czy biuro jest zrzeszone w
        wiarygodnych instytucjach turystycznych, jak Polska Izba Turystyki.
        Ważnym elementem jest też gwarancja ubezpieczeniowa organizatora - każdy
        wiarygodny touroperator powinien posiadać na swojej stronie informację
        na temat gwarancji ubezpieczeniowej, która zabezpiecza kupujących m.in.
        w razie niewypłacalności biura czy innych sytuacji losowych.
      </p>
    </div>
  );
}

export default TextWithImage;
