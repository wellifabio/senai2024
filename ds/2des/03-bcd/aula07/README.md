# Aula07 - VPF01
- Verificação Prática Formativa

## OBS As 10h da manhã teremos [Fórum Educação Profissional](https://bit.ly/EduMobi1)


## Situação Problema
|Contextualização:|
|-|
|Sra. Simone Oliveira é dona de uma empresa de aluguel de veículos na cidade de Jaguariúna, o sistema de aluguel de veículos está em desenvolvimento, no entanto possui uma planilha csv com os históricos de algumas **Manutenções** realizadas em seus veículos. Você foi incumbido/a de desenvolver um sistema que organize os dados/registros das manutenções|

|Desafios:|
|-|
|Como primeiros passos para desenvolver este sistema, analise os dados brutos das planilhas a seguir|

### Dados
- [Em arquivo csv](./manutencoes.csv)
- Em formato de planilha

|placa|modelo|marca|ano|id_manutencao|inicio_manutencao|fim_manutencao|descricao|matricula|funcionário|telefone|
|-|-|-|-|-|-|-|-|-|-|-|
|DEA-7981|Uno|Fiat|2005|1|25/02/2023|04/03/2023|Lanterna queimada|48482|Osvaldo Oliveira|19-72077-0521,19-06078-6843|
|CBC-4945|Fiorino|Fiat|2007|2|13/03/2023|21/03/2023|Farol queimado|48542|Jaqueline Teixeira|19-23003-4864|
|BEE-7735|Saveiro|VW|2015|3|29/03/2023|05/04/2023|Troca de pneus dianteiros|48522|Keli Matos|19-06486-6449,19-53266-7923|
|CBA-4403|Sandeiro|Renaut|2012|4|14/04/2023|24/04/2023|Troca de pneus dianteiros|48502|Ursula Souza|19-64378-2404|
|BBC-8504|Palio|Fiat|2004|5|30/04/2023|07/05/2023|Farol queimado|48502|Ursula Souza|19-64378-2404|
|BEB-5885|Gol|VW|2013|6|16/05/2023|25/05/2023|Troca de pneus trazeiros|48482|Osvaldo Oliveira|19-72077-0521,19-06078-6843|
|EDB-2475|Ranger|Ford|2005|7|05/06/2023|10/06/2023|Retrovizor quebrado|48482|Osvaldo Oliveira|19-72077-0521,19-06078-6843|
|CBC-4945|Fiorino|Fiat|2007|8|25/06/2023|02/07/2023|Troca de óleo e revisão geral|48502|Ursula Souza|19-64378-2404|
|EDB-2475|Ranger|Ford|2005|9|15/07/2023|19/07/2023|Troca de Flúido de Freio|48482|Osvaldo Oliveira|19-72077-0521,19-06078-6843|
|DEA-7981|Uno|Fiat|2005|10|04/08/2023|10/08/2023|Problemas no cabo do acelerador|48502|Ursula Souza|19-64378-2404|
|CBA-4403|Sandeiro|Renaut|2012|11|24/08/2023|31/08/2023|Pane elétrica|48562|Evandro Silva|19-53315-2734|
|BBC-8504|Palio|Fiat|2004|12|27/08/2023|04/09/2023|Rebimboca da parafuzeta|48522|Keli Matos|19-06486-6449,19-53266-7923|
|BEE-7735|Saveiro|VW|2015|13|30/08/2023|04/09/2023|Troca de cavalos por poneis|48542|Jaqueline Teixeira|19-23003-4864|
|BEB-5885|Gol|VW|2013|14|02/09/2023|07/09/2023|Lanterna queimada|48482|Osvaldo Oliveira|19-72077-0521,19-06078-6843|

### Desafio01
A partir dos dados aplique técnica de normalização e separe-os em tabelas distintas e crie um modelo MER - Dicionário de dados:

### Desafio02
Crie um MER DER modelo conceitual.

### Desafio03
DDL - Crie o script.sql de criação do banco de dados e das tabelas.

### Desafio04
DML - Insira os dados em suas respectivas tabelas, utilize um arquivo chamado dados.sql para popular o banco de dados. 

### Desafio05
DQL - Crie um arquivo chamado queries.sql e adicione as seguintes consultas
- Crie uma consulta que liste os funcionários em ordem alfabética de nome
- Crie uma consulta que liste todos os funcionários e seus telefones
- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pelo ano decrescente
- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de manutenções realizadas em cada um

### Desafio 06
Visão/Relatório
- Crie uma consulta que mostre todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo e salve como uma visão chamada **vw_totas_as_manutencoes**

|Entregas|
|-|
|**[forms](https://docs.google.com/forms/d/e/1FAIpQLSfP73FulcdxZ3bWuUeK92cyR03IkJbqO-ERs6UI3nyUQa67TA/viewform?usp=sf_link)**|

## Critérios
|Criticidade|Capacidades Básicas e Socioemocionais|Critérios|
|-|-|-|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Identificar as características de banco de dados relacionais e não-relacionais|Aplicou técnicas de normalização e modelagem com MER DD e/ou MER DER conceitual|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)| Configurar o ambiente para utilização de banco de dados relacional|Instalou XAMPP se necessário e iniciou serviços MySQL, Apache, utilizou via shell ou PhpMyadmin, evidenciou enviando ao menos um script funcional|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Utilizar tipos de dados para definição dos atributos do banco de dados|Enviou script de criação do banco de dados com tipos pertinentes ao conjunto disponibilizado CSV|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|Elaborar diagramas de modelagem do banco de dados de acordo com a arquitetura definida|Enviou o MER DER conceitual ou lógico pertinente a solução implementada no script ou a Normalização|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Utilizar relacionamentos entre as tabelas do banco de dados|Evideinciou a criação de relacionamento através do script de criação|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Normalizar a estrutura do banco de dados|Separou o conjunto CSV disponibilizados aplicando ao menos uma das técnicas de normalização|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Documentar a estrutura do banco de dados por meio de dicionário de dados|Enviou o dicionário de dados contemplando as entidades e atributos|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar atenção a detalhes|Os scripts executaram com êxito|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar capacidade de organização|Entregou todos os desafios conforme solicitado|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Demonstrar raciocínio lógico na organização das informações|Resolveu todas as consultas DQL retornando os dados solicitados|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|Seguir método de trabalho|Separou os códigos DDL, DML e DQL conforme solicitado|