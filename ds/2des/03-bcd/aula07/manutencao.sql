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

-- DML (importações)
LOAD DATA INFILE 'D:/wellington/senai2023/2des/03-bcd/aula09/solucao/funcionario.csv'
INTO TABLE funcionario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/2des/03-bcd/aula09/solucao/telefone.csv'
INTO TABLE telefone
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/2des/03-bcd/aula09/solucao/veiculo.csv'
INTO TABLE veiculo
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'D:/wellington/senai2023/2des/03-bcd/aula09/solucao/manutencao.csv'
INTO TABLE manutencao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;