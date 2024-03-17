import { ColDef, ColGroupDef } from "ag-grid-community";
import { NewLineRenderer } from "../../views/IndexSections/NewLineRenderer";
import "../../assets/css/CustonTable.css";

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
  | (ColDef<TableInterface> | ColGroupDef<TableInterface>)[] = [
  {
    headerName: "CNPJ Companhia",
    field: "CNPJ_Companhia",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Data Referencia",
    field: "Data_Referencia",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Acionistas",
    field: "Acionistas",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Conselho de Administracao",
    field: "Conselho de Administracao",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Diretoria",
    field: "Diretoria",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Etica e Conflito de Interesses",
    field: "Etica e Conflito de Interesses",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "Orgaos de Fiscalizacao e Controle",
    field: "Orgaos de Fiscalizacao e Controle",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "mean",
    field: "mean",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "median",
    field: "median",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "geomean",
    field: "geomean",
    sortable: true,
    filter: true,
    resizable: false,
  },
  {
    headerName: "harmonic.mean",
    field: "harmonic",
    sortable: true,
    filter: true,
    resizable: false,
  },
];

// Essa interface só existe para fazer o download, por conta da função que faz a conversão!
// Preferencialmente use ResultItem

export interface datasetCGVNInterface {
  CNPJ_Companhia: string;
  Data_Referencia: string;
  Versao: string;
  Nome_Empresarial: string;
  ID_Documento: string;
  ID_Item: string;
  Capitulo: string;
  Principio: string;
  Pratica_Recomendada: string;
  Pratica_Adotada: string;
  Explicacao: string;
  Data_Entrega: string;
}

export const datasetCGVNColumnConfig = [
  {
    headerName: "CNPJ Companhia",
    field: "CNPJ_Companhia",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Data Referência",
    field: "Data_Referencia",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Versão",
    field: "Versao",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.5,
  },
  {
    headerName: "Nome Empresarial",
    field: "Nome_Empresarial",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "ID Documento",
    field: "ID_Documento",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "ID Item",
    field: "ID_Item",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.5,
  },
  {
    headerName: "Capítulo",
    field: "Capitulo",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Principio",
    field: "Principio",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Prática Recomendada",
    field: "Pratica_Recomendada",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Prática Adotada",
    field: "Pratica_Adotada",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 0.5,
  },
  {
    headerName: "Explicação",
    field: "Explicacao",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
  {
    headerName: "Data Entrega",
    field: "Data_Entrega",
    sortable: true,
    filter: true,
    resizable: false,
    flex: 1,
  },
];

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
