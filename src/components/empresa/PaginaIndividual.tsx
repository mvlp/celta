import { ResultItem } from "../table/DataItens";

const PaginaIndividual = ( item : ResultItem ) => {
  return (
    <div>
      <h1>Página do CNPJ: {item.CNPJ_Companhia}</h1>

      {/* Renderize o conteúdo específico para este CNPJ */}
      {/* Por exemplo: */}
      <p>Informações relevantes para o CNPJ {item.CNPJ_Companhia}...</p>
    </div>
  );
};

export default PaginaIndividual;