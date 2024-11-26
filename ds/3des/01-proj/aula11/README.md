# Aula11 - Situação Problema: Livro Caixa
## Treinamento para o SAEP Prático

## Contextualização
Todos os tipos de negócio que trabalham com fluxo de caixa necessitam de um sistema para registras as movimentações diárias. O livro caixa é um dos métodos mais antigos e ainda muito utilizado para esse fim. O livro caixa é um registro de todas as movimentações financeiras de uma empresa, seja ela uma microempresa, empresa de pequeno porte ou uma grande empresa. O livro caixa é um documento obrigatório para a contabilidade de uma empresa, pois é nele que são registradas todas as entradas e saídas de dinheiro.

## Desafio
Desenvolver um sistema que simule um livro caixa, onde o usuário poderá registrar as movimentações financeiras diárias de uma empresa. O sistema deverá permitir o registro de entradas e saídas de dinheiro, bem como a consulta do saldo atual da empresa.<br>As regras de negócio são:
![Lousa](./lousa.jpg)

## Entregas
|Entrega|Descrição|
|-|-|
|DER Conceitual|Diagrama de Entidade Relacionamento do sistema|
|UML - DCU|Diagrama de Caso de Uso do sistema|
|Cadastro de usuários|Tela de cadastro de usuários do sistema|
|Cadastro de Lançamentos|Tela de cadastro de lançamentos financeiros|
|Tela principal|Tela principal do sistema com os lançamentos do dia, um filtro para escolher a data e as informações do saldo|

## Identidade visual
- Fonte: Courier New
- Paleta de cores:

|Código Hexadecimal|Cor|
|-|-|
|#000000|Preto|
|#eeeeee|Cinza Claro|
|#FFFFFF|Branco|
|#FF0000|Vermelho|
|#0000FF|Azul|

## Dicas de como executar o projeto:
- 1 Criar uma pasta e suas subpastas conforme a estrutura do projeto
```bash
./livrocaixa
./livrocaixa/api
./livrocaixa/web
./livrocaixa/docs
```
- 2 Criar os diagramas de entidade relacionamento e de caso de uso
![DER](./livrocaixa/docs/der.png)
![DCU](./livrocaixa/docs/uml-dcu.png)
- 3 Inicar o Back-end NodeJS com Prisma
    - 1 Abra a pasta **./livrocaixa** com VsCode e abra um terminal **cmd** ou **bash** CTRL + ", acesse a pasta **api**, instale o prisma globalmente, inicie o projeto e a biblioteca prisma para MySQL.
```bash
npm i -g prisma
cd api
npm init -y
prisma init --datasource-provider mysql
```
    - 2 Configure o arquivo **.env** com as informações do banco de dados
```env
DATABASE_URL="mysql://root:root@localhost:3306/livrocaixa"
```
