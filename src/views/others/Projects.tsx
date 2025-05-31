import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import './Others.css';
import PageHeader from "../../components/pageheader/PageHeader";
import Footer from "../../components/footer/Footer";

interface Project {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'completed' | 'planned';
    startDate: string; // YYYY-MM ou YYYY
    endDate?: string; // YYYY-MM ou YYYY
    funding?: string;
    participants: string[];
    link?: string;
    nature?: 'Pesquisa' | 'Extensão'; // Adicionando natureza para diferenciar
}

const projects: Project[] = [
    // Projetos de Pesquisa
    {
        id: 'proj_pesq_1',
        title: 'Plataforma de dados abertos de Índice de Governança Corporativa para empresas listadas na [B]',
        description: 'O projeto pretende criar uma plataforma de dados abertos, por meio da linguagem de programação R, em que informações referentes à governança corporativa das empresas listadas na Brasil, Bolsa, Balcão [B] serão coletadas e transformadas, automaticamente, em um Índice de Governança Corporativa (IGC). Não há, atualmente, no Brasil uma base de dados que disponibilize um IGC das empresas listadas na [B] de forma gratuita. Até então os pesquisadores e interessados precisam coletar e mensurar os dados manualmente nos relatórios financeiros das empresas. Assim, o projeto atenderá tanto os investidores que poderão monitorar as empresas em relação às suas práticas de governança, bem como pesquisadores que terão uma base de dados atualizada e confiável para utilizar em estudos da área. O objetivo geral édisponibilizar um IGC de maneira acessível e gratuita. Os objetivos específicos são: (a) auxiliar o processo decisório dos investidores e (b) facilitar o desenvolvimento de pesquisas na área de Governança Corporativa no Brasil. Com base na literatura existente, o projeto irá criar um IGC. Para a coleta de dados que estão presentes nos relatórios das empresas disponibilizados no site da [B] será criado um script em linguagem de programação R para automatizar esse processo. Trimestralmente, os resultados estarão disponíveis na plataforma, que também manterá dadoshistóricos. Resultados, produtos e impactos esperados O projeto irá fornecer um IGC atualizado de todas as empresas que estão listadas na [B]. O produto é a plataforma que irá gerar os dados propostos e entre os impactos esperados estão: (a) a melhora da mensuração das práticas em governança corporativa que levam ao desempenho sustentável das organizações; (b) o aumento significativo da qualidade e do número de estudos e publicações a respeito da Governança Corporativa no Brasil.',
        status: 'completed', // Embora o período seja 2022-2025, o texto diz "Situação: Concluído"
        startDate: '2022',
        endDate: '2025',
        participants: ['Marcos Vinicius Lopes Pereira - Coordenador', 'Simone Evangelista Fonseca - Integrante', 'Camila Teresa Martucheli - Integrante'],
        funding: 'Fundação de Amparo à Pesquisa do Estado de Minas Gerais - Auxílio financeiro',
        nature: 'Pesquisa'
    },
    {
        id: 'proj_pesq_2',
        title: 'O Prêmio Da Lucratividade No Mercado Acionário Brasileiro',
        description: 'A lucratividade, medida da relação entre lucros por patrimônio, teve seu efeito confirmadona predição do corte transversal dos retornos esperados para o mercado acionário brasileiro. O objetivo do presente trabalho foi o de analisar o efeito do impacto de medidas similares de lucratividade na predição do excesso de retornos. Foram avaliadas variáveis de 507 empresas brasileiras de capital aberto que compreendeu o período de 1999 a 2021. Foi utilizada a metodologia de Fama e MacBeth (1973) para a estimação dos impactos de cada determinante sobre a predição do excesso de retorno esperado. O efeito lucratividade foi verificado no mercado acionário brasileiro não sendo detectada distinção nítida entre as diferentes formas escolhidas para a sua mensuração.',
        status: 'completed',
        startDate: '2021',
        endDate: '2022',
        participants: ['Marcos Vinicius Lopes Pereira - Coordenador', 'Janos Esteves Lisboa de Almeida (Aluno de Graduação)'], // "Alunos envolvidos: Graduação: (1)" e "Número de produções C, T & A: 1"
        funding: 'Universidade Federal de São João Del-Rei - Bolsa',
        nature: 'Pesquisa'
    },
    // Projetos de Extensão
    {
        id: 'proj_ext_1',
        title: 'Liga de Mercado Financeiro (LMF/UFSJ)',
        description: 'A Liga de Mercado Financeiro da UFSJ é uma organização sem fins lucrativos que surge com o objetivo de difundir os conhecimentos relacionados ao mercado financeiro para a comunidade e seus membros a fim de contribuir para o desenvolvimento pessoal e profissional. Tal iniciativa visa o aperfeiçoamento contínuo dos envolvidos por meio de palestras, cursos, grupos de estudo e o estabelecimento de uma profícua rede de contatos.',
        status: 'active', // "Em andamento"
        startDate: '2020', // "2020 - Atual"
        participants: ['Marcos Vinicius Lopes Pereira - Coordenador', 'Michel Carlo Rodrigues Leles - Integrante', '18 Alunos de Graduação'],
        funding: 'Não informado',
        nature: 'Extensão'
    },
    {
        id: 'proj_ext_2',
        title: 'Projeto de Sistema Inteligente',
        description: 'Sistema para a Predição da Turbidez da Água Decantada em um Estação de Tratamento de Água.',
        status: 'completed',
        startDate: '2003',
        endDate: '2003',
        participants: ['Marcos Vinicius Lopes Pereira - Integrante', 'Walmir Matos Caminhas - Coordenador', 'Selma Parreira Capanema - Integrante', '1 Aluno de Graduação', '1 Aluno de Especialização'],
        funding: 'Fundação Universitária Mendes Pimentel - Bolsa',
        nature: 'Extensão'
    },
    {
        id: 'proj_ext_3',
        title: 'Detecção e Diagnóstico de Falhas em Dutos Utilizando Técnicas de Inteligência Computacional',
        description: 'O Objetivo é desenvolver um protótipo de um sistema de detecção e diagnóstico de falhas em dutos empregando técnicas de inteligência computacional, especificamente redes neurais artificiais e sistemas nebulosos. Objetivo Específicos: a implementação de modelos que permitam a simulação de falhas em dutos e geração de bases de dados contendo dados de diversos cenários de falha; a formulação e implementação de modelos de Inteligência Computacional para detecção e diagnóstico de falhas em dutos; estudo comparativo de alguns dos métodos de detecção de falhas. Foi desenvolvido e implementado um protótipo na REGAP para detecção de vazamento de um produto combustível.',
        status: 'completed',
        startDate: '2002',
        endDate: '2002',
        participants: ['Marcos Vinicius Lopes Pereira - Integrante', 'Carlos Alexandre Laurentys de Almeida - Integrante', 'Renato Dourado Maia - Integrante', 'Carlos Henrique Morais Bomfim - Integrante', 'Benjamim Rodrigues de Menezes - Integrante', 'Walmir Matos Caminhas - Coordenador', '3 Alunos de Graduação', '1 Aluno de Doutorado'],
        funding: 'Fundação Christiano Ottoni - Bolsa',
        nature: 'Extensão'
    }
];

const Projects: React.FC = () => {
    const getStatusBadge = (status: Project['status']) => {
        switch (status) {
            case 'active':
                return <Badge bg="success">Em Andamento</Badge>;
            case 'completed':
                return <Badge bg="secondary">Concluído</Badge>;
            case 'planned':
                return <Badge bg="info">Planejado</Badge>;
            default:
                return null;
        }
    };

    const formatDate = (dateString: string) => {
        const [year, month] = dateString.split('-');
        const date = new Date(parseInt(year), month ? parseInt(month) - 1 : 0);
        return date.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: month ? 'long' : undefined
        });
    };

    return (
        <>
            <PageHeader headingText="Projetos" image="/images/header_projetos.jpg" /> {/* Exemplo */}
            <Container className="py-5">
                <h1 className="text-center mb-5">Projetos de Pesquisa e Extensão</h1>

                <Row className="g-4">
                    {projects.map((project) => (
                        <Col key={project.id} xs={12} md={6}>
                            <Card className="h-100 project-card">
                                <Card.Body>
                                    <Card.Title className="project-title">
                                        {project.title}
                                        <div className="mt-2">
                                            {getStatusBadge(project.status)}
                                            {project.nature && (
                                                <Badge bg={project.nature === 'Pesquisa' ? "primary" : "info"} className="ms-2">{project.nature}</Badge>
                                            )}
                                        </div>
                                    </Card.Title>

                                    <Card.Text className="project-description">
                                        {project.description}
                                    </Card.Text>

                                    <div className="project-details">
                                        <p>
                                            <strong>Início:</strong> {formatDate(project.startDate)}
                                        </p>
                                        {project.endDate && (
                                            <p>
                                                <strong>Término:</strong> {formatDate(project.endDate)}
                                            </p>
                                        )}
                                        {project.funding && project.funding !== "Não informado" && (
                                            <p>
                                                <strong>Financiamento:</strong> {project.funding}
                                            </p>
                                        )}
                                        <p>
                                            <strong>Participantes:</strong>
                                        </p>
                                        <ul className="project-participants">
                                            {project.participants.map((participant, index) => (
                                                <li key={index}>{participant}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            className="project-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Saiba mais
                                        </a>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer headingText="Interessado em colaborar?" showEmail={true} /> {/* Exemplo */}
        </>
    );
};

export default Projects;
