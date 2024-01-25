# Aula01 - Primeiro Back-End

## Ambiente
- NodeJS
- VsCode
- Insomnia ou Postman

### Instalação
Pesquise no google, baixe e instale as versões LTS, para o seu Sistema Operacional.

## Iniciando um novo projeto
- 1 Crie uma pasta
- 2 Abra com VsCode
- 3 Abra um terminal CMD e digite os comando a seguir
```bash
    npm init
```
Pressione enter várias vezes para deixar com configurações padrão
- 4 Instale as dependências iniciais
```bash
    npm i express cors mysql
```
- 5 Crie o arquivo server.js contendo o código a seguir

```js
const express = require("express");

const teste = (req, res)=>{
    res.send("Back-end respondendo ");
}

const app = express();

app.get("/",teste);

app.listen(3000,()=>{
    console.log("Back-end respondendo na porta 3000");
});
```
- 6 Para testar no terminal digite:
```bash
node server.js
```
- 7 Teste também via navegador no endereço: http://localhost:3000

# Exemplo - Full-Stack
Neste repositório está um projeto chamado "lojinha" com todas as 3 stacks (Banco de dados, Back-end e Front-End) somente com conceitos básicos.