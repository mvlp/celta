import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "../table/CustonTable.css";

import { Container } from "react-bootstrap";

// Define o tipo dos dados
interface DataItem {
  CNPJ_Companhia: string;
  Data_Entrega: string;
  Data_Referencia: string;
  Versao: number;
  Nome_Empresarial: string;
}

import missingData from "../../assets/data/missing_data_CGVN.json";

const missingDataCGVN: DataItem[] = missingData;

export default function GovernanceMissing() {
  // Definições das colunas
  const columnDefs: {
    headerName: string;
    field: keyof DataItem;
    sortable: boolean;
    filter: boolean;
  }[] = [
      {
        headerName: "CNPJ",
        field: "CNPJ_Companhia",
        sortable: true,
        filter: true,
      },
      {
        headerName: "Data de Entrega",
        field: "Data_Entrega",
        sortable: true,
        filter: true,
      },
      {
        headerName: "Data de Referência",
        field: "Data_Referencia",
        sortable: true,
        filter: true,
      },
      { headerName: "Versão", field: "Versao", sortable: true, filter: true },
      {
        headerName: "Nome Empresarial",
        field: "Nome_Empresarial",
        sortable: true,
        filter: true,
      },
    ];

  return (
    <>
      <Container fluid className="my-3">
        {missingDataCGVN.length > 0 ? ( // Verifica se o array não está vazio
          <div>
            <p>
              A base de dados fornecida pela CVM contém lacunas de informações
              para as seguintes empresas nas respectivas datas:
            </p>
            <AgGridReact
              className="ag-theme-balham"
              rowData={missingDataCGVN} // Dados da tabela
              columnDefs={columnDefs} // Configuração das colunas
              pagination={true} // Habilita paginação
              paginationPageSize={10} // Número de linhas por página
              domLayout="autoHeight"
            />
          </div>
        ) : (
          <p></p>
        )}
      </Container>
    </>
  );
}
