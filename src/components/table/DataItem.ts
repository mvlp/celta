export interface DataItem  {
  CNPJ_Companhia: string;
  Data_Referencia: string;
  Versao: string;
  Nome_Empresarial: string;
  ID_Documento: string;
  Codigo_CVM: string;
  Categoria: string;
  Data_Entrega: string;
  Link_Download: string;
  Data_Inicio_Exercicio_Social: string;
  Data_Fim_Exercicio_Social: string;
  Motivo_Reapresentacao: string;
}

export interface JSONToXLSXProps {
  jsonData: DataItem[];
}

