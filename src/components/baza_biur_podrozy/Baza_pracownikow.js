import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Baza_biur_podrozy.css";
import { useEffect } from "react";
import axios from "axios";
import { GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "imie_pracownika", headerName: "Imie pracownika", width: 130 },
  {
    field: "nazwisko_pracownika",
    headerName: "Nazwisko pracownika",
    width: 130,
  },
  { field: "miasto_pracownika", headerName: "Miasto pracownika", width: 130 },
  { field: "biuro", headerName: "Biuro", width: 130 },
];

export default function Baza_pracownikow() {
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
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    getData();
  }, []);
  return (
    <div className="baza_danych_1">
      <div className="baza_danych_tytul">Baza pracowników</div>
      <div className="baza_danych_srodek">
        <div className="tabela">
          <div style={{ height: "80vh", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              disableColumnFilter
              disableDensitySelector
              disableColumnSelector
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  csvOptions: { disableToolbarButton: true },
                  printOptions: { disableToolbarButton: true },
                },
              }}
            />
          </div>
          <div className="przyciski_lewo">
            {" "}
            <Link to="/mapa">
              <button className="edycja">Mapa</button>
            </Link>
            <Link to="/uslugi">
              <button className="edycja">Usługi</button>
            </Link>
            <Link to="/kafelek3">
              <button className="edycja">Tabela</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
