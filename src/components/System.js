import React from "react";
import foto from "./system_2.png"; // Poprawna ścieżka do obrazu
import "./System.css"; // Importowanie stylów
import { Link } from "react-router-dom";
import samolot from "./samolot-lini-LOT copy.jpg";

function TextWithImage() {
  return (
    <div className="text-with-image">
      <img src={foto} alt="Opis zdjęcia" className="image" />
      <div className="text-container">
        <p className="text-large">Wybierz najlepsze biuro podróży</p>
        <p className="text">
          Na polskim rynku działa wiele organizatorów wakacji, niestety nie
          każdy z nich jest uczciwy i godny zaufania. Jeśli zainteresowany
          planuje zorganizowany urlop, powinien przede wszystkim znaleźć biuro i
          sprawdzić informacje na jego temat w Centralnej Ewidencji
          Organizatorów Turystyki i Pośredników Turystycznych Ministerstwa
          Sportu i Turystyki. W drugiej kolejności powinien dowiedzieć się, czy
          biuro jest zrzeszone w wiarygodnych instytucjach turystycznych, jak
          Polska Izba Turystyki. Ważnym elementem jest też gwarancja
          ubezpieczeniowa organizatora - każdy wiarygodny touroperator powinien
          posiadać na swojej stronie informację na temat gwarancji
          ubezpieczeniowej, która zabezpiecza kupujących m.in. w razie
          niewypłacalności biura czy innych sytuacji losowych.
        </p>
        <p className="text-small">
          Najlepszy biurem podróży na rok 2023 okazała się:{" "}
          <span className="highlight">ITAKA</span>
          <img src={samolot} alt="Opis zdjęcia" className="image_2" />
        </p>

        <p className="text_web">
          Więcej informacji znajdziesz na stronie{" "}
          <span className="highlight">:</span>
          <Link to="https://www.itaka.pl/?gad_source=1&gclid=CjwKCAjwg8qzBhAoEiwAWagLrCkpucq2pTmInL4QaIsOMEuoV9o4pmXp6LCZTo37DZiQG2swMwXa2xoCqu8QAvD_BwE">
            <span className="highlight">Biuro podróży ITAKA</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default TextWithImage;
