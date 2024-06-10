import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Baza_biur_podrozy.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nazwa_biura", headerName: "Nazwa biura", width: 130 },
  { field: "siedziba_biura", headerName: "Siedziba biura", width: 130 },
  { field: "przychody", headerName: "Przychody", width: 130 },
];

const rows = [
  { id: 1, nazwa_biura: "Itaka", siedziba_biura: "Warszawa", przychody: 3500 },
  { id: 2, nazwa_biura: "Rainbow", siedziba_biura: "Koszalin", przychody: 500 },
  {
    id: 3,
    nazwa_biura: "Coral",
    siedziba_biura: "Szczecin",
    przychody: 354540,
  },
  {
    id: 4,
    nazwa_biura: "Klakier",
    siedziba_biura: "Koszalin",
    przychody: 3550,
  },
];

export default function Baza_hoteli() {
  return (
    <div className="baza_danych_1">
      <div className="baza_danych_tytul">Baza biur podróży</div>
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
            />
          </div>
          <div className="przyciski_lewo">
            <button className="edycja">Edytuj</button>
            <button className="edycja">Usuń</button>
          </div>
        </div>
        <div className="biura">
          <div className="biura_szczegoly">
            nazwa biura
            <input className="biura_szczegoly_input" id="1"></input>
          </div>
          <div className="biura_szczegoly">
            siedziba biura
            <input className="biura_szczegoly_input" id="2"></input>
          </div>
          <div className="biura_szczegoly">
            przychod biura
            <input className="biura_szczegoly_input" id="3"></input>
          </div>
          <button className="dodawanie">Dodaj</button>
        </div>
      </div>
    </div>
  );
}
