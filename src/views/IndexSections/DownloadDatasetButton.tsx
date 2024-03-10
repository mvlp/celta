import { Container, Button } from "react-bootstrap";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import dataset_CGVN from "../../assets/data/dataset_CGVN.json";

const JSONToXLSX = () => {
  const handleConvertToXLSX = () => {
    const dataArray = Object.values(dataset_CGVN);
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    saveAs(data, "dataset_CGVN.xlsx");
  };

  return (
    <Container>
      <Button variant="info" onClick={handleConvertToXLSX}>
        Baixar tabela dos dados
      </Button>
    </Container>
  );
};

export default JSONToXLSX;
