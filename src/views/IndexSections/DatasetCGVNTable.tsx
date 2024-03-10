import { useState } from "react";
import { ColDef } from "ag-grid-community";

import datasetCGVN from "../../assets/data/datasetCGVN.json";
import {
  datasetCGVNInterface,
  datasetCGVNColumnConfig,
} from "../../components/table/DataItens";
import { Container } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";

const Dataset_CGVNTable = () => {
  const [rowData] = useState<datasetCGVNInterface[]>(datasetCGVN);

  const [ColumnDefs] = useState<ColDef[]>(datasetCGVNColumnConfig);

  return (
    <Container fluid>
      <div
        className="ag-theme-balham"
        style={{ height: "100vh", width: "100%" }}
      >
        <AgGridReact rowData={rowData} columnDefs={ColumnDefs}></AgGridReact>
      </div>
    </Container>
  );
};

export default Dataset_CGVNTable;
