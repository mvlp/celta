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

const dummy: DataItem[] = [
  {
    "CNPJ_Companhia": "00.000.000/0001-91",
    "Data_Referencia": "2023-12-31",
    "Versao": "1",
    "Nome_Empresarial": "BCO BRASIL S.A.",
    "ID_Documento": "129313",
    "Codigo_CVM": "001023",
    "Categoria": "Código de Governança",
    "Data_Entrega": "2023-07-28",
    "Link_Download": "http://www.rad.cvm.gov.br/ENETCONSULTA/frmDownloadDocumento.aspx?CodigoInstituicao=1&NumeroSequencialDocumento=129313",
    "Data_Inicio_Exercicio_Social": "2022-01-01",
    "Data_Fim_Exercicio_Social": "2022-12-31",
    "Motivo_Reapresentacao": ""
  },
  {
    "CNPJ_Companhia": "00.000.208/0001-00",
    "Data_Referencia": "2023-12-31",
    "Versao": "1",
    "Nome_Empresarial": "BRB BCO DE BRASILIA S.A.",
    "ID_Documento": "129618",
    "Codigo_CVM": "014206",
    "Categoria": "Código de Governança",
    "Data_Entrega": "2023-07-31",
    "Link_Download": "http://www.rad.cvm.gov.br/ENETCONSULTA/frmDownloadDocumento.aspx?CodigoInstituicao=1&NumeroSequencialDocumento=129618",
    "Data_Inicio_Exercicio_Social": "2022-01-01",
    "Data_Fim_Exercicio_Social": "2022-12-31",
    "Motivo_Reapresentacao": ""
  },
  {
    "CNPJ_Companhia": "00.001.180/0001-26",
    "Data_Referencia": "2023-12-31",
    "Versao": "1",
    "Nome_Empresarial": "CENTRAIS ELET BRAS S.A. - ELETROBRAS",
    "ID_Documento": "129356",
    "Codigo_CVM": "002437",
    "Categoria": "Código de Governança",
    "Data_Entrega": "2023-07-28",
    "Link_Download": "http://www.rad.cvm.gov.br/ENETCONSULTA/frmDownloadDocumento.aspx?CodigoInstituicao=1&NumeroSequencialDocumento=129356",
    "Data_Inicio_Exercicio_Social": "2022-01-01",
    "Data_Fim_Exercicio_Social": "2022-12-31",
    "Motivo_Reapresentacao": ""
  }
]


export const dummyjson: JSONToXLSXProps = {
  jsonData: dummy
}

