import { Link } from "react-router-dom";
import { TableInterface } from "../components/table/DataItens";

const HubPages = ({ data }: { data: TableInterface[] }) => {
  // Agrupe os itens por CNPJ_Companhia
  const groupedByCNPJ: { [cnpj: string]: TableInterface[] } = {};
  data.forEach((item) => {
    if (!groupedByCNPJ[item.CNPJ_Companhia]) {
      groupedByCNPJ[item.CNPJ_Companhia] = [];
    }
    groupedByCNPJ[item.CNPJ_Companhia].push(item);
  });

  return (
    <div>
      <h1>Tabela de CNPJs</h1>
      <ul>
        {/* Mapeie sobre os grupos e gere os links para cada CNPJ */}
        {Object.entries(groupedByCNPJ).map(([cnpj, items]) => (
          <li key={cnpj}>
            <Link to={`/cnpj/${cnpj}`}>
              {cnpj} ({items.length} {items.length === 1 ? "item" : "itens"})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HubPages;
