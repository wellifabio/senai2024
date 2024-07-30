# AXIOS - Consumir API
Aaxios é um cliente HTTP baseado em Promises para fazer requisições. Ele é muito utilizado para consumir APIs em aplicações web.

## Instalação
Para instalar o Axios, basta rodar o comando abaixo no terminal:
```bash
npm install axios
```
Ou utilizar diretamente no HTML, acrescentando a tag abaixo no head do documento:
```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Utilização
Para utilizar o Axios, basta importá-lo no arquivo que deseja fazer a requisição e utilizar o método correspondente ao tipo de requisição que deseja fazer. Abaixo, um exemplo de como fazer uma requisição GET:
```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

## Métodos
O Axios possui diversos métodos para fazer requisições, como GET, POST, PUT, DELETE, entre outros. Abaixo, uma lista com os principais métodos:

- GET
- POST
- PUT
- DELETE

## Parâmetros
Os métodos do Axios aceitam diversos parâmetros, como URL, headers, body, entre outros. Abaixo, uma lista com os principais parâmetros:

- URL
- Headers
- Body
- Params
- Data

## [Exemplo neste repositório](./axios/)
- Para testar este exemplo, basta clonar este repositório, abrir e executar o back-end da pasta **/jwt** e o front-end da pasta **/axios**.
- O back-end precisa ser aberto com VsCode e executado com o comando `npx nodemon` porém antes deve ser instaladas as dependências com o comando `npm install` e iniciado o banco de dados com o comando `npx prisma migrate dev --name init`. O SGBD é o MySQL ou MariaDB.
- O front-end precisa ser aberto com VsCode e executado com o comando `npx live-server`, o axios está configurado via HTML.