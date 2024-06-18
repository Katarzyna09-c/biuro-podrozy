import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Baza_biur_podrozy.css";

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

const rows = [
  {
    id: 1,
    imie_pracownika: "Jan",
    nazwisko_pracownika: "Kowalski",
    miasto_pracownika: "Warszawa",
    biuro: "Itaka",
  },
  {
    id: 2,
    imie_pracownika: "Adam",
    nazwisko_pracownika: "Nowak",
    miasto_pracownika: "Szczecin",
    biuro: "Rainbow",
  },
  {
    id: 3,
    imie_pracownika: "Anna",
    nazwisko_pracownika: "Jarosinska",
    miasto_pracownika: "Gdynia",
    biuro: "Coral",
  },
  {
    id: 4,
    imie_pracownika: "Aneta",
    nazwisko_pracownika: "Kołacz",
    miasto_pracownika: "Zakopane",
    biuro: "Klakier",
  },
];

export default function Baza_pracownikow() {
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
