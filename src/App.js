import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Uslugi from "./components/uslugi/Uslugi";
import Baza_biur_podrozy from "./components/baza_biur_podrozy/Baza_biur_podrozy";
import Baza_hoteli from "./components/baza_biur_podrozy/Baza_hoteli";
import Baza_pracownikow from "./components/baza_biur_podrozy/Baza_pracownikow";
import Mapa from "./components/mapa/Mapa";
import Kafelki_1 from "./components/Kafelki_1";
import Kafelki_2 from "./components/Kafelki_2";
import Kafelek_3 from "./components/Kafelek_3";
import System from "./components/System";

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
  {
    path: "/kafelki1",
    element: <Kafelki_1 />,
  },
  {
    path: "/kafelki2",
    element: <Kafelki_2 />,
  },
  {
    path: "/kafelek3",
    element: <Kafelek_3 />,
  },
  {
    path: "/system",
    element: <System />,
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
