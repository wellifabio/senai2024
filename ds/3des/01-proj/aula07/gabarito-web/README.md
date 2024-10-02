# Turmas e Atividades

|Tecnologia|Descrição|
|-|-|
|Node.js v20.16.0|Framework para o back-end, servidor de aplicação|
|JS vanilla|Linguagem de programação|
|HTML5|Linguagem de marcação|
|CSS3|Linguagem de estilização|
|Prisma 5.20.0|ORM para Node.js|
|MySQL MariaDB 15.1|Banco de dados|

## Como executar este projeto
- 1 Clone este repositório
- 2 Abrir com o Visual Studio Code e abrir um terminal cmd ou bash
- 3 Instalar as dependências com o comando `npm install`
- 4 Criar um arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente
```js
DATABASE_URL="mysql://root:@localhost:3306/turmas"
```
- 5 Executar as migrations com o comando `npx prisma migrate dev --name init`
- 6 Iniciar o servidor com o comando `npx nodemon`
- 7 Executar o arquivo `./web/index.html` no navegador ou com live server

|Nº|Nome da entrega|Pontos|Pontos obtidos|
|-|-|:-:|:-:|
|1|Diagrama de caso de uso|5|5|
|2|Diagrama entidade relacionamento (DER)|10|10|
|3|Script de criação e população do banco de dados|10|10|
|4|Tela de autenticação de usuários (login)|5|5|
|5|Tela principal do professor|15|15|
|6|Cadastro de turma|5|5|
|7|Listar turmas do professor|5|5|
|8|Exclusão de turma|10|10|
|9|Tela de atividades da turma|10|10|
|10|Listar atividades da turma|5|5|
|11|Cadastro de atividade para a turma|10|10|
|12|Sair do sistema (logout)|5|5|
|13|Lista de requisitos de infraestrutura|5|5|