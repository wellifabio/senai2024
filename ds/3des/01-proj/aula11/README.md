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
cd api
npm i -g prisma
prisma init --datasource-provider mysql
```
- 3.2 Configure o arquivo **.env** com as informações do banco de dados
```env
DATABASE_URL="mysql://root:root@localhost:3306/livrocaixa?schema=public&timezone=utc"
```
- 3.3 Abra o XAMPP e inicie o MySQL
- 3.4 Edite o arquivo **schema.prisma** e adicione o modelo de dados
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario{
  id Int @id @default(autoincrement())
  nome String @db.VarChar(100)
  email String @db.VarChar(255) @unique
  lancamentos Lancamento[]
}

model Lancamento{
  id Int @id @default(autoincrement())
  usuario Int
  descricao String @db.Text
  valor Float
  tipo Tipo @default(entrada)
  data DateTime @db.DateTime @default(now())
  user Usuario @relation(fields: [usuario], references: [id])
}

enum Tipo {
  entrada
  saida
}
```
- 3.5 Crie o arquivo server.js e adicione o código
```js
const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(4000, () => {
    console.log('API Livro Caixa respondendo em http://localhost:4000');
});
```
- 3.6 Execute os comandos para criar o projeto e o banco de dados
```bash
npm init -y
npm i prisma --save-dev
npm i express cors dotenv
npx prisma migrate dev --name init
```
- 3.7 Crie o arquivo **src/routes.js** e adicione o código
```js
const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario');
const Lancamento = require('./controllers/lancamento');

router.get('/', (req, res) => {
    res.send('API Livro Caixa Respondendo');
});

router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.read);

router.post('/lancamentos', Lancamento.create);
router.get('/lancamentos', Lancamento.read);
router.get('/lancamentos/:dia', Lancamento.readDia);
router.put('/lancamentos', Lancamento.update);
router.delete('/lancamentos/:id', Lancamento.del);

module.exports = router;
```