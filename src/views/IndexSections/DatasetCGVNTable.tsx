import { useState } from "react";
import { ColDef } from "ag-grid-community";

import dataset_CGVN from "../../assets/data/dataset_CGVN.json";
import {
  dataset_CGVNInterface,
  dataset_CGVNColumnConfig,
} from "../../components/table/DataItens";
import { Container } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";

const Dataset_CGVNTable = () => {
  const [rowData] = useState<dataset_CGVNInterface[]>(
    dataset_CGVN as dataset_CGVNInterface[]
  );

  const [ColumnDefs] = useState<ColDef[]>(dataset_CGVNColumnConfig);

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
