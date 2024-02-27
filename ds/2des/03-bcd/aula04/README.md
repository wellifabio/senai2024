# Aula04
## Exemplos de projetos de bancos de dados relacionais
### Transportadora
#### MER - Dicionário de dados
Cliente(idCliente [chave primária], nome, endereco, telefone, email);
Funcionário(idFuncionário [chave primária], nome, cargo, salario);
Veiculo(idVeiculo [chave primária], placa, modelo, capacidade, rotas[]);
Rota(idRota [chave primária], Origem, Destino, Distancia
Entrega

Atributos: ID_Entrega (chave primária), Data_Entrega, Status (Em andamento, Concluída, Atrasada)
Pedido

Atributos: ID_Pedido (chave primária), Data_Pedido, Valor, Status (Em andamento, Concluído)