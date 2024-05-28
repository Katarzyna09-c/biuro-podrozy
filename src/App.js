import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Uslugi from "./components/uslugi/Uslugi";
import Baza_biur_podrozy from "./components/baza_biur_podrozy/Baza_biur_podrozy";

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
