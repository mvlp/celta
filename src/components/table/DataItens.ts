import { ColDef, ColGroupDef } from "ag-grid-community";

export interface TableInterface {
  CNPJ_Companhia: string;
  Data_Referencia: string;
  Acionistas: string;
  "Conselho de Administracao": string;
  Diretoria: string;
  "Etica e Conflito de Interesses": string;
  "Orgaos de Fiscalizacao e Controle": string;
  mean: string;
  median: string;
  geomean: string;
  harmonic: string;
}

export const ColumnConfig:
  | (ColDef<TableInterface> | ColGroupDef<TableInterface>)[]
  | null = [
  {
    headerName: "CNPJ Companhia",
    field: "CNPJ_Companhia",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Data Referencia",
    field: "Data_Referencia",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Acionistas",
    field: "Acionistas",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Conselho de Administracao",
    field: "Conselho de Administracao",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Diretoria",
    field: "Diretoria",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Etica e Conflito de Interesses",
    field: "Etica e Conflito de Interesses",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "Orgaos de Fiscalizacao e Controle",
    field: "Orgaos de Fiscalizacao e Controle",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "mean",
    field: "mean",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "median",
    field: "median",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "geomean",
    field: "geomean",
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: "harmonic.mean",
    field: "harmonic",
    sortable: true,
    filter: true,
    resizable: true,
  },
];

// Essa interface só existe para fazer o download, por conta da função que faz a conversão!
// Preferencialmente use ResultItem

export interface JSONToXLSXProps {
  jsonData: TableInterface[];
}
