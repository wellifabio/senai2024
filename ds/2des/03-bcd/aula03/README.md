# Aula03
## SQL DDL
A partir do planejamento MER, Dicionário de dados e MER, DER da aula anterior, vamos desenvolver a estrutura do banco de dados<br>
![DER Banco](../aula02/der-conceitual-banco.png)
```sql
-- SQL Script que exclui o banco anterior e cria um novo caso exista
drop database if exists banco;
create database banco;
use banco;

-- DDL
create table Clientes(
    cpf varchar(20) not null primary key,
    nome varchar(100) not null,
    nascimento Date not null,
    enderecoCep varchar(10) not null,
    enderecoNumero varchar(6),
    enderecoComplemento varchar(50)
);

create table Telefones(
    id int not null primary key auto_increment,
    cpf varchar(20) not null,
    tipo varchar(20) not null,
    telefone varchar(20) not null,
    foreign key (cpf) references Clientes(cpf)
    on delete cascade on update cascade
);

create table Contas(
    nConta int not null primary key auto_increment,
    cpf varchar(20) not null,
    tipo varchar(20) not null,
    foreign key (cpf) references Clientes(cpf)
);

create table Movimentacoes(
    id int not null primary key auto_increment,
    tipo varchar(20) not null,
    valor float(10,2) not null,
    origem varchar(50) not null,
    destino varchar(50) not null,
    nConta int not null,
    quando datetime not null default(curtime()),
    foreign key (nConta) references Contas(nConta)
);

```