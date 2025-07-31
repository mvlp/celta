import { NewLineRenderer } from "../../views/outdated/NewLineRenderer";
import "./CustonTable.css";

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

export interface RespostasInterface {
  ID_Item: string;
  Capitulo: string;
  Principio: string;
  Pratica_Recomendada: string;
  Não: string;
  "Não se Aplica"?: string;
  Parcialmente: string;
  Sim: string;
}

export const RespostasColumnConfig = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1.5,
  },
  {
    headerName: "Prática Recomendada",
    field: "Pratica_Recomendada",
    cellRenderer: NewLineRenderer,
    sortable: true,
    filter: true,
    resizable: false,
    autoHeight: true,
    // hide: true, // da pra simplificar o script de esconder a coluna! Tem callback
    flex: 4,
    cellStyle: { lineHeight: "1.5", whiteSpace: "pre-wrap" },
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    headerStyle: { display: "flex", alignItems: "center", justifyContent: "center" },
    children: [
      {
        headerName: "Não",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Não se Aplica",
        field: "Não se Aplica",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Parcialmente",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Sim",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    ],
  },
];

// nao mostra praticas recomendadas
export const RespostasColumnConfig2 = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1.5,
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    children: [
      {
        headerName: "Não",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Não se Aplica",
        field: "Não se Aplica",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Parcialmente",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Sim",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    ],
  },
];

// nao mostrar Não se aplica e não mostrar praticas recomendadas
export const RespostasColumnConfig3 = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1.5,
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    children: [
      {
        headerName: "Não",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Parcialmente",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Sim",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    ],
  },
];

// não mostrar Não se aplica
export const RespostasColumnConfig4 = [
  {
    headerName: "Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.6,
  },
  {
    headerName: "Princípio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1.5,
  },
  {
    headerName: "Prática Recomendada",
    field: "Pratica_Recomendada",
    cellRenderer: NewLineRenderer,
    sortable: true,
    filter: true,
    resizable: false,
    autoHeight: true,
    // hide: true, // da pra simplificar o script de esconder a coluna! Tem callback
    flex: 4,
    cellStyle: { lineHeight: "1.5", whiteSpace: "pre-wrap" },
  },
  {
    headerName: "Frequência das respostas (%)",
    headerClass: "ag-header-cell-centered",
    children: [
      {
        headerName: "Não",
        field: "Não",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Parcialmente",
        field: "Parcialmente",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      {
        headerName: "Sim",
        field: "Sim",
        sortable: true,
        filter: true,
        resizable: false,
        flex: 1,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    ],
  },
];
