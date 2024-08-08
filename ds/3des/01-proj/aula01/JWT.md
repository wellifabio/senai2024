# JWT - JSON Web Token
Tutorial Autenticação JWT em API REST

## O que é JWT?
- JWT é um padrão aberto (RFC 7519) que define uma maneira compacta e autocontida para transmitir informações entre as partes como um objeto JSON.
- Essas informações podem ser verificadas e confiáveis porque são assinadas digitalmente.
- JWTs podem ser assinados usando um segredo (com o algoritmo HMAC) ou um par de chaves pública/privada usando RSA ou ECDSA.

## Estrutura JWT
- Um JWT é composto por três partes: **Header**, **Payload** e **Signature**.
- O **Header** consiste em duas partes: o tipo de token, que é JWT, e o algoritmo de assinatura, como HMAC SHA256 ou RSA.
- O **Payload** contém as **claims**. As **claims** são declarações sobre uma entidade (normalmente, o usuário) e metadados adicionais.
- O **Signature** é usado para verificar se a mensagem não foi alterada ao longo do caminho entre o emissor e o receptor.

## Como funciona?
- O cliente faz uma solicitação para o servidor com as credenciais.
- O servidor verifica as credenciais e retorna um token JWT, com ou sem um prazo para de expiração.
- O cliente armazena o token e o envia em todas as solicitações.
- O servidor verifica se o token é válido e, em seguida, processa a solicitação.

## Middleware JWT
- Middleware é uma função que é executada antes de qualquer outra função.
- O Middleware JWT é responsável por verificar se o token é válido.
- Vamos criar um middware para verificar se o token é válido.
    - na pasta src do seu projeto, crie um arquivo chamado middleware/middleware.js
```js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if (err != null) res.status(404).json(err).end();
        else {
            next();
        }
    })
}

module.exports = {
    validaAcesso
}
```
- No arquivo **.env** adicionar a chave

```js
KEY="base64:q3
```
- No controller de usuário onde o mesmo faz o login a chave deve ser criada, no exemplo abaixo está no arquivo **controller/usuario.js** e o mesmo se autentica com **matrícula** e **pin**, mas pode ser email e senha ou outro.

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
    const { matricula, pin } = req.body;
    const usuario = await prisma.usuario.findFirst({
        where: {
            matricula: matricula,
            pin: pin
        }
    });
    if (usuario) {
        const token = await jwt.sign({ matricula: usuario.matricula }, process.env.KEY, {
            //expira em uma hora ou 3600 segundos
            expiresIn: 3600
        });
        usuario.token = token;
        return res.json(usuario);
    } else {
        return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
    }
};

const read = async (req, res) => {
    if (req.params.matricula !== undefined) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.json(usuario);
    } else {
        const usuarios = await prisma.usuario.findMany();
        return res.json(usuarios);
    }
};

module.exports = {
    login,
    read
};
```
- No arquivo **routes.js** adicionar o middleware criado

```js
const express = require('express');

const router = express.Router();

const Middleware = require('./middleware/middleware');
const Usuario = require('./controllers/usuario');

router.post('/login', Usuario.login);
router.get('/usuario', Middleware.validaAcesso, Usuario.read);
router.get('/usuario/:matricula', Middleware.validaAcesso, Usuario.read);

router.get('/', (req, res) => { return res.json("API OSs respondendo") });

module.exports = router;
```
**OBS:** O exeplo acima utiliza Prisma como ORM e um Banco de dados MySQL contendo uma tabela de usuarios, mas pode ser adaptado para qualquer banco de dados.

### Tutorial iniciar projeto com prisma e semear com dados de teste seed
- A criar uma pasa para o projeto, acessar com terminal e rodar o comando
```bash
npm i -g prisma
```
- B criar um projeto prisma para Mysql rodar o comando
```bash
prisma init --datasource-provider mysql
```
- C criar um arquivo **.env** na raiz do projeto com as credenciais do banco de dados
```js
DATABASE_URL="mysql://root@localhost:3306/usuarios?schema=public&timezone=UTC"
```
- D editar arquivo **prisma/schema.prisma** na raiz do projeto com o seguinte conteúdo
```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario {
  matricula String @db.VarChar(8) @id
  nome String @db.VarChar(255)
  cargo String @db.VarChar(50)
  setor String @db.VarChar(50)
  pin String @db.VarChar(8)
}
```
 - E crie o arquivo para **prisma/usuarios.json** semear com dados como os a seguir:

```json
[
	{
		"matricula": "201",
		"nome": "Ursula Filho",
		"cargo": "Aux. Administrativo",
		"setor": "Administração",
		"pin": "1234"
	},
	{
		"matricula": "202",
		"nome": "Naiara Bispo Bispo",
		"cargo": "Gerente Geral",
		"setor": "Administração",
		"pin": "4321"
	},
	{
		"matricula": "203",
		"nome": "Douglas Alves Mattos",
		"cargo": "Pedreiro",
		"setor": "Manutenção",
		"pin": "1234"
	}
]
```
- F criar um arquivo **prisma/seed.js** na raiz do projeto com o seguinte conteúdo
```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usuarios = require("./usuarios.json");

async function main() {
    for (const usuario of usuarios) {
        await prisma.usuario.create({
            data: usuario
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });
```
- G instalar as extenções básicas para o projeto
```bash
npm init -y
npm i express cors dotenv prisma @prisma/client jsonwebtoken
```
- H altere o arquivo **package.json** para adicionar o script de seed colando o código a seguir antes da chave "dependencies"
```json
  "prisma": {
    "seed": "node prisma/seed.js"
  },
```
- I rodar o comando para criar a tabela no banco de dados e já semeando os dados
```bash
npx prisma migrate dev --name init
```
- J finalmente criar o arquivo **server.js** na raiz do projeto com o seguinte conteúdo
```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const rotes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rotes);

app.listen(PORT, () => { console.log("API de OSs respondendo na porta " + PORT) });
```
- K Executar o projeto, não se esqueça dos arquivos **src/routes.js**, **src/middleware/middleware.js** e **src/controllers/usuario.js** cujos códigos estão acima.
```bash
npx nodemon
```
- L Testar a API com o Postman ou Insomnia, primeiro fazer login com matricula e pin, depois acessar a rota /usuario ou /usuario/:matricula
    - Ao fazer login será retornado um token JWT que deve ser passado no header da requisição com a chave **Authorization** e o valor **Bearer token**
    - Neste repositório temos um front-end que consome e testa esta API na pasta **/usuarios/front**