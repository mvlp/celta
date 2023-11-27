import { useState } from "react";
import { AgGridReact, } from "ag-grid-react";
import { ColDef, ColGroupDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import DownloadButton from "../components/table/DownloadButton";
import { dummyjson } from "../components/table/DataItem";

interface RowData {
  make: string;
  model: string;
  price: number;
}

export default function CGVS() { 
  const [rowData] = useState<RowData[]>([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ]);

  const columnDefs: (ColDef<RowData> | ColGroupDef<RowData>)[] | null = [
    { headerName: "Make", field: "make", sortable: true, filter: true },
    { headerName: "Model", field: "model", sortable: true, filter: true },
    { headerName: "Price", field: "price", sortable: true, filter: true }
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <DownloadButton jsonData={dummyjson.jsonData}/>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}