import { ColDef, ColGroupDef } from "ag-grid-community";

// export interface DataItem  {
//   CNPJ_Companhia: string;
//   Data_Referencia: string;
//   Versao: string;
//   Nome_Empresarial: string;
//   ID_Documento: string;
//   Codigo_CVM: string;
//   Categoria: string;
//   Data_Entrega: string;
//   Link_Download: string;
//   Data_Inicio_Exercicio_Social: string;
//   Data_Fim_Exercicio_Social: string;
//   Motivo_Reapresentacao: string;
// }

// const columnDefsDataItem: (ColDef<DataItem> | ColGroupDef<DataItem>)[] | null = [
//     {
//       headerName: "CNPJ Companhia",
//       field: "CNPJ_Companhia",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Data Referencia",
//       field: "Data_Referencia",
//       sortable: true,
//       filter: true,
//     },
//     { headerName: "Versao", field: "Versao", sortable: true, filter: true },
//     {
//       headerName: "Nome Empresarial",
//       field: "Nome_Empresarial",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "ID Documento",
//       field: "ID_Documento",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Codigo CVM",
//       field: "Codigo_CVM",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Categoria",
//       field: "Categoria",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Data Entrega",
//       field: "Data_Entrega",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Link Download",
//       field: "Link_Download",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Data Inicio Exercicio Social",
//       field: "Data_Inicio_Exercicio_Social",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Data Fim Exercicio Social",
//       field: "Data_Fim_Exercicio_Social",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName: "Motivo Reapresentacao",
//       field: "Motivo_Reapresentacao",
//       sortable: true,
//       filter: true,
//     },
//   ];

// export interface JSONToXLSXProps {
//   jsonData: DataItem[];
// }

export interface ResultItem {
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

export const columnResultItem: (ColDef<ResultItem> | ColGroupDef<ResultItem>)[] | null = [
  {
    headerName: 'CNPJ Companhia',
    field: 'CNPJ_Companhia',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Data Referencia',
    field: 'Data_Referencia',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Acionistas',
    field: 'Acionistas',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Conselho de Administracao',
    field: 'Conselho de Administracao',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Diretoria',
    field: 'Diretoria',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Etica e Conflito de Interesses',
    field: 'Etica e Conflito de Interesses',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'Orgaos de Fiscalizacao e Controle',
    field: 'Orgaos de Fiscalizacao e Controle',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'mean',
    field: 'mean',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'median',
    field: 'median',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'geomean',
    field: 'geomean',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    headerName: 'harmonic.mean',
    field: 'harmonic',
    sortable: true,
    filter: true,
    resizable: true,
  },
];

// Essa interface só existe para fazer o download, por conta da função que faz a conversão!
// Preferencialmente use ResultItem
export interface JSONToXLSXProps {
  jsonData: ResultItem[];
}
