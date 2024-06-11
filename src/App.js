import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Uslugi from "./components/uslugi/Uslugi";
import Baza_biur_podrozy from "./components/baza_biur_podrozy/Baza_biur_podrozy";
import Baza_hoteli from "./components/baza_biur_podrozy/Baza_hoteli";
import Baza_pracownikow from "./components/baza_biur_podrozy/Baza_pracownikow";
import Mapa from "./components/mapa/Mapa";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/uslugi",
    element: <Uslugi />,
  },
  {
    path: "/baza_biur_podrozy",
    element: <Baza_biur_podrozy />,
  },
  {
    path: "/baza_hoteli",
    element: <Baza_hoteli />,
  },
  {
    path: "/baza_pracownikow",
    element: <Baza_pracownikow />,
  },
  {
    path: "/mapa",
    element: <Mapa />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
