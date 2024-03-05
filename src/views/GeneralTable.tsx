import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import Table from "../assets/data/table.json";
import { TableInterface } from "../components/table/DataItens";
import { ColumnConfig } from "../components/table/DataItens";

export default function TabelaGeral() {
  const [rowData] = useState<TableInterface[]>(Table);

  const columnDefsResultItem:
    | (ColDef<TableInterface> | ColGroupDef<TableInterface>)[]
    | null = ColumnConfig;

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: "100vh", width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefsResultItem}
      ></AgGridReact>
    </div>
  );
}
