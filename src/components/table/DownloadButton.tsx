import React from 'react';
import Button from 'react-bootstrap/Button';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import {JSONToXLSXProps} from './DataItem';

const JSONToXLSX: React.FC<JSONToXLSXProps> = ({ jsonData }) => {
  const handleConvertToXLSX = () => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    saveAs(data, 'output.xlsx');
  };

  return (
    <div>
      <Button variant="secondary" onClick={handleConvertToXLSX}>Convert to XLSX</Button>
    </div>
  );
};

export default JSONToXLSX;