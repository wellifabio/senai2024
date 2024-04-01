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
