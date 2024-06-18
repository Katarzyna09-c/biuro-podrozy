import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Baza_biur_podrozy.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nazwa_hotelu", headerName: "Nazwa hotelu", width: 130 },
  { field: "miasto_hotelu", headerName: "Miasto hotelu", width: 130 },
  { field: "liczba_pokoi", headerName: "Liczba pokoi", width: 130 },
  { field: "biuro", headerName: "Biuro", width: 130 },
];

export default function Baza_hoteli() {
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/geoserver/prge/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=prge%3Ahotele_prge&maxFeatures=50&outputFormat=application%2Fjson"
        );
        const data = response.data.features.map((feature, index) => ({
          id: index + 1,
          nazwa_hotelu: feature.properties.nazwa_hotelu,
          miasto_hotelu: feature.properties.miasto,
          liczba_pokoi: feature.properties.liczba_pokoi,
          biuro: feature.properties.biuro,
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
      <div className="baza_danych_tytul">Baza hoteli</div>
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
            <Link to="/kafelki2">
              <button className="edycja">Tabela</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
