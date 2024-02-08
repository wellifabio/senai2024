-- Acessar o Banco de dados
use lojinha;

-- DQL - Consultar
select * from Clientes;

-- DML - Atualizar
update Clientes set nome = "Joana" where id = 5;

-- DML - Deletar
delete from Clientes where id = 4;

-- DQL - Consultar novamente
select * from Clientes;