import { TableInterface } from "../components/table/DataItens";


const Individualpage = ({item}: {item: TableInterface[]}) => {

  return (
    <div>
      <h1>Página do CNPJ: {item[0].CNPJ_Companhia}</h1>

      {item.map((dataItem,index) => (
        <p key={index}>Data de referencia: {dataItem.Data_Referencia} </p>
      ))}
    </div>
  );
};

export default Individualpage;
