import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import ResultItemData from "../assets/data/tabela.json";
import { ResultItem } from "../components/table/DataItens";
import { columnResultItem } from "../components/table/DataItens";

export default function CGVS() {
  const [rowData] = useState<ResultItem[]>(ResultItemData);

  const columnDefsResultItem: (ColDef<ResultItem> | ColGroupDef<ResultItem>)[] | null = columnResultItem;

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: "100vh", width: "100%" }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefsResultItem}></AgGridReact>
    </div>
  );
}
