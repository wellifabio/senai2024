USE alugueis;

-- Calculando o subtotal
-- Primeiro verificando a quantidade de dias que o veículo foi alugado
select datediff(devolucao, retirada) as dias from Aluguel;
-- Agora calculando o subtotal utilizando subconsulta
select id, placa, cpf, reserva, retirada, devolucao, datediff(devolucao, retirada) as dias, datediff(devolucao, retirada) * (select diaria from Veiculo where placa = Aluguel.placa) as subtotal from Aluguel;
-- Atualizando a tabela Aluguel com o subtotal
update Aluguel set subtotal = datediff(devolucao, retirada) * (select diaria from Veiculo where placa = Aluguel.placa);

--DESAFIOS
-- Crie uma consulta que liste os clientes em ordem alfabética de nome
select * from Cliente order by nome_cliente;
-- Crie uma consulta que liste todos os clientes e seus telefones
select c.*, t.numeto as telefone from Cliente c left join Telefone t on c.cpf = t.cpf;
-- Crie uma consulta que liste todos os veículos em ordem crescente de marca e modelo
select * from Veiculo order by marca, modelo;
-- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pela diária decrescente
select * from Veiculo where marca = 'Fiat' order by diaria desc;
-- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um
select v.*, count(a.placa) as qtd_alugueis from Veiculo v left join Aluguel a on v.placa = a.placa group by v.placa;

-- RELATORIOS
-- Crie um relatório que mostre todos os auguéis acrescidos do nome do cliente, modelo e marca do veículo, dias, subtotal e salve como uma visão chamada vw_todos_os_alugueis
create view vw_todos_os_alugueis as
select a.*, c.nome_cliente, v.modelo, v.marca, datediff(devolucao, retirada) as dias, datediff(devolucao, retirada) * (select diaria from Veiculo where placa = a.placa) as sub_calc from Aluguel a
left join Cliente c on a.cpf = c.cpf
left join Veiculo v on a.placa = v.placa;

-- Crie um relatorio semelhante ao anterior porém acrescido de uma coluna status que informa se o aluguel está concluído, em andamento ou reservado e salve com o nome vw_todos_os_alugueis_com_status
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

-- Crie um relatório que mostre somente os aluguéis reservados e salve com o nome vw_alugueis_reservados
create view vw_alugueis_reservados as
select * from vw_todos_os_alugueis_com_status where status = 'Reservado';

-- Crie um relatório que mostre somente os aluguéis em andamento e salve com o nome vw_alugueis_em_andamento
create view vw_alugueis_em_andamento as
select * from vw_todos_os_alugueis_com_status where status = 'Em andamento';