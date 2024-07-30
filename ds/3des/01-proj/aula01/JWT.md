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
KEY="base64:q3"
```
- No controller de usuário onde o mesmo faz o login a chave deve ser criada, no exemplo abaixo está no arquivo **controller/usuario.js** e o mesmo se autentica com **matrícula** e **pin**, mas pode ser email e senha ou outro.

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
    const { matricula, pin } = req.body;
    const colaborador = await prisma.colaborador.findFirst({
        where: {
            matricula: matricula,
            pin: pin
        }
    });
    if (colaborador) {
        const token = await jwt.sign({ matricula: colaborador.matricula }, process.env.KEY, {
            //expira em uma hora ou 3600 segundos
            expiresIn: 3600
        });
        colaborador.token = token;
        return res.json(colaborador);
    } else {
        return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
    }
};

const read = async (req, res) => {
    if (req.params.matricula !== undefined) {
        const colaborador = await prisma.colaborador.findUnique({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.json(colaborador);
    } else {
        const colaboradores = await prisma.colaborador.findMany();
        return res.json(colaboradores);
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

router.post('/login', Colaborador.login);
router.get('/usuario', Middleware.validaAcesso, Usuario.read);
router.get('/usuario/:matricula', Middleware.validaAcesso, Usuario.read);

router.get('/', (req, res) => { return res.json("API OSs respondendo") });

module.exports = router;
```

O exeplo acima utiliza Prisma como ORM e um Banco de dados MySQL contendo uma tabela de usuarios, mas pode ser adaptado para qualquer banco de dados e ORM com dados como os a seguir:
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
