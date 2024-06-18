import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Baza_biur_podrozy.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nazwa_hotelu", headerName: "Nazwa hotelu", width: 130 },
  { field: "miasto_hotelu", headerName: "Miasto hotelu", width: 130 },
  { field: "liczba_pokoi", headerName: "Liczba pokoi", width: 130 },
  { field: "biuro", headerName: "Biuro", width: 130 },
];

const rows = [
  {
    id: 1,
    nazwa_hotelu: "Gromada",
    miasto_hotelu: "Warszawa",
    liczba_pokoi: 3500,
    biuro: "Itaka",
  },
  {
    id: 2,
    nazwa_hotelu: "Novotel",
    miasto_hotelu: "Koszalin",
    liczba_pokoi: 500,
    biuro: "Rainbow",
  },
  {
    id: 3,
    nazwa_hotelu: "Warsovia",
    miasto_hotelu: "Szczecin",
    liczba_pokoi: 354540,
    biuro: "Coral",
  },
  {
    id: 4,
    nazwa_hotelu: "Mariot",
    miasto_hotelu: "Koszalin",
    liczba_pokoi: 3550,
    biuro: "Klakier",
  },
];

export default function Baza_hoteli() {
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
            />
          </div>
          <div className="przyciski_lewo">
            <button className="edycja">Edytuj</button>
            <button className="edycja">Usuń</button>
          </div>
        </div>
      </div>
    </div>
  );
}
