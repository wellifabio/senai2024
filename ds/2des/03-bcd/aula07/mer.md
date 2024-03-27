# MER - Dicionário de dados
- funcionario(matricula: chave primária,nome);
- telefone(matricula: chave estrangeira[referencia funcionario(matricula)],numero);
- veiculo(placa: chave primária,modelo,marca,ano);
- manutencao(id: chave primária,placa: chave estrangeira[referencia veiculo(placa)],matricula: chave estrangeira[referencia funcionario(matricula)],inicio,fim,descricao);