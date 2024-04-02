# Aula07 - VPF01
Verificação Prática Formativa

- API - Criação de API (Plataforma de Interface de Aplicação)
- CRUD - Funcionalidades de Cadastro, consulta, alteração e exclusão
- MVC - Padrão de projeto (Modelo, Visão e Controle)
- Testes - Testes unitários da API utilizando software Insomnia

# Situação desafiadora
|Contextualização|
|-|
|Projeto: Manutenções<br><br>Descrição:<br>Sra. Simone Oliveira é dona de uma empresa de aluguel de veículos na cidade de Jaguariúna, o sistema de aluguel de veículos está em desenvolvimento, no entanto foi definido que necessita de mais urgência no sistema de **registro de manutenções** nos veículos, já que o banco de dados relacional está em operação. Você foi incumbido/a de desenvolver um sistema que organize os dados/registros das **manutenções**|

- Script de criação e população do banco de dados
```sql
DROP DATABASE IF EXISTS manutencoes;
CREATE DATABASE manutencoes CHARSET=UTF8 COLLATE utf8_general_ci;
USE manutencoes;

-- DDL Criação da estrutura do Banco de dados
CREATE TABLE funcionario(
    matricula int not null,
    nome varchar(50) not null,
    primary key (matricula)
);

CREATE TABLE telefone(
    matricula int not null,
    numero varchar(15) not null,
    foreign key (matricula) references funcionario(matricula)
);

CREATE TABLE veiculo(
    placa varchar(8) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    ano int not null
);

CREATE TABLE manutencao(
    id int not null primary key auto_increment,
    placa varchar(8) not null,
    matricula int not null,
    inicio date not null,
    fim date,
    descricao text not null,
    foreign key (placa) references veiculo(placa) on update cascade,
    foreign key (matricula) references funcionario(matricula) on update cascade
);

-- DML população com dados de testes
insert into funcionario(matricula, nome) values
(48482,'Osvaldo Oliveira'),
(48542,'Jaqueline Teixeira'),
(48522,'Keli Matos'),
(48502,'Ursula Souza'),
(48562,'Evandro Silva');

insert into telefone(matricula, numero) values
(48482,'19-72077-0521'),
(48482,'19-06078-6843'),
(48542,'19-23003-4864'),
(48522,'19-06486-6449'),
(48522,'19-53266-7923'),
(48502,'19-64378-2404'),
(48562,'19-53315-2734');

insert into veiculo(placa, modelo, marca, ano)values
('DEA-7981','Uno','Fiat',2005),
('CBC-4945','Fiorino','Fiat',2007),
('BEE-7735','Saveiro','VW',2015),
('CBA-4403','Sandeiro','Renaut',2012),
('BBC-8504','Palio','Fiat',2004),
('BEB-5885','Gol','VW',2013),
('EDB-2475','Ranger','Ford',2005);

insert into manutencao(id,inicio,fim,descricao,matricula,placa)values
(1,'2023-02-25','2023-03-04','Lanterna queimada',48482,'DEA-7981'),
(2,'2023-03-13','2023-03-21','Farol queimado',48542,'CBC-4945'),
(3,'2023-03-29','2023-04-05','Troca de pneus dianteiros',48522,'BEE-7735'),
(4,'2023-04-14','2023-04-24','Troca de pneus dianteiros',48502,'CBA-4403'),
(5,'2023-04-30','2023-05-07','Farol queimado',48502,'BBC-8504'),
(6,'2023-05-16','2023-05-25','Troca de pneus trazeiros',48482,'BEB-5885'),
(7,'2023-06-05','2023-06-10','Retrovizor quebrado',48482,'EDB-2475'),
(8,'2023-06-25','2023-07-02','Troca de óleo e revisão geral',48502,'CBC-4945'),
(9,'2023-07-15','2023-07-19','Troca de Flúido de Freio',48482,'EDB-2475'),
(10,'2023-08-04','2023-08-10','Problemas no cabo do acelerador',48502,'DEA-7981'),
(11,'2023-08-24','2023-08-31','Pane elétrica',48562,'CBA-4403'),
(12,'2023-08-27','2023-09-04','Rebimboca da parafuzeta',48522,'BBC-8504'),
(13,'2023-08-30','2023-09-04','Troca de cavalos por poneis',48542,'BEE-7735'),
(14,'2023-09-02','2023-09-07','Lanterna queimada',48482,'BEB-5885');
```

|Desafio|
|-|
|A partir do script de criação e população com dados de testes do banco de dados, Desenvolva as seguintes **funcionalidades**|
|CRUD de Funcionarios: Implementar operações CRUD (Create, Read, Update, Delete) para os funcionarios|
|CRUD de Telefones: Implementar operações CRUD (Create, Read, Update, Delete) para os telefones|
|OBS: Caso deseje criar um CRUD para funcionários com telefones juntos o cliente vai ficar mais satisfeito|
|CRUD de Veiculos: Implementar operações CRUD (Create, Read, Update, Delete) para os veiculos|
|CRUD de Manutenções: Implementar operações CRUD (Create, Read, Update, Delete) para os manutenções, neste crud, nas funcionalidades READ, acrescente rotas que mostre somente os veículos que estãm em manutenção, data fim em branco ou nula|

|Entregas|
|-|
|Repositório do Github contendo:|
|Script de criação e população do BD com dados de teste chamado script.sql em uma pasta "testes"|
|API back-end com os CRUDs no padrão MVC em uma pasta "api"|
|Arquivo insomnha.json com todas as rotas de teste na pasta "testes"|
|Data: 04/04/2024,[FORMS]()|