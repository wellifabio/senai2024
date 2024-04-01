use manutencoes;

show tables;

-- Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from funcionario order by nome;
-- Crie uma consulta que liste todos os funcionários e seus telefones
select f.*, t.numero as telefone from funcionario f left join telefone t on f.matricula = t.matricula;
-- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pelo ano decrescente
select * from veiculo where marca = 'Fiat' order by ano desc;
-- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de manutenções realizadas em cada um
select v.*, count(m.id) as manutencoes from veiculo v left join manutencao m on v.placa = m.placa group by v.placa;

-- Crie uma consulta que mostre todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo
create view vw_totas_as_manutencoes as
select m.*, f.nome as funcionario, v.modelo as veiculo from manutencao m left join funcionario f on m.matricula = f.matricula left join veiculo v on m.placa = v.placa;

select * from vw_totas_as_manutencoes where veiculo = 'Uno';