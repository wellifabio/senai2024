# Aula01 - Introdução

## O que é BI (Business Inteligence)?
Business Intelligence (BI) ou em português, Inteligência de Negócios, é um termo abrangente destinado a cobrir todas as atividades necessárias para que uma empresa transforme dados brutos 
em conhecimento acionável. Em outras palavras, são esforços da empresa para entender o que sabe e o que não sabe de sua própria existência e operações. O objetivo final é ser capaz de aumentar os 
lucros e aprimorar sua vantagem competitiva.

## Power BI
Ferramenta de análise de Dados

# Prática
- Baixar e instalar o Power BI
- Detalhes básicos da ferramenta, componentes da tela.
- Importar e tratar os dados de um arquivo CSV (./pedidos.csv)

## Conhecimentos

### Evolução dos dados
- Dados
- Informação
- Conhecimento
- Inteligência

### Exemplo
| Dado                        | Informação        | Conhecimento                | Inteligência         |
| --------------------------- | ----------------- | --------------------------- | -------------------- |
| Nome, Nascimento            | Idade             | Fórmula para calcular idade | Classificação        |
| Ana Maria Silva, 01/01/1980 | 43                | Hoje - Nascimento           | Pessoa de meia idade |
| **Dados Brutos**            | **Tomar decisão** | **Fórmula e=mc2**           | **Chat GPT**         |

## Tipos de dados
- Estruturados
- Semi Estruturados
- Não Estruturados

#### Exemplo de tipos de dados
##### Estruturados
- SQL, Linguagem de Banco de dados (SGBD)
```sql
CREATE TABLE(
    id int primary key,
    nome varchar(100),
    nascimento date
);
```
- CSV, Linguagem de estruturação universal de dados sem (SGBD)
```csv
id;nome;nascimento
1;Ana Maria; 2000-01-01
2;Maria silva; 2002-03-18
3;Marcos Paulo; 2003-04-25
4;Mariana Lima; 2001-01-13
```
##### Semi Estruturados
```xml
<possoas>
    <pessoa1>
        <id>1</id>
        <nome>Ana Maria</nome>
        <nascimento>2000-01-01</nascimento>
    </pessoa1>
    <pessoa2>
        <id>2</id>
        <nome>Maria silva</nome>
        <nascimento>2002-03-18</nascimento>
    </pessoa2>
    <pessoa3>
        <id>3</id>
        <nome>Marcos Paulo</nome>
        <nascimento>2003-04-25</nascimento>
    </pessoa3>
    <pessoa4>
        <id>4</id>
        <nome>Mariana Lima</nome>
        <nascimento>2001-01-13</nascimento>
    </pessoa4>
</pessoas>
```
```json
[
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
        "nascimento": "2002-03-18"
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25"
    },
    {   
        "id": 4,
        "nome": "Mariana Lima",
        "nascimento": "2001-01-13"
    }
]
```
#### Por que JSON é Semi estruturado?
Porque permite modificações nos campos
```json
[
    {   
        "id": 1,
        "nome": "Ana Maria",
        "nascimento": "2000-01-01"
    },
    {   
        "id": 2,
        "nome": "Maria silva",
    },
    {   
        "id": 3,
        "nome": "Marcos Paulo",
        "nascimento": "2003-04-25",
        "telefone": "19 44577-7897"
    },
        {   
        "id": 4,
        "nome": "Mariana Lima",
        "pedidos":[
            {
                "data":"2023-01-02",
                "valor":5000.00
            },
            {
                "data":"2023-01-20",
                "valor":505.50
            },
        ]
    }
]
```
#### Não estruturados
- PDF
- DOCX (Word)
- XLSX (Excel)
- TXT
- Imagens

## Data Warehouse

Um Data Warehouse (ou armazém de dados, em português) é um sistema de armazenamento de dados projetado para coletar, armazenar, organizar e consolidar grandes volumes de dados de diferentes fontes, a fim de facilitar a análise e a geração de relatórios para tomada de decisões. É uma parte fundamental da infraestrutura de Business Intelligence (BI) de uma organização.

### Aqui estão algumas características e conceitos-chave associados a um Data Warehouse:

- **Consolidação de Dados**: Um Data Warehouse reúne dados de várias fontes diferentes, como bancos de dados transacionais, sistemas legados, planilhas, fontes externas e muito mais. Esses dados são integrados e consolidados em um único repositório.
- **Armazenamento Histórico**: Os dados em um Data Warehouse são armazenados historicamente, o que significa que versões anteriores dos dados são mantidas. Isso permite a análise de tendências e o acompanhamento de mudanças ao longo do tempo.
- **Modelagem Dimensional**: Um Data Warehouse é frequentemente projetado usando uma abordagem de modelagem dimensional, que envolve a criação de tabelas de fatos e tabelas de dimensões. As tabelas de fatos contêm métricas e medidas de negócios, enquanto as tabelas de dimensões contêm informações que descrevem os dados, como datas, produtos, clientes, etc.
- **Desempenho Otimizado**: Os Data Warehouses são otimizados para consultas analíticas e relatórios de alto desempenho. Isso é alcançado por meio de índices apropriados, agregações de dados e outras técnicas de otimização.
- **Apoio à Tomada de Decisões**: Um dos principais objetivos de um Data Warehouse é fornecer dados de alta qualidade e históricos para apoiar a tomada de decisões informadas dentro de uma organização. Isso inclui a geração de relatórios, análises ad hoc e painéis de controle.
- **Extração, Transformação e Carga (ETL)**: O processo ETL é usado para extrair dados de fontes variadas, transformá-los para atender aos requisitos de modelagem e qualidade de dados e carregá-los no Data Warehouse. É uma etapa crítica para manter a integridade e a consistência dos dados.
- **Segurança e Controle de Acesso**: Os Data Warehouses geralmente possuem recursos avançados de segurança para garantir que apenas usuários autorizados tenham acesso aos dados e que os dados confidenciais sejam protegidos.
- **Escalabilidade**: À medida que as necessidades de armazenamento de dados crescem, um Data Warehouse pode ser dimensionado horizontal ou verticalmente para lidar com volumes maiores de dados.
- **Integração com Ferramentas de BI**: Um Data Warehouse geralmente é usado em conjunto com ferramentas de Business Intelligence, como o Power BI, Tableau, ou outras, para criar relatórios interativos e painéis de controle.

# Plano de Curso
## Conhecimentos
1.1. Tipos
	1.1.1. Desktop (Esta é a principal ferramenta de autoria para criar relatórios e painéis do Power BI. É um aplicativo Windows que permite importar dados, construir modelos de dados, criar visualizações e projetar relatórios interativos.)
	1.1.2. Mobile (O Power BI oferece aplicativos móveis para dispositivos iOS e Android, permitindo que os usuários acessem relatórios e painéis em seus dispositivos móveis, facilitando a conexão com insights de dados enquanto estão em trânsito.)
	1.1.3. Web: Serviçe (Relatórios e painéis do Power BI criados no Power BI Desktop podem ser publicados no Power BI Service, que é uma plataforma baseada na nuvem. Isso possibilita a colaboração e o compartilhamento de relatórios com colegas e clientes.)
1.2. Definição
	1.2.1. Análise de dados
	1.2.2. Self Service BI
	1.2.3. ETL (Extract, Transform e Load)
	1.2.4. Data Warehouse
	1.2.5. Big Data
	1.2.6. Dados x Informação
