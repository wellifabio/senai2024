# Aula06
- API - Criação de API (Plataforma de Interface de Aplicação)
- CRUD - Funcionalidades de Cadastro, consulta, alteração e exclusão
- MVC - Padrão de projeto (Modelo, Visão e Controle)
- Testes - Testes unitários da API utilizando software Insomnia

|Tecnologias|Descrição|
|-|-|
|<img src="https://w7.pngwing.com/pngs/717/111/png-transparent-mysql-round-logo-tech-companies-thumbnail.png" style="width:50px;">[MySQL](https://dev.mysql.com/doc/refman/8.0/en/join.html)|SGBD - Sistema Gerenciador de Banco de Dados, instalados através do [XAMPP](https://www.apachefriends.org/pt_br/index.html)|
|<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" style="width:50px;">[NodeJS](https://nodejs.org/en)|Framework de programação back-end para criação de APIs|
|<img src="https://logowik.com/content/uploads/images/visual-studio-code7642.jpg" style="width:50px;">[VsCode](https://code.visualstudio.com/)|IDE - Ambiente integrado de desenvolvimento|
|<img src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" style="width:50px;"> [Insomnia](https://insomnia.rest/)|Ferramenta de testes para APIs|

# Situação desafiadora
|Contextualização|
|-|
|Projeto: Sistema de Gerenciamento de Tarefas<br><br>Descrição:<br>O sistema de gerenciamento de tarefas permite aos usuários criar, visualizar, atualizar e excluir tarefas. Cada tarefa pode ter uma descrição, uma data de vencimento e um status (como "A fazer", "Em andamento" ou "Concluído"). Além disso, as tarefas podem ser atribuídas a usuários específicos.|

### MER - Dicionário de dados:
#### Usuários: Esta tabela armazenará as informações dos usuários do sistema, como nome, e-mail e senha de acesso.
#### Campos:
- ID (chave primária)
- Nome
- E-mail
- Senha (criptografada)

#### Tarefas: Esta tabela armazenará as informações das tarefas, incluindo a quem a tarefa está atribuída.
#### Campos:
- ID (chave primária)
- Descrição
- Data de Vencimento
- Status
- ID do Usuário (chave estrangeira referenciando a tabela de Usuários para identificar a quem a tarefa está atribuída)

|Desafio|
|-|
|Desenvolva as seguintes **funcionalidades**|
|Autenticação de Usuários: Permitir que os usuários se registrem, façam login e saiam do sistema|
|CRUD de Tarefas: Implementar operações CRUD (Create, Read, Update, Delete) para as tarefas, permitindo que os usuários criem, visualizem, atualizem e excluam suas próprias tarefas.|
|Atribuição de Tarefas: Permitir que os usuários atribuam tarefas a si mesmos ou a outros usuários do sistema.|
|Filtragem e Ordenação: Implementar funcionalidades para filtrar e ordenar tarefas com base em diferentes critérios, como data de vencimento ou status.|

|Entregas|
|-|
|Repositório do Github contendo:|
|DER Conceitual e Lógico em uma pasta "docs"|
|Script de criação do banco script.sql em uma pasta "bd"|
|Script de população do BD com dados de teste chamado testes.sql em uma pasta "testes"|
|API back-end com os CRUDs no padrão MVC em uma pasta "api"|
|Arquivo insomnha.json com todas as rotas de teste na pasta "testes"|
|Data: 27/03/2024, Grupos de no máximo 3 integrantes [FORMS](https://docs.google.com/forms/d/e/1FAIpQLSdSYTgmAhnCsbJWS5hWTHdLNjjafd-mmhee2AEYSLhBO9iOqA/viewform?usp=sf_link)|

- [Solução](https://github.com/wellifabio/tarefas)