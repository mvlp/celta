import { TableInterface } from "../../components/table/DataItens";
import Container from "react-bootstrap/Container";

const Individualpage = ({ item }: { item: TableInterface[] }) => {
  return (
    <Container>
      <h1>Página do CNPJ: {item[0].CNPJ_Companhia}</h1>

      {item.map((dataItem, index) => (
        <p key={index}>Data de referencia: {dataItem.Data_Referencia} </p>
      ))}
    </Container>
  );
};

export default Individualpage;
