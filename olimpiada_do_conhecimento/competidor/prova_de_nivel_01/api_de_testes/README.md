# Sistema Xamô Xegô

## Informações

A API de testes utiliza a biblioteca [Json Server](https://www.npmjs.com/package/json-server), para utiliza-lá basta acessar o link e seguir as instruções.

## URL de acesso

### http://localhost:3000

## Endpoints

### Usuários
### /users 

| **Verbo** | **Parâmetros**              | **Funcionalidade**                  |
|-----------|-----------------------------|-------------------------------------|
| GET       |                             | Lista todos os usuários cadastrados |
| GET       | /:id                            | Retorna os dados cadastrais de um usuário específico|
| POST       | json body                            | Adiciona um novo usuário |
| DELETE       | /:id                            | Remove um usuário através do ID |
| PATCH       | /:id                             | Altera os dados cadastrais de um determinado usuário baseado no ID |


### Viagens
### /travels


| **Verbo** | **Parâmetros**              | **Funcionalidade**                  |
|-----------|-----------------------------|-------------------------------------|
| GET       |                             | Lista todas as viagens cadastradas |
| GET       | /travels?id_user=ID           | Retorna as viagens de um usuário específico |
| POST       | json body                            | Adiciona uma nova viagem |
| DELETE       | /:id                            | Remove uma viagem através do ID |
| PATCH       | /:id                             | Altera os dados cadastrais de uma viagem baseado no ID |


## Dados JSON

### A estrutura das informações utilizando JSON pode ser visualizada no arquivo db.json