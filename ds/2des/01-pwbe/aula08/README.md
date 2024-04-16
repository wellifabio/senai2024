# Aula08 - VPS01
Verificação Prática Somativa

- API - Criação de API (Plataforma de Interface de Aplicação)
- CRUD - Funcionalidades de Cadastro, consulta, alteração e exclusão
- MVC - Padrão de projeto (Modelo, Visão e Controle)
- Testes - Testes unitários da API utilizando software Insomnia

# Situação desafiadora
|Contextualização|
|-|
|Projeto: Alugueis<br><br>**Descrição**:<br>Sra. Simone Oliveira é dona de uma empresa de aluguel de veículos na cidade de Jaguariúna, necessita de um sistema para **registro e agendamento de aluguéis** dos seus veículos, o banco de dados relacional já está desenvolvido. Você foi incumbido/a de desenvolver a **API REST** back-end com as funcionalidades básicas CRUD|

- Script de criação e população do banco de dados
```sql
DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE Cliente (
    cpf VARCHAR(14) NOT NULL primary key,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE Telefone (
    cpf VARCHAR(14),
    numero VARCHAR(15) NOT NULL UNIQUE,
    foreign key (cpf) references Cliente(cpf)
);

CREATE TABLE Veiculo (
    placa VARCHAR(8) NOT NULL primary key,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    tipo ENUM('standart', 'utilitario', 'esportivo') NOT NULL,
    diaria DECIMAL(10,2) NOT NULL
);

CREATE TABLE Aluguel (
    id INT NOT NULL primary key AUTO_INCREMENT,
    placa VARCHAR(8) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    reserva DATE NOT NULL,
    retirada DATE DEFAULT NULL,
    devolucao DATE DEFAULT NULL,
    subtotal DECIMAL(10,2) DEFAULT 0.00 NOT NULL,
    foreign key (cpf) references Cliente(cpf),
    foreign key (placa) references Veiculo(placa)
);

insert into Cliente Values
('111.111.111-11','Osvaldo Oliveira'),
('222.222.222-22','Jaqueline Teixeira'),
('333.333.333-33','Keli Matos'),
('444.444.444-44','Ursula Souza'),
('555.555.555-55','Evandro Silva');

insert into Telefone values
('111.111.111-11','19-72077-0521'),
('111.111.111-11','19-06078-6843'),
('222.222.222-22','19-23003-4864'),
('333.333.333-33','19-06486-6449'),
('333.333.333-33','19-53266-7923'),
('444.444.444-44','19-64378-2404'),
('555.555.555-55','19-53315-2734');

insert into Veiculo values
('DEA-7981','Uno','Fiat','standart',100),
('CBC-4945','Fiorino','Fiat','utilitario',120),
('BEE-7735','Saveiro','VW','standart',100),
('CBA-4403','Sandeiro','Renaut','standart',100),
('BBC-8504','Palio','Fiat','standart',100),
('BEB-5885','Gol','VW','standart',100),
('EDB-2475','Ranger','Ford','esportivo',200),
('CBC-4901','Fiorino','Fiat','utilitario',120);

insert into Aluguel values 
(01,'DEA-7981','111.111.111-11',DATE_SUB(CURDATE(),INTERVAL 45 DAY),DATE_SUB(CURDATE(),INTERVAL 45 DAY),DATE_SUB(CURDATE(),INTERVAL 40 DAY),0), 
(02,'CBC-4945','222.222.222-22',DATE_SUB(CURDATE(),INTERVAL 45 DAY),DATE_SUB(CURDATE(),INTERVAL 44 DAY),DATE_SUB(CURDATE(),INTERVAL 34 DAY),0), 
(03,'BEE-7735','333.333.333-33',DATE_SUB(CURDATE(),INTERVAL 43 DAY),DATE_SUB(CURDATE(),INTERVAL 42 DAY),DATE_SUB(CURDATE(),INTERVAL 32 DAY),0), 
(04,'CBA-4403','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 40 DAY),DATE_SUB(CURDATE(),INTERVAL 39 DAY),DATE_SUB(CURDATE(),INTERVAL 29 DAY),0), 
(05,'BBC-8504','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 25 DAY),0), 
(06,'BEB-5885','111.111.111-11',DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 20 DAY),0), 
(07,'EDB-2475','111.111.111-11',DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 35 DAY),DATE_SUB(CURDATE(),INTERVAL 30 DAY),0), 
(08,'CBC-4901','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 30 DAY),DATE_SUB(CURDATE(),INTERVAL 30 DAY),DATE_SUB(CURDATE(),INTERVAL 20 DAY),0), 
(09,'EDB-2475','111.111.111-11',DATE_SUB(CURDATE(),INTERVAL 28 DAY),DATE_SUB(CURDATE(),INTERVAL 27 DAY),DATE_SUB(CURDATE(),INTERVAL 15 DAY),0), 
(10,'DEA-7981','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 26 DAY),DATE_SUB(CURDATE(),INTERVAL 26 DAY),DATE_SUB(CURDATE(),INTERVAL 10 DAY),0), 
(11,'CBA-4403','555.555.555-55',DATE_SUB(CURDATE(),INTERVAL 26 DAY),DATE_SUB(CURDATE(),INTERVAL 26 DAY),DATE_SUB(CURDATE(),INTERVAL 13 DAY),0), 
(12,'BBC-8504','333.333.333-33',DATE_SUB(CURDATE(),INTERVAL 25 DAY),DATE_SUB(CURDATE(),INTERVAL 24 DAY),DATE_SUB(CURDATE(),INTERVAL 20 DAY),0), 
(13,'BEE-7735','222.222.222-22',DATE_SUB(CURDATE(),INTERVAL 23 DAY),DATE_SUB(CURDATE(),INTERVAL 22 DAY),DATE_SUB(CURDATE(),INTERVAL 11 DAY),0), 
(14,'BEB-5885','111.111.111-11',DATE_SUB(CURDATE(),INTERVAL 20 DAY),DATE_SUB(CURDATE(),INTERVAL 20 DAY),DATE_SUB(CURDATE(),INTERVAL 5 DAY),0), 
(15,'CBA-4403','555.555.555-55',DATE_SUB(CURDATE(),INTERVAL 19 DAY),DATE_SUB(CURDATE(),INTERVAL 19 DAY),DATE_SUB(CURDATE(),INTERVAL 3 DAY),0), 
(16,'BEE-7735','333.333.333-33',DATE_SUB(CURDATE(),INTERVAL 17 DAY),DATE_SUB(CURDATE(),INTERVAL 16 DAY),DATE_SUB(CURDATE(),INTERVAL 1 DAY),0), 
(17,'BBC-8504','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 15 DAY),DATE_SUB(CURDATE(),INTERVAL 15 DAY),DATE_SUB(CURDATE(),INTERVAL 5 DAY),0), 
(18,'CBC-4945','444.444.444-44',DATE_SUB(CURDATE(),INTERVAL 15 DAY),DATE_SUB(CURDATE(),INTERVAL 15 DAY),null,0), 
(19,'DEA-7981','555.555.555-55',DATE_SUB(CURDATE(),INTERVAL 14 DAY),DATE_SUB(CURDATE(),INTERVAL 14 DAY),null,0), 
(20,'EDB-2475','555.555.555-55',DATE_SUB(CURDATE(),INTERVAL 10 DAY),DATE_SUB(CURDATE(),INTERVAL 10 DAY),null,0), 
(21,'CBA-4403','222.222.222-22',DATE_SUB(CURDATE(),INTERVAL 2 DAY),'2024-03-28',null,0), 
(22,'BEB-5885','222.222.222-22',DATE_SUB(CURDATE(),INTERVAL 2 DAY),'2024-03-23',null,0), 
(23,'BBC-8504','222.222.222-22',DATE_SUB(CURDATE(),INTERVAL 1 DAY),null,null,0), 
(24,'DEA-7981','111.111.111-11',CURDATE(),null,null,0), 
(25,'CBC-4945','222.222.222-22',CURDATE(),null,null,0);

-- Atualizando a tabela Aluguel com o subtotal
update Aluguel set subtotal = datediff(devolucao, retirada) * (select diaria from Veiculo where placa = Aluguel.placa);

-- Crie um relatorio semelhante ao anterior porém acrescido de uma coluna status que informa se o aluguel está concluído, em andamento ou reservado e salve com o nome vw_todos_os_alugueis_com_status
create view vw_todos_os_alugueis_com_status as
select a.*, c.nome_cliente, v.modelo, v.marca, 
case
    when devolucao is null and retirada is null then 0
    when devolucao is null then datediff(curdate(), retirada)
    else datediff(devolucao, retirada) 
end as dias,
if(retirada is null,0,if(devolucao is null,datediff(curdate(), retirada),datediff(devolucao, retirada))) * (select diaria from Veiculo where placa = a.placa) as sub_calc,
case
    when devolucao is not null then 'Concluído'
    when devolucao is null and retirada is not null then 'Em andamento'
    else 'Reservado'
end as status   
from Aluguel a
left join Cliente c on a.cpf = c.cpf
left join Veiculo v on a.placa = v.placa;

-- Crie um relatório que mostre somente os aluguéis reservados e salve com o nome vw_alugueis_reservados
create view vw_alugueis_reservados as
select * from vw_todos_os_alugueis_com_status where status = 'Reservado';

-- Crie um relatório que mostre somente os aluguéis em andamento e salve com o nome vw_alugueis_em_andamento
create view vw_alugueis_em_andamento as
select * from vw_todos_os_alugueis_com_status where status = 'Em andamento';

-- Ver todos os dados
select * from Cliente;
select * from Telefone;
select * from Veiculo;
select * from Aluguel;
select * from vw_todos_os_alugueis_com_status;
select * from vw_alugueis_reservados;
select * from vw_alugueis_em_andamento;
```

|Desafio|
|-|
|A partir do script de criação e população com dados de testes do banco de dados, Desenvolva as seguintes **funcionalidades**|
|CRUD de Clientes: Implementar operações CRUD (Create, Read, Update, Delete) para os Clientes|
|CRUD de Telefones: Implementar operações CRUD (Create, Read, Update, Delete) para os telefones|
|OBS: de preferência criar um CRUD para clientes com telefones juntos|
|CRUD de Veiculos: Implementar operações CRUD (Create, Read, Update, Delete) para os veiculos|
|CRUD de Aluguéis: Implementar operações CRUD (Create, Read, Update, Delete) para os aluguéis, neste crud, nas funcionalidades READ, acrescente uma rota que mostre somente os veículos reservados, outra que mostre os aluguados e uma que mostre o relatório completo de todos os aluguéis, utilizando as **views** do script SQL|

|Entregas|
|-|
|Repositório do Github contendo:|
|Script de criação e população do BD com dados de teste chamado script.sql em uma pasta "testes"|
|API back-end com os CRUDs no padrão MVC em uma pasta "api"|
|Arquivo insomnia.json com todas as rotas de teste na pasta "testes"|
|Data: 10/04/2024, **[FORMS](https://docs.google.com/forms/d/e/1FAIpQLSewyS9veRSEDEhbXV4-4HaQCXaXM-zncOB6yJ37X0UFWvibEA/viewform?usp=sf_link)**|


|Criticidade|Competências Técnicas|Critérios|
|-|-|-|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Utilizar interações com base de dados para desenvolvimento de sistemas web|Criou arquivo de conexão com os dados efetivos para conexão local com o BD em MySQL, importou a dependência mysql|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|8. Estabelecer envio de notificações entre cliente e servidor por meio de aplicação web|Desenvolveu os arquivos controllers e routes utilizando as dependências express e cors, respondendo as requisições HTTP|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|9. Desenvolver API (web services) para integração de dados entre plataformas|O back-end está respondendo com dados no formato JSON na rota get, post, put e delete|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|10. Desenvolver sistemas web de acordo com as regras de negócio estabelecidas|Implementou as funcionalidades CRUD|
|![Desejavel](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|11. Publicar a aplicação web|O repositório github está publico e com o projeto completo.|	
|![Desejavel](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|4. Demonstrar raciocínio lógico na organização das informações (14)|Desenvolveu tudo que foi solicitado conforme modelo|
|![Desejavel](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|5. Demonstrar visão sistêmica (16)|Desenvolveu API REST com evidencias no arquivo .json do insomnia|
|![Desejavel](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|6. Seguir método de trabalho (15)|Aplicou a estrutura MVC no projeto|

**[Solução](https://github.com/wellifabio/alugueiscomposite)**