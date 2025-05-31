import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';

interface Paper {
    id: string;
    title: string;
    authors: string[];
    journalOrConference: string;
    year: number;
    doi?: string;
    volume?: string | number;
    pages?: string;
    type: 'journal' | 'conference';
    keywords?: string[];
}

const papers: Paper[] = [
    {
        id: 'journal_1',
        title: 'O prêmio da lucratividade no mercado de capitais brasileiro',
        authors: ['PEREIRA, M. V. L.', 'LELES, M. C. R.'],
        journalOrConference: 'REVISTA BRASILEIRA DE FINANÇAS (IMPRESSO)',
        year: 2024,
        volume: 22,
        pages: '103-139',
        type: 'journal',
    },
    {
        id: 'journal_2',
        title: 'Relação Entre Capacitação Profissional do Gestor e Desempenho de Fundos de Investimento em Ações',
        authors: ['da SILVA, S. E.', 'IQUIAPAZA, R. A.', 'PEREIRA, M. V. L.', 'ROMA, C. M. S.'],
        journalOrConference: 'REVISTA EVIDENCIACAO CONTABIL & FINANCAS',
        year: 2023,
        volume: 11,
        pages: '102-119',
        type: 'journal',
    },
    {
        id: 'journal_3',
        title: 'A relação entre o grau de dinamismo ambiental dos setores e a incerteza do ambiente econômico brasileiro',
        authors: ['MARTUCHELI, CAMILA TERESA', 'FILHO, ANTÔNIO DIAS PEREIRA', 'PEREIRA, MARCOS VINICIUS LOPES'],
        journalOrConference: 'RECAT - REVISTA ELETRÔNICA CIÊNCIAS DA ADMINISTRAÇÃO E TURISMO',
        year: 2023,
        volume: 11,
        pages: '57-76',
        type: 'journal',
    },
    {
        id: 'journal_4',
        title: 'ANTENAS PLANARES COM METAMATERIAL PARA SISTEMAS DE COMUNICAÇÃO DE REDE LOCAL SEM FIO',
        authors: ['FREITAS, A. E.', 'ARAÚJO, H. X.', 'MARTINS, R. Q.', 'PEREIRA, M. V. L.'],
        journalOrConference: 'SODEBRÁS',
        year: 2022,
        volume: 17,
        pages: '48-55',
        type: 'journal',
    },
    {
        id: 'journal_5',
        title: 'Retorno das empresas brasileiras: um estudo comparativo entre o mercado básico e os segmentos com governança diferenciada da [B]³',
        authors: ['MARTUCHELI, C. T.', 'PEREIRA, M. V. L.', 'SOUZA, A. A.', 'IQUIAPAZA, R. A.'],
        journalOrConference: 'REVISTA DE AUDITORIA, GOVERNANÇA E CONTABILIDADE',
        year: 2022,
        volume: 10,
        pages: '149-163',
        type: 'journal',
    },
    {
        id: 'journal_6',
        title: 'Dinamismo Ambiental, Estrutura de Capital e Rentabilidade de Empresas Brasileiras',
        authors: ['MARTUCHELI, C. T.', 'PEREIRA FILHO, A. D.', 'FARIA, C. A. L.', 'PEREIRA, M. V. L.'],
        journalOrConference: 'PRETEXTO (BELO HORIZONTE. ONLINE)',
        year: 2021,
        volume: 22,
        pages: '116-133',
        type: 'journal',
    },
    {
        id: 'journal_7',
        title: 'Análise da Lei de Menzerath no Português Brasileiro',
        authors: ['ARAUJO, LEONARDO CARNEIRO', 'BENEVIDES, ALINE', 'PEREIRA, MARCOS'],
        journalOrConference: 'LINGUAMÁTICA (BRAGA)',
        year: 2020,
        volume: 12,
        pages: '31-48',
        type: 'journal',
    },
    {
        id: 'journal_8',
        title: 'Cointegration and predictability of VECM approaches for Ibovespa',
        authors: ['PEREIRA, M. V. L.', 'ARAUJO, L. C.', 'IQUIAPAZA, R. A.'],
        journalOrConference: 'REVISTA BRASILEIRA DE FINANÇAS: RBFIN = RBFIN: BRAZILIAN FINANCE REVIEW',
        year: 2020,
        volume: 18,
        pages: '82-121',
        type: 'journal',
    },
    {
        id: 'journal_9',
        title: 'Evaluation of Technical Analysis Trading Rules in a Artificial Stock Market Environment',
        authors: ['LELES, MICHEL CARLO RODRIGUES', 'PEREIRA, MARCOS VINICIUS LOPES', 'IQUIAPAZA, ROBERT ALDO', 'SBRUZZI, ELTON FELIPE', 'NASCIMENTO JUNIOR, CAIRO LUCIO'],
        journalOrConference: 'IEEE Latin America Transactions',
        year: 2020,
        volume: 18,
        pages: '1707-1714',
        type: 'journal',
    },
    {
        id: 'journal_10',
        title: 'Análise do Impacto de Variáveis Macroeconômicas no Desempenho Financeiro e Endividamento de Empresas Listadas na B3',
        authors: ['FONSECA, S. E.', 'SANTOS, A. O.', 'PEREIRA, M. V. L.', 'CAMARGOS, M. A.'],
        journalOrConference: 'REVISTA UNIVERSO CONTÁBIL',
        year: 2018,
        volume: 14,
        pages: '93-114',
        type: 'journal',
    },
    {
        id: 'conf_1',
        title: 'Relações entre Governança Corporativa e os Retornos das Ações de Empresas Brasileiras',
        authors: ['PEREIRA, M. V. L.', 'FONSECA, S. E.', 'MARTUCHELI, C. T.'],
        journalOrConference: 'XLVIII Encontro da ANPAD - EnANPAD 2024',
        year: 2024,
        type: 'conference',
    },
    {
        id: 'conf_2',
        title: 'Sete Dimensões da Governança Corporativa no Brasil: Índices e Disponibilização de Dados',
        authors: ['PEREIRA, M. V. L.', 'MARTUCHELI, C. T.', 'FONSECA, S. E.'],
        journalOrConference: 'II Congresso Interinstitucional de Contabilidade e Controladoria (CINCO 2024)',
        year: 2024,
        type: 'conference',
    },
    {
        id: 'conf_3',
        title: 'O prêmio da lucratividade no mercado acionário brasileiro',
        authors: ['PEREIRA, M. V. L.', 'LELES, M. C. R.', 'FRANKLIN, W. M. F.', 'SOUZA, M. P.'],
        journalOrConference: 'XXVI SEMEAD Seminários em Administração (SemeAd 2023)',
        year: 2023,
        type: 'conference',
    },
    {
        id: 'conf_4',
        title: 'Testing the Application of Support Vector Machine (SVM) to Technical Trading Rules',
        authors: ['FONSECA, ANDRE R.', 'LELES, MICHEL C. R.', 'MOREIRA, MARIANA G.', 'VALE-CARDOSO, ADRIANO S.', 'PEREIRA, MARCOS V. L.', 'SBRUZZI, ELTON F.', 'NASCIMENTO, CAIRO L.'],
        journalOrConference: '2021 IEEE International Systems Conference (SysCon)',
        year: 2021,
        pages: '1',
        type: 'conference'
    },
    {
        id: 'conf_10',
        title: 'Identificação Visual Automática da Granulometria de Fragmentos de Rochas',
        authors: ['Silva, S. S.', 'PEREIRA, M. V. L.', 'ARAUJO, L. C.', 'ALVES NETO, A.', 'SANSAO, J. P. H.'],
        journalOrConference: 'Simpósio Brasileiro de Automação Inteligente (SBAI)',
        year: 2015,
        type: 'conference'
    }
];

const Papers: React.FC = () => {
    return (
        <>
            <h1 className="text-center mb-5 papers-section-header">Publicações</h1>
            {papers.map((paper) => (
                <Card key={paper.id} className="mb-4 paper-card">
                    <Card.Header as="h5" className="paper-title">{paper.title}</Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            <strong>Autores:</strong> {paper.authors.join(', ')}
                        </Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <strong>{paper.type === 'journal' ? 'Periódico:' : 'Conferência:'}</strong> {paper.journalOrConference}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Ano:</strong> {paper.year}
                            </ListGroup.Item>
                            {paper.volume && (
                                <ListGroup.Item>
                                    <strong>Volume:</strong> {paper.volume}
                                </ListGroup.Item>
                            )}
                            {paper.pages && (
                                <ListGroup.Item>
                                    <strong>Páginas:</strong> {paper.pages}
                                </ListGroup.Item>
                            )}
                            {paper.doi && paper.doi !== 'Não informado no texto, mas tipicamente IEEE tem DOI' && (
                                <ListGroup.Item>
                                    <strong>DOI:</strong> <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.doi}</a>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                        {paper.keywords && paper.keywords.length > 0 && (
                            <div className="mt-3">
                                <strong>Palavras-chave:</strong>{' '}
                                {paper.keywords.map((keyword, index) => (
                                    <Badge key={index} bg="secondary" pill className="me-1 fw-normal">
                                        {keyword}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default Papers;
