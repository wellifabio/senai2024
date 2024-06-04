-- Aula 10 - Banco de Dados - 2DES - 2021/1
-- Prof. Wellington Martins

-- SQL (Structured Query Language) - DCL (Data Control Language) - IAM (Identify, Authorize, Manage)
-- Criar um usuário devpizza com a senha 1234 e acesso total ao SGBD
CREATE USER 'devpizza'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'devpizza'@'%';
-- criar um usuário com a senha 1234
CREATE USER 'pizzaiolo'@'localhost' IDENTIFIED BY '1234';
-- dar permissão para o usuário pizzaiolo acessar o banco de dados pizzaria
GRANT ALL PRIVILEGES ON pizzaria.* TO pizzaiolo@localhost;
-- Remover acesso de insert e update para o usuário pizzaiolo
REVOKE INSERT, UPDATE ON pizzaria.* FROM pizzaiolo@localhost;
-- Remover o usuário pizzaiolo
DROP USER 'pizzaiolo'@'localhost';
-- Remover o usuário devpizza
DROP USER 'devpizza'@'%';

-- Desafio 01 FUNÇÕES E VISÕES
-- Criar uma função que formate os números em formato de dinheiro brasileiro **R$ 0.00**
drop function if exists moeda;
delimiter //
create function moeda(v float) returns text
Begin
    return concat("R$ ",v);
end//
delimiter ;

-- Criar uma visão que mostre os pedidos formatando o **valor** com esta função
create view v_pedidos as
select pedido_id, cliente_id, data, hora, moeda(valor) from pedidos;

-- Desafio 02 PROCEDIMENTOS
-- Criar um procedimento que atulize os valores dos pedidos somando os valores dos itens_pedido
drop procedure if exists atualiza_valor_pedido;
delimiter //
create procedure atualiza_valor_pedido()
Begin
    declare id float;
    declare done int default 0;
    declare pedidos cursor for select pedido_id from pedidos;
    declare continue handler for not found set done = 1;
    open pedidos;
    read_loop: loop
        fetch pedidos into id;
        if done then
            leave read_loop;
        end if;
        update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = id) where pedido_id = id;
    end loop;
    close pedidos;
end//
delimiter ;

-- Chamar o procedimento
call atualiza_valor_pedido();
-- Ver os pedidos
select * from v_pedidos;

-- Criar um gatilho que atulize os valores dos pedidos após um item ser inserido no pedido
drop trigger if exists atualiza_valor_pedido;
delimiter //
create trigger atualiza_valor_pedido after insert on Itens_Pedido
for each row
begin
    call atualiza_valor_pedido();
end//
delimiter ;

-- Inserir um item no pedido
insert into Itens_Pedido values (27, 2, 1, (select valor from pizzas where pizza_id = 1));
select * from v_pedidos;