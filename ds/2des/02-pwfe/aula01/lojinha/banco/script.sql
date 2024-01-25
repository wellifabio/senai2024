-- DDL - Estrutura
drop database if exists lojinha;
create database lojinha;
use lojinha;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null
);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, nascimento)
values
("111.111.111-11","Jair","Silva","1980-01-01"),
("222.222.222-22","Jafoi","Solza","1990-02-25"),
("333.333.333-33","Javai","Santos","1985-03-18"),
("444.444.444-44","Jaera","Silveira","1982-04-13"),
("555.555.555-55","Jacinto","Pena","2005-05-15");

select * from Clientes;