-- SQL do banco de dados de Inventários com apenas uma tabela
DROP DATABASE IF EXISTS inventario;
CREATE DATABASE inventario CHARSET=UTF8 COLLATE utf8_general_ci;
USE inventario;
-- DDL Criação da estrutura da tabela
CREATE TABLE item(
    id varchar(5) not null primary key,
    nome varchar(50) not null,
    descricao text,
    valor decimal(10,2) not null
);
-- DML Popular a tabela com dados de teste
INSERT INTO item VALUES
('i001','Mesa','Mesa de escritório',100.00),
('i002','Computador','Desktop DEL i5, 8GB RAM, SSD 500GB',2200.00),
('i003','Cadeira','Cadeira giratória de escritório',500.00),
('i004','Longarina','Longarina de três cadeiras',450.00),
('i005','Prateleira','Prateleira de vidro',2500.00),
('i006','Estante','Estante de livros',1500.00),
('i007','Prateleira','Prateleira de madeira',500.00),
('i008','Balcão','Balcão de atendimento',500.00),
('i009','Balcão','Balção caixa',1700.00),
('i010','Computador','Computador do caixa',1500.00),
('i011','Computador','Computador de atendimento',1800.00),
('i012','Laptop','Laptop do escritório',2100.00),
('i013','Prateleira','Prateleira de vidro',500.00),
('i014','Prateleira','Prateleira de vidro',500.00),
('i015','Prateleira','Prateleira de vidro',500.00),
('i016','Prateleira','Prateleira de vidro',500.00),
('i017','Prateleira','Prateleira de vidro',500.00),
('i018','Prateleira','Prateleira de Madeira',600.00);

SELECT * FROM item;