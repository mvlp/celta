import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import data1 from "../assets/data/cgvn_cia_aberta_2023.json";
import { DataItem } from "../components/table/DataItem";

export default function CGVS() {
  const [rowData] = useState<DataItem[]>(data1);

  const columnDefs: (ColDef<DataItem> | ColGroupDef<DataItem>)[] | null = [
    {
      headerName: "CNPJ Companhia",
      field: "CNPJ_Companhia",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Data Referencia",
      field: "Data_Referencia",
      sortable: true,
      filter: true,
    },
    { headerName: "Versao", field: "Versao", sortable: true, filter: true },
    {
      headerName: "Nome Empresarial",
      field: "Nome_Empresarial",
      sortable: true,
      filter: true,
    },
    {
      headerName: "ID Documento",
      field: "ID_Documento",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Codigo CVM",
      field: "Codigo_CVM",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Categoria",
      field: "Categoria",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Data Entrega",
      field: "Data_Entrega",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Link Download",
      field: "Link_Download",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Data Inicio Exercicio Social",
      field: "Data_Inicio_Exercicio_Social",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Data Fim Exercicio Social",
      field: "Data_Fim_Exercicio_Social",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Motivo Reapresentacao",
      field: "Motivo_Reapresentacao",
      sortable: true,
      filter: true,
    },
  ];

  return (
    <div className="ag-theme-alpine-dark" style={{ height: "100vh", width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
