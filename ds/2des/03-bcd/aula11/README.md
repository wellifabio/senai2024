# Aula11 - VPS02

## Situação Problema
|Contextualização:|
|-|
|Sra. Simone Oliveira é dona de uma empresa de aluguel de veículos na cidade de Jaguariúna, e utiliza sistema de **aluguel de veículos**, com os históricos de  aluguéis, veículos e clientes. Você foi incumbido/a de desenvolver melhorias no banco de dados para que as APIs e aplicativos que utilizam esta base de dados executem menos processamento|

|Desafios:|
|-|
|1 - Abaixo segue o script para criar e popular um banco de dados em ambiente dev, execute o script no MariaDB MySQL do XAMPP|
|2 - Crie um procedimento chamado **calcSubtotais()** qua quando for chamado calcule todos os subtotais da tabela de alugueis|
|3 - Crie um gatilho que seja executado após qualquer update na tabela Aluguel calculando o subtotal|


- Banco de dados com dados para executar a avaliação:
```sql
-- SQL
-- DDL criação da base de dados
DROP DATABASE IF EXISTS alugueis;
CREATE DATABASE alugueis CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugueis;

CREATE TABLE Cliente (
    cpf VARCHAR(14) NOT NULL primary key,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE Telefone (
    cpf VARCHAR(14),
    numero VARCHAR(15) NOT NULL,
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

-- DML população com dados de teste
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
(1,'DEA-7981','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 20 DAY),DATE_SUB(CURDATE(), INTERVAL 20 DAY),DATE_SUB(CURDATE(), INTERVAL 18 DAY),0), 
(2,'CBC-4945','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 20 DAY),DATE_SUB(CURDATE(), INTERVAL 20 DAY),DATE_SUB(CURDATE(), INTERVAL 16 DAY),0), 
(3,'BEE-7735','333.333.333-33',DATE_SUB(CURDATE(), INTERVAL 19 DAY),DATE_SUB(CURDATE(), INTERVAL 19 DAY),DATE_SUB(CURDATE(), INTERVAL 16 DAY),0), 
(4,'CBA-4403','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 19 DAY),DATE_SUB(CURDATE(), INTERVAL 19 DAY),DATE_SUB(CURDATE(), INTERVAL 15 DAY),0), 
(5,'BBC-8504','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 18 DAY),DATE_SUB(CURDATE(), INTERVAL 14 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(6,'BEB-5885','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 18 DAY),DATE_SUB(CURDATE(), INTERVAL 18 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(7,'EDB-2475','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 17 DAY),DATE_SUB(CURDATE(), INTERVAL 17 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(8,'CBC-4901','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 16 DAY),DATE_SUB(CURDATE(), INTERVAL 15 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(9,'EDB-2475','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 16 DAY),DATE_SUB(CURDATE(), INTERVAL 15 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(10,'DEA-7981','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 16 DAY),DATE_SUB(CURDATE(), INTERVAL 16 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),0), 
(11,'CBA-4403','555.555.555-55',DATE_SUB(CURDATE(), INTERVAL 15 DAY),DATE_SUB(CURDATE(), INTERVAL 15 DAY),DATE_SUB(CURDATE(), INTERVAL 9 DAY),0), 
(12,'BBC-8504','333.333.333-33',DATE_SUB(CURDATE(), INTERVAL 15 DAY),DATE_SUB(CURDATE(), INTERVAL 14 DAY),DATE_SUB(CURDATE(), INTERVAL 9 DAY),0), 
(13,'BEE-7735','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 14 DAY),DATE_SUB(CURDATE(), INTERVAL 14 DAY),DATE_SUB(CURDATE(), INTERVAL 9 DAY),0), 
(14,'BEB-5885','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 13 DAY),DATE_SUB(CURDATE(), INTERVAL 13 DAY),DATE_SUB(CURDATE(), INTERVAL 8 DAY),0), 
(15,'CBA-4403','555.555.555-55',DATE_SUB(CURDATE(), INTERVAL 13 DAY),DATE_SUB(CURDATE(), INTERVAL 12 DAY),DATE_SUB(CURDATE(), INTERVAL 8 DAY),0), 
(16,'BEE-7735','333.333.333-33',DATE_SUB(CURDATE(), INTERVAL 12 DAY),DATE_SUB(CURDATE(), INTERVAL 12 DAY),DATE_SUB(CURDATE(), INTERVAL 7 DAY),0), 
(17,'BBC-8504','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 12 DAY),DATE_SUB(CURDATE(), INTERVAL 12 DAY),DATE_SUB(CURDATE(), INTERVAL 3 DAY),0), 
(18,'CBC-4945','444.444.444-44',DATE_SUB(CURDATE(), INTERVAL 11 DAY),DATE_SUB(CURDATE(), INTERVAL 11 DAY),null,0), 
(19,'DEA-7981','555.555.555-55',DATE_SUB(CURDATE(), INTERVAL 10 DAY),DATE_SUB(CURDATE(), INTERVAL 10 DAY),null,0), 
(20,'EDB-2475','555.555.555-55',DATE_SUB(CURDATE(), INTERVAL 10 DAY),DATE_SUB(CURDATE(), INTERVAL 9 DAY),null,0), 
(21,'CBA-4403','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 8 DAY),DATE_SUB(CURDATE(), INTERVAL 8 DAY),null,0), 
(22,'BEB-5885','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 6 DAY),DATE_SUB(CURDATE(), INTERVAL 6 DAY),null,0), 
(23,'BBC-8504','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 5 DAY),null,null,0), 
(24,'DEA-7981','111.111.111-11',DATE_SUB(CURDATE(), INTERVAL 2 DAY),null,null,0), 
(25,'CBC-4945','222.222.222-22',DATE_SUB(CURDATE(), INTERVAL 1 DAY),null,null,0);

-- DQL queries para criação de Relatórios
create view vw_todos_os_alugueis as
select a.*, c.nome_cliente, v.modelo, v.marca, datediff(devolucao, retirada) as dias, datediff(devolucao, retirada) * (select diaria from Veiculo where placa = a.placa) as sub_calc from Aluguel a
left join Cliente c on a.cpf = c.cpf
left join Veiculo v on a.placa = v.placa;

create view vw_todos_os_alugueis_com_status as
select a.*, c.nome_cliente, v.modelo, v.marca, datediff(devolucao, retirada) as dias, datediff(devolucao, retirada) * (select diaria from Veiculo where placa = a.placa) as sub_calc,
case
    when devolucao is not null then 'Concluído'
    when devolucao is null and retirada is not null then 'Em andamento'
    else 'Reservado'
end as status   
from Aluguel a
left join Cliente c on a.cpf = c.cpf
left join Veiculo v on a.placa = v.placa;

create view vw_alugueis_reservados as
select * from vw_todos_os_alugueis_com_status where status = 'Reservado';

create view vw_alugueis_em_andamento as
select * from vw_todos_os_alugueis_com_status where status = 'Em andamento';

select * from Cliente;
select * from Telefone;
select * from Veiculo;
select * from Aluguel;
select * from vw_todos_os_alugueis_com_status;
select * from vw_alugueis_reservados;
select * from vw_alugueis_em_andamento;
```

|Entregas|
|-|
|[Form para entrega](https://docs.google.com/forms/d/e/1FAIpQLSeEgk3Xd-KGcbnoWGC4MerJZtkIHMvRylr7F1jm19--J4WDLA/viewform?usp=sf_link)|