# Aula08 - VPS01
- Verificação Prática Somativa

## Situação Problema
|Contextualização:|
|-|
|O Sra. Simone Oliveira é dona de uma empresa de aluguel de veículos na cidade de Jaguariúna, necessita de um sistema de **aluguel de veículos**, possui uma planilha **xlsx** com os históricos de  aluguéis, veículos e clientes. Você foi incumbido/a de desenvolver um sistema que organize os dados/registros de aluguéis|

|Desafios:|
|-|
|Como primeiros passos para desenvolver este sistema, analise os dados brutos das planilhas a seguir|

### Dados
- [Em arquivo excel](./alugueis.xlsx)
- Em formato de planilha

|placa|modelo|marca|tipo|diaria|cpf_cliente|nome_cliente|telefone|reserva|retirada|devolucao|dias|status|subtotal|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|DEA-7981|Uno|Fiat|standart|100,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|25/01/2024|25/01/2024|04/02/2024|10|concluido|1.000,00|
|CBC-4945|Fiorino|Fiat|utilitario|120,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|13/03/2024|13/03/2024|21/03/2024|8|concluido|960,00|
|BEE-7735|Saveiro|VW|standart|100,00|333.333.333-33|Keli Matos|19-06486-6449,19-53266-7923|29/03/2024|29/03/2024|05/04/2024|7|concluido|700,00|
|CBA-4403|Sandeiro|Renaut|standart|100,00|444.444.444-44|Ursula Souza|19-64378-2404|14/03/2024|14/03/2024|24/03/2024|10|concluido|1.000,00|
|BBC-8504|Palio|Fiat|standart|100,00|444.444.444-44|Ursula Souza|19-64378-2404|29/02/2024|29/02/2024|07/03/2024|7|concluido|700,00|
|BEB-5885|Gol|VW|standart|100,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|16/02/2024|16/02/2024|25/03/2024|38|concluido|3.800,00|
|EDB-2475|Ranger|Ford|esportivo|200,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|05/02/2024|05/02/2024|10/03/2024|34|concluido|6.800,00|
|CBC-4901|Fiorino|Fiat|utilitario|120,00|444.444.444-44|Ursula Souza|19-64378-2404|25/02/2024|25/02/2024|02/03/2024|6|concluido|720,00|
|EDB-2475|Ranger|Ford|esportivo|200,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|15/02/2024|15/02/2024|19/03/2024|33|concluido|6.600,00|
|DEA-7981|Uno|Fiat|standart|100,00|444.444.444-44|Ursula Souza|19-64378-2404|04/02/2024|04/02/2024|10/03/2024|35|concluido|3.500,00|
|CBA-4403|Sandeiro|Renaut|standart|100,00|555.555.555-55|Evandro Silva|19-53315-2734|23/02/2024|24/02/2024|30/03/2024|35|concluido|3.500,00|
|BBC-8504|Palio|Fiat|standart|100,00|333.333.333-33|Keli Matos|19-06486-6449,19-53266-7923|27/02/2024|27/02/2024|03/03/2024|5|concluido|500,00|
|BEE-7735|Saveiro|VW|standart|100,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|29/02/2024|29/02/2024|03/03/2024|3|concluido|300,00|
|BEB-5885|Gol|VW|standart|100,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|02/02/2024|02/02/2024|07/03/2024|34|concluido|3.400,00|
|CBA-4403|Sandeiro|Renaut|standart|100,00|555.555.555-55|Evandro Silva|19-53315-2734|05/02/2024|05/02/2024|15/03/2024|39|concluido|3.900,00|
|BEE-7735|Saveiro|VW|standart|100,00|333.333.333-33|Keli Matos|19-06486-6449,19-53266-7923|08/02/2024|08/02/2024|15/03/2024|36|concluido|3.600,00|
|BBC-8504|Palio|Fiat|standart|100,00|444.444.444-44|Ursula Souza|19-64378-2404|11/02/2024|11/02/2024|15/03/2024|33|concluido|3.300,00|
|CBC-4945|Fiorino|Fiat|utilitario|120,00|444.444.444-44|Ursula Souza|19-64378-2404|14/03/2024|14/03/2024||19|alugado|2.280,00|
|DEA-7981|Uno|Fiat|standart|100,00|555.555.555-55|Evandro Silva|19-53315-2734|16/03/2024|17/03/2024||16|alugado|1.600,00|
|EDB-2475|Ranger|Ford|esportivo|200,00|555.555.555-55|Evandro Silva|19-53315-2734|25/03/2024|25/03/2024||8|alugado|1.600,00|
|CBA-4403|Sandeiro|Renaut|standart|100,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|28/03/2024|28/03/2024||5|alugado|500,00|
|BEB-5885|Gol|VW|standart|100,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|23/03/2024|23/03/2024||10|alugado|1.000,00|
|BBC-8504|Palio|Fiat|standart|100,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|01/05/2024|||0|reservado||
|DEA-7981|Uno|Fiat|standart|100,00|111.111.111-11|Osvaldo Oliveira|19-72077-0521,19-06078-6843|10/05/2024|||0|reservado||
|CBC-4945|Fiorino|Fiat|utilitario|120,00|222.222.222-22|Jaqueline Teixeira|19-23003-4864|19/05/2024|||0|reservado||



### Desafio01
A partir dos dados aplique técnica de normalização e separe-os em tabelas distintas e crie um modelo MER - Dicionário de dados:

### Desafio02
Crie um MER DER modelo conceitual.

### Desafio03
DDL - Crie o **script.sql** de criação do banco de dados e das tabelas.

### Desafio04
DML - Insira os dados em suas respectivas tabelas, utilize um arquivo chamado **dados.sql** para popular o banco de dados. 

### Desafio05
DQL - Crie um arquivo chamado **queries.sql** e adicione as seguintes consultas
- Crie uma consulta que liste os clientes em ordem alfabética de nome
- Crie uma consulta que liste todos os clientes e seus telefones
- Crie uma consulta que liste todos os veículos em ordem crescente de marca e modelo
- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pela diária decrescente
- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de aluguéis realizadas em cada um

### Desafio 06
Visão/Relatório
- Crie um relatório que mostre todos os auguéis acrescidos do nome do cliente, modelo e marca do veículo, dias, subtotal e salve como uma visão chamada **vw_todos_os_alugueis**

|Entregas|
|-|
|**[forms](https://docs.google.com/forms/d/e/1FAIpQLSc1Q_Hd9rF51MZHHDakjEUOeTcXuOMyOJyoukfRJY1FL5PbGg/viewform?usp=sf_link)**|

## Critérios
|Criticidade|Capacidades Básicas e Socioemocionais|Critérios|
|-|-|-|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Identificar as características de banco de dados relacionais e não-relacionais|Aplicou técnicas de normalização e modelagem com MER DD e/ou MER DER conceitual|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Configurar o ambiente para utilização de banco de dados relacional|Instalou XAMPP se necessário e iniciou serviços MySQL, Apache, utilizou via shell ou PhpMyadmin, evidenciou enviando ao menos um script funcional|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Utilizar tipos de dados para definição dos atributos do banco de dados|Enviou script de criação do banco de dados com tipos pertinentes ao conjunto disponibilizado CSV|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Elaborar diagramas de modelagem do banco de dados de acordo com a arquitetura definida|Enviou o MER DER conceitual ou lógico pertinente a solução implementada no script ou a Normalização|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Utilizar relacionamentos entre as tabelas do banco de dados|Evideinciou a criação de relacionamento através do script de criação|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Normalizar a estrutura do banco de dados|Separou o conjunto CSV disponibilizados aplicando ao menos uma das técnicas de normalização|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Documentar a estrutura do banco de dados por meio de dicionário de dados|Enviou o dicionário de dados contemplando as entidades e atributos|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar atenção a detalhes|Os scripts executaram com êxito|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar capacidade de organização|Entregou todos os desafios conforme solicitado|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar raciocínio lógico na organização das informações|Resolveu todas as consultas DQL retornando os dados solicitados|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Seguir método de trabalho|Separou os códigos DDL, DML e DQL conforme solicitado|