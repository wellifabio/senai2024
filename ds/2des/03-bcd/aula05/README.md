# Aula05
## SQL (DDL, DML, DQL, DCL)
### DQL - Query ou Queries - Consultas ou relatórios
- SELECT
- WHERE
- ORDER BY
- GROUP BY
- JOIN, INNER, LEFT e RIGHT

## JOINS MYSQL
![MySQL Joins](https://cdn.educba.com/academy/wp-content/uploads/2019/11/joins-in-mysql-1.png)
[Link com mais informações](https://www.instagram.com/p/CkFOOxMrD9t/?img_index=1)

## Ponto de partida - Banco de dados populado - Transportadora
```sql
drop database if exists transportadora;
create database transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
use transportadora;

-- DDL - CREATE
create table Cliente(
    idCliente int not null primary key auto_increment,
    nome varchar(100) not null,
    endereco varchar(100) not null,
    telefone varchar(15) not null,
    email varchar(100) not null
);
create table Funcionario(
    idFuncionario int not null primary key auto_increment,
    nome varchar(100) not null default("Motorista"),
    cargo varchar(30) not null,
    salario float(10,2) not null
);
create table Rota(
    idRota int not null primary key auto_increment,
    origem varchar(100) not null,
    destino varchar(100) not null,
    distancia float(10,2)
);
create table Veiculo(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    capacidade float(10,2)
);

create table Entrega(
    idEntrega int not null primary key auto_increment,
    placa varchar(10) not null,
    motorista int not null,
    idRota int not null,
    inicio datetime,
    fim datetime,
    status varchar(20)
);

create table pedido(
    idPedido int not null primary key auto_increment,
    idCliente int not null,
    idEntrega int not null,
    dataPedido timestamp not null,
    valor float(50,2) not null
);
-- DDL - ALTER
alter table Pedido add foreign key (idCliente) references Cliente(idCliente);
alter table Pedido add foreign key (idEntrega) references Entrega(idEntrega);

alter table Entrega add foreign key (placa) references Veiculo(placa);
alter table Entrega add foreign key (motorista) references Funcionario(idFuncionario);
alter table Entrega add foreign key (idRota) references Rota(idRota);

describe Cliente;
describe Funcionario;
describe Rota;
describe Veiculo;
describe Entrega;
describe Pedido;
show tables;

-- DML - População do banco de dados com dados de teste
insert into cliente(nome, endereco, telefone, email) values
("Jacinto Mello Aquino Rego", "Rua Alfredo Bueno, 25, Centro, Jaguariúna, SP","19 90567-8847","jacintomello@gmail.com"),
("Osmar Motta","Rua Julia Bueno, 31, Centro, Jaguariúna, SP","19 99999-8847","osmarmotta@gmail.com"),
("Osmar Manjo","Rua Joaquim Bueno, 31, Santa Maria, Jaguariúna, SP","19 98888-8847","osmarmanjo@gmail.com"),
("Osmar Dito","Av. Papa João XXIII, 190, Pedreira - SP","19 94444-8847","osmardito@gmail.com"),
("Osmar Educado","Rua Joaquim Bueno, 131, Santa Maria, Jaguariúna, SP","19 95555-8847","osmareducado@gmail.com"),
("Humberto garcia","R. Panini, 108 - Vila Sao Jose, Jaguariúna - SP","19 96666-8847","humbertogarcia@gmail.com"),
("Dagoberto Teixeira","Rua Joaquim Bueno, 331, Santa Maria, Jaguariúna, SP","19 97777-8847","dagobertoteixeira@gmail.com");

insert into Funcionario(nome, cargo, salario) values
("Passos Dias Aguiar","Motorista",4980.9),
("Suzi Rego Grande","Motorista",9980.9),
("Bino Nomuro","Motorista",6750);

insert into rota(origem, destino, distancia) values
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","Av. Pacífico Moneda, 2925, Vargeão Jaguariúna, SP", null),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Marion, 780 - Chácaras Santo Antonio Bom Jardim, Santo Antônio de Posse - SP",8.8),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","Av. Papa João XXIII, 190, Pedreira - SP",15.2),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Olindo Peron, 94, Pedreira - SP",18),
("Rua Anèsia Venturi Zani, 62, Centro, Jaguariúna, SP","R. Panini, 108 - Vila Sao Jose, Jaguariúna - SP",4.2);

insert into veiculo(placa, modelo, capacidade) values
("AAA-1A11","VW Kombi",1),
("BBB-1B11","Fiat Toro",2),
("CCC-1C11","Ford F250",2.5);

insert into entrega(placa, motorista, idRota, inicio, fim, status) values
("AAA-1A11",1,1,date_sub(now(),interval 200 hour),date_sub(now(),interval 196 hour),"Finalizada"),
("BBB-1B11",2,1,date_sub(now(),interval 180 hour),date_sub(now(),interval 172 hour),"Finalizada"),
("CCC-1C11",3,1,date_sub(now(),interval 160 hour),date_sub(now(),interval 159 hour),"Finalizada"),
("AAA-1A11",1,1,date_sub(now(),interval 155 hour),date_sub(now(),interval 151 hour),"Finalizada"),
("BBB-1B11",3,1,date_sub(now(),interval 100 hour),date_sub(now(),interval 97 hour),"Finalizada"),
("CCC-1C11",2,1,date_sub(now(),interval 90 hour),date_sub(now(),interval 88 hour),"Finalizada"),
("BBB-1B11",1,1,date_sub(now(),interval 80 hour),date_sub(now(),interval 79 hour),"Finalizada"),
("AAA-1A11",2,1,date_sub(now(),interval 20 hour),date_sub(now(),interval 18 hour),"Finalizada"),
("CCC-1C11",3,1,date_sub(now(),interval 2 hour),null,"Em andamento"),
("BBB-1B11",1,1,null,null,"Agendada");

insert into pedido(idCliente, idEntrega, dataPedido, valor) values
(1,1,date_sub(now(),interval 203 hour),500),
(2,1,date_sub(now(),interval 201 hour),499.9),
(1,2,date_sub(now(),interval 182 hour),399.9),
(3,2,date_sub(now(),interval 181 hour),200),
(2,3,date_sub(now(),interval 161 hour),1200),
(5,3,date_sub(now(),interval 161 hour),59.9),
(4,4,date_sub(now(),interval 156 hour),550.9),
(6,4,date_sub(now(),interval 155 hour),120),
(5,5,date_sub(now(),interval 101 hour),12.5),
(7,5,date_sub(now(),interval 100 hour),200),
(6,6,date_sub(now(),interval 91 hour),12.5),
(7,6,date_sub(now(),interval 91 hour),200),
(1,7,date_sub(now(),interval 81 hour),150),
(4,7,date_sub(now(),interval 81 hour),180),
(1,8,date_sub(now(),interval 20 hour),150),
(4,8,date_sub(now(),interval 20 hour),180),
(1,9,date_sub(now(),interval 3 hour),150),
(4,9,date_sub(now(),interval 2 hour),180),
(6,10,date_sub(now(),interval 1 hour),180),
(7,10,now(),180);

select * from cliente;
select * from funcionario;
select * from rota;
select * from veiculo;
select * from entrega;
select * from pedido;

```

### Instale o banco de dados acima, populado
- 1 Abra o **XAMPP**
- 2 Clique em start em **MySQL** e Apache
- 3 Abra o **PhpMyadmin** clicando em **Admin** a frente do **MySQL**
- 4 Execute o Script clicando em **SQL**

## Vamos começar a criar nossos relatórios;
```sql
-- Listar todos
select * from cliente;
-- Filtrar por nome exato
select * from cliente where nome = "Osmar Motta";
-- Filtrar por nome aproximado
SELECT * FROM cliente WHERE nome like '%osmar%';
-- Like iniciado com osmar
SELECT * FROM cliente WHERE nome like 'osmar%';
-- Like terminado com motta
SELECT * FROM cliente WHERE nome like '%motta';
-- like com o mello no meio
SELECT * FROM cliente WHERE nome like '%mello%';
-- Escolhendo os campos e filtrando
SELECT nome, telefone FROM cliente WHERE nome like '%mello%';
-- Filtrando por telefone
SELECT nome, telefone FROM cliente WHERE telefone like '%99%';
-- Ordenar - Sort
SELECT * FROM cliente order by nome;
SELECT * FROM cliente order by nome desc;
SELECT * FROM cliente order by email;
-- Filtrar e Ordenar
SELECT * FROM cliente WHERE nome like 'osmar%' order by email desc;
-- Agrupar - Sempre que agrupar criar um resumo (avg(), min(), max(), sum(), count())
SELECT * FROM pedido WHERE idCliente = 1;
SELECT * FROM pedido GROUP by idCliente;
SELECT *, avg(valor) FROM pedido GROUP by idCliente;
SELECT idCliente, avg(valor) FROM pedido group by idcliente;
-- Agrupar: Ex. quantos pedidos por cliente
SELECT idCliente, count(idCliente) as 'total pedidos' FROM pedido group by idcliente;
-- Agrupar e saber o valor total que cada cliente pediu
SELECT idCliente, sum(valor) as 'valor total dos pedidos' FROM pedido group by idcliente;
-- Só os pedidos mais caros de cada cliente (idCliente e valor)
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;

-- Para criar Relatórios(VIEW - VISÕES) basta salvar a consulta exemplos:
-- Relatório de total por cliente
create view TotalPorCliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;
-- Para ver o relatório
SELECT * FROM totalporcliente;
-- Criar um relatório dos pedidos mais caros de cada cliente chame de 'pedidos_mais_caros'
create view pedidos_mais_caros as
select idCliente, max(valor) as 'maior valor' from pedido group by idcliente;
-- Para ver o relatório
SELECT * FROM pedidos_mais_caros;
-- Para remover uma visão use o comando drop
drop view totalporcliente;
-- Criar novamente a visão com um outro nome
create view pedidos_totais_por_cliente as
SELECT idCliente, sum(valor) as 'total dos pedidos' FROM pedido group by idcliente;
-- para ver
select * from pedidos_totais_por_cliente;

-- Juntando dados de diferentes tabelas
-- JOIN
-- INNER JOIN e o ON comparando as chaves primária e estrangeira
select * from cliente inner join pedido on cliente.idcliente = pedido.idCliente;
-- Utilizando Alias (apelido)
select * from cliente c inner join pedido p on c.idcliente = p.idcliente;
-- Escolhendo os principais campos
-- Nome do cliente, o endereço e todos os dados do pedido
Select c.nome, c.endereco, p.* from cliente c inner join pedido p on c.idcliente = p.idcliente;
```

## Atividades
- 1 Crie uma consulta que mostre somente os nomes de todos os clientes
- 2 Crie uma consulta que agrupe as estregas e mostre quantas cada motorista fez
- 3 Salve a consulta anterior em um relatório chamado 'entregas por motorista'
- 4 Crie uma consulta que mostre todas as rotas ordenadas por distância
- 5 Crie uma consulta que mostre os funcionários ordenados por nome
- 6 Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.
- 7 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos, salve como 'relatorio_de_entregas_01'
- 8 Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'

### Solução
```sql
-- Crie uma consulta que mostre somente os nomes de todos os clientes
select nome from cliente;
-- Crie uma consulta que agrupe as estregas e mostre quantas cada motorista fez
select * from entrega;
select motorista, count(motorista) from entrega group by motorista;
-- E se quisessemos o nome do motorita ao invés do id
select f.nome, count(e.motorista) from entrega e inner join funcionario f on f.idFuncionario = e.motorista group by motorista;
-- Salve a consulta anterior em um relatório chamado 'entregas_por_motorista'
create view entregas_por_motorista as
select f.nome, count(e.motorista) from entrega e inner join funcionario f on f.idFuncionario = e.motorista group by motorista;
-- Conferir se criou a view / visão / relatório
show tables;
select * from entregas_por_motorista;
-- Crie uma consulta que mostre todas as rotas ordenadas por distância
select * from rota order by distancia;
-- Crie uma consulta que mostre os funcionários ordenados por nome
select * from funcionario order by nome;
-- Crie uma consulta que mostre qual veículo fez mais entregas e o total de entregas que ele fez.
select placa, count(idEntrega) from entrega group by placa;
select placa, count(idEntrega) as 'entregas' from entrega group by placa order by count(idEntrega) desc;
select placa, count(idEntrega) as 'entregas' from entrega group by placa order by count(idEntrega) desc limit 1;
-- Mostre o modelo do veículo e não somente a placa
select e.placa, v.modelo, count(e.idEntrega) as 'entregas' from entrega e inner join veiculo v on e.placa = v.placa group by e.placa order by count(e.idEntrega) desc limit 1;
-- Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos, salve como 'relatorio_de_entregas_01'
select * from entrega;
create view relatorio_de_entregas_01 as
select f.nome, v.modelo, e.* from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa;
-- Para listar as views ou relatórios
show tables;
select * from relatorio_de_entregas_01;
-- Crie um relatório que mostre todas as entregas com os nomes dos motoristas, modelos dos veículos e o valor total da entrega, salve como 'relatorio_de_entregas_02'
select f.nome, v.modelo, e.* from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa;
create view relatorio_de_entregas_02 as
select f.nome, v.modelo, e.*, sum(p.valor) as total from entrega e inner join funcionario f on e.motorista = f.idFuncionario inner join veiculo v on e.placa = v.placa inner join pedido p on e.idEntrega = p.idEntrega group by e.idEntrega;
-- Testar o relatório
select * from relatorio_de_entregas_02;
```