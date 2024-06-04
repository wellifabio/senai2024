# Aula10
Acesso, Funções, Procedimentos e Gatilhos
## Conhecimentos
- 2.3. DCL (data control language)
	- 2.3.1. GRANT
	- 2.3.2. REVOKE
- 2.15. STORED PROCEDURE
- 2.16. FUNCTION
- 2.17. TRIGGERS

## DCL

### Escopo de acesso
    - Ambientes (DEV, Quality, Prod)
      - SGBD (MySQL, Postgress, SQL Server, Oracle)
        - BD (Pizzaria, Transportadora, Escola, Banco)

### Tutorial de criação de usuários e acessos
- O comando a seguir cria um usuário de SGBD com acesso total e uma senha extremamente fraca '1234'.

```sql
CREATE USER 'devpizza'@'%' IDENTIFIED VIA mysql_native_password USING '***';GRANT ALL PRIVILEGES ON *.* TO 'devpizza'@'%' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
```
- Ou crie o usuário através com o PhpMyadmin **marcando todos os acessos**.
- Após criar o usuário podemos tentar acessar através do shell com o comando a seguir
```bash
mysql -u devpizza -p
```
- Digite a senha e tente ver todos os bancos de dados e acessar o banco de dados pizzaria e ver a estrutura e os dados
```sql
show databases;
use pizzaria;
show tables;
describe clientes;
select * from clientes;
```
- Logado com o usuário devpizza crie um usuário para um pizzaiolo
```sql
CREATE USER 'pizzaiolo'@'localhost' IDENTIFIED BY '1234';
```
- Saia do SGBD com o usuário **devpizza** e acesse com o pizzaiolo, tente acessar o banco de dados **pizzaria**
```sql
exit
mysql -u pizzaiolo -p
use pizzaria;
```
- Irá aparecer mensagem de acesso negado. Volte com o usuário devpizza e de acesso ao banco de dados ao pizzaiolo
```sql
GRANT ALL PRIVILEGES ON pizzaria.* TO pizzaiolo@localhost;
```
- Teste novamente, acessando a pizzaria com o **pizzaiolo** e dará certo.
```sql
mysql -u pizzaiolo -p
show databases;
use pizzaria;
show tables;
describe pedidos;
select * from pedidos;
```
- Insira um novo pedido
```sql
INSERT INTO pedidos VALUES (null, 1, curdate(), curtime(), null);
select * from pedidos;
```
- Remover acesso de INSERT e UPDATE para o usuário pizzaiolo
```sql
REVOKE INSERT, UPDATE ON pizzaria.* FROM pizzaiolo@localhost;
```
- Tente inserir um pedido novamente.
```sql
exit
mysql -u pizzaiolo -p
show databases;
use pizzaria;
show tables;
INSERT INTO pedidos VALUES (null, 1, curdate(), curtime(), null);
```
- Apresentará uma mensagem de acesso negado.

### Política de acesso mínimo
Nos ambientes de Produção e testes, sempre trabahamos com a **política de acesso mínimo***, um usuário deve ter o acesso somente ao reecurso necessário para o seu trabalho.
Neste caso o escopo de acesso do **devpizza** é o SGBD com todos os bancos de dados, o escopo do **pizzaiolo** é somente o banco de dados **pizzaria** e somente para leitura e exclusão.

## Funções

|Desafio|
|-|
|-Crie uma função que formate os números em formato de dinheiro brasileiro **R$ 0.00**<br>E crie uma visão que mostre os pedidos formatando o **valor**|


## Banco de dados de exemplo
```sql
-- Banco de dados Pizzasria, Baseado no exemplo do livro Princípios de banco de dados com MySQL 5.7
-- Editora SENAI - 2019
-- Comandos DDL para criar a estrutura do banco de dados
drop database if exists Pizzaria;
create database Pizzaria charset=UTF8 collate utf8_general_ci;
use Pizzaria;

create table Clientes(
	Cliente_id integer primary key auto_increment,
	nome varchar(30) not null,
	logradouro varchar(30) not null,
	numero decimal(5,0),
	complemento varchar(30),
	bairro varchar(30),
	referencia varchar(30)
);

create table Pizzas(
	pizza_id integer primary key auto_increment,
	nome varchar(30) not null,
	descricao varchar(100) not null,
	valor decimal(8,2) not null
);

create table Telefones(
	cliente_id integer not null,
	telefone varchar(15) not null,
	foreign key (cliente_id) references Clientes(cliente_id) on delete cascade
);

create table Pedidos(
	pedido_id integer primary key auto_increment,
	cliente_id integer not null,
	data date not null,
	hora time not null,
	valor decimal(8,2),
	foreign key (cliente_id) references Clientes(cliente_id)
);

create table Itens_Pedido(
	pedido_id integer,
	pizza_id integer not null,
	quantidade integer not null,
	valor decimal(8,2) not null,
	foreign key (pedido_id) references Pedidos(pedido_id) on delete cascade,
	foreign key (pizza_id) references Pizzas(pizza_id)
);

-- Comandos DML para alimentar o banco de dados com registros
insert into Clientes(nome, logradouro, numero, complemento, bairro, referencia) values
("Adelcio Biazi","Rua Wellington Martins",1204,"Fundos","Dom Bosco","Igreja"),
("Adriano da Silva Ferreira","Rua Walter Paulo Costenaro",1206,null,"Bela Vista","Farmácia"),
("Alisson Linhares de Carvalho","Rua Viviane Mello Bonadia dos Santos",1208,null,"Zambom",null),
("Amanda Cristina davi Resende","Rua Thamires de Campos Luz",1210,null,"Santa Cruz","Escola"),
("Ana Cláudia de Moura Laurentino","Rua Taynara Cerigueli Dutra",1212,null,"Dom Bosco",null),
("Ana Claudia Maciel","Rua Suéllen Rodolfo Martinelli",1214,"Frente","Dom Bosco","Campinho"),
("Argemiro Pentian Junior","Rua Silvia Roberta de Jesus Garcia",1216,null,"Dom Bosco",null),
("Bento Rafael Siqueira","Rua Sergio Willians Poneli",1218,null,"Dom Bosco",null),
("Bernardo Moreira Zabadal","Rua Sara Luzia de Melo",1220,null,"Dom Bosco","suermercado"),
("Carlos Roberto de Oliveira Cazelatto Junior","Rua Raphael Hungaro Moretti",1222,null,"Dom Bosco",null),
("Carlos Roberto Do Nascimento Costa","Rua Ramon Simões Abílio",1224,null,"Dom Bosco",null),
("Cesar Augusto Pascali Rago","Rua Rafaela de Jesus Alencar",1226,null,"Dom Bosco",null),
("Claudemir de Souza Freitas Junior","Rua Rafael Tomé de Souza",507,null,"Dom Bosco",null),
("Claudiane Mendes Trigueiro Silva","Rua Paula Leticia Santos Lima",601,null,"Dom Bosco",null),
("Claudiney Ramos Tinoco","Rua Patrícia Fernanda da Silva Freitas",695,"Fundos","Dom Bosco",null),
("Danilo César Pereira","Rua Ovídio José Francisco",789,null,"Dom Bosco",null),
("Darvin Ames","Rua Murilo Gleyson Gazzola",883,null,"Dom Bosco","Igreja"),
("Debora Barbosa Aires","Rua Marcelo José Vigorito Campara",977,null,"Dom Bosco","Farmácia"),
("Deivison Shindi Takatu","Rua Marcelo Do Carmo Vieira Scomparim",1071,"Fundos","Zambom",null),
("Denis Henrique Caixeta","Rua Luciano Rovanni Do Nascimento",1165,"Fundos","Zambom","Escola"),
("Deysiane Matos Sande","Rua Luciano Rossi",1259,null,"Zambom",null),
("Diego Rafael Moraes","Rua Lucas Hermann Negri",1353,null,"Zambom","Campinho"),
("Diogo Matos da Silva","Rua Liliam Sayuri Sakamoto",1447,"Segundo andar","Zambom",null),
("Diogo Paulino da Cruz dos Santos","Rua Juliana de Sousa Ribeiro",1541,null,"Zambom",null),
("Douglas Brito damalio","Rua Josiane Rosa de Oliveira Gaia Pimenta",1635,null,"Zambom","suermercado"),
("Draylson Micael de Souza","Rua José Santiago Moreira de Mello",205,null,"Zambom",null),
("Eder Almeida Batista de Oliveira","Rua José Renato Paviotti",206,null,"Zambom",null),
("Ederlon Barbosa Cruz","Rua José Rafael Pilan",207,null,"Zambom",null),
("Edinei Peres Legaspe","Rua José Eugênio de Mira",208,"Fundos","Zambom",null),
("Ednei Jose de Almeida Junior","Rua Jessé Italo Silva",209,null,"Zambom",null),
("Eduardo de Paula Lima Nascimento","Rua Jefferson Carlos Pedroso",210,null,"Zambom",null),
("Eduardo Henrique Spies","Rua Jefferson Barbosa Belo da Silva",2293,null,"Zambom",null),
("Elaine Cecília Gatto","Rua Jeane Aparecida Menegueli",2387,null,"Santa Cruz","Igreja"),
("Elias Adriano Nogueira da Silva","Rua Ingrid Marçal",2481,null,"Santa Cruz","Farmácia"),
("Elis Cristina Montoro Hernandes Ervolino","Rua Icaro Cavalcante Dourado",2575,null,"Santa Cruz",null),
("Erica Aparecida Martins Siqueira","Rua Higor Antonio delsoto",2669,null,"Santa Cruz","Escola"),
("Erika Arias Barrado","Rua Hiago Araujo Silva",2763,null,"Santa Cruz",null),
("Esteic Janaina Santos Batista","Rua Helder Pestana",2857,null,"Santa Cruz","Campinho"),
("Everaldo Costa Silva Neto","Rua Gustavo Moreira Calixto",2951,null,"Santa Cruz",null),
("Everaldo Silva de Freitas","Rua Giovanna Nascimento Antonieti",3045,null,"Santa Cruz",null),
("Ewerton José da Silva","Rua Giovani Bertolla Sampaio",3139,null,"Santa Cruz","suermercado"),
("Fabio Luiz de Paula","Rua Gerson Luiz Camillo",3233,null,"Santa Cruz",null),
("Fabio Serafim","Rua Gabriel Spadon de Souza",3327,null,"Santa Cruz",null),
("Felipe Gobo Bruno","Rua Gabriel Sgorlon Tininis",3421,null,"Bela Vista","Igreja"),
("Fernanda Zampieri Canaver","Rua Gabriel Morais Silveira",3515,null,"Bela Vista","Farmácia"),
("Fernando Claudio dos Santos Junior","Rua Gabriel Ferreira Teles Gomes",201,null,"Bela Vista",null),
("Fernando Henrique Campos","Rua Francisco José Nardi Filho",202,null,"Bela Vista","Escola"),
("Flávia Zenaro Nogueira E Silva","Rua Francisco Edigleison da Silva Barbosa",203,null,"Bela Vista",null),
("Floriano Ferreira dos Reis Filho","Rua Francisco Assis da Silva",204,null,"Bela Vista","Campinho"),
("Frances Albert Santos","Rua Frances Albert Santos",205,null,"Bela Vista",null),
("Francisco Assis da Silva","Rua Floriano Ferreira dos Reis Filho",206,null,"Bela Vista",null),
("Francisco Edigleison da Silva Barbosa","Rua Flávia Zenaro Nogueira E Silva",207,null,"Zambom","suermercado"),
("Francisco José Nardi Filho","Rua Fernando Henrique Campos",208,null,"Zambom",null),
("Gabriel Ferreira Teles Gomes","Rua Fernando Claudio dos Santos Junior",209,null,"Zambom",null),
("Gabriel Morais Silveira","Rua Fernanda Zampieri Canaver",210,null,"Zambom",null),
("Gabriel Sgorlon Tininis","Rua Felipe Gobo Bruno",211,null,"Zambom",null),
("Gabriel Spadon de Souza","Rua Fabio Serafim",212,null,"Zambom",null),
("Gerson Luiz Camillo","Rua Fabio Luiz de Paula",213,null,"Zambom",null),
("Giovani Bertolla Sampaio","Rua Ewerton José da Silva",1917,null,"Zambom",null),
("Giovanna Nascimento Antonieti","Rua Everton Jose de Souza",2011,null,"Santa Cruz",null),
("Gustavo Moreira Calixto","Rua Everaldo Silva de Freitas",2105,null,"Santa Cruz","Igreja"),
("Helder Pestana","Rua Everaldo Costa Silva Neto",2199,null,"Santa Cruz","Farmácia"),
("Hiago Araujo Silva","Rua Esteic Janaina Santos Batista",2293,null,"Santa Cruz",null),
("Higor Antonio delsoto","Rua Erika Arias Barrado",2387,null,"Santa Cruz","Escola"),
("Icaro Cavalcante Dourado","Rua Erica Aparecida Martins Siqueira",2481,null,"Santa Cruz",null),
("Ingrid Marçal","Rua Elis Cristina Montoro Hernandes Ervolino",2575,null,"Santa Cruz","Campinho"),
("Jeane Aparecida Menegueli","Rua Elias Adriano Nogueira da Silva",222,null,"Santa Cruz",null),
("Jefferson Barbosa Belo da Silva","Rua Elaine Cecília Gatto",223,null,"Santa Cruz",null),
("Jefferson Carlos Pedroso","Rua Eduardo Henrique Spies",224,null,"Santa Cruz","suermercado"),
("Jessé Italo Silva","Rua Eduardo de Paula Lima Nascimento",225,null,"Santa Cruz",null),
("José Eugênio de Mira","Rua Ednei Jose de Almeida Junior",226,null,"Bela Vista",null),
("José Rafael Pilan","Rua Edinilson da Silva Vida",227,null,"Bela Vista",null),
("José Renato Paviotti","Rua Edinei Peres Legaspe",228,null,"Bela Vista",null),
("José Santiago Moreira de Mello","Rua Ederlon Barbosa Cruz",229,null,"Bela Vista",null),
("Josiane Rosa de Oliveira Gaia Pimenta","Rua Eder Almeida Batista de Oliveira",230,null,"Bela Vista",null),
("Juliana de Sousa Ribeiro","Rua Dyogo Porfirio Almeida Santos",231,null,"Dom Bosco",null),
("Liliam Sayuri Sakamoto","Rua Draylson Micael de Souza",232,null,"Dom Bosco","Igreja"),
("Lucas Hermann Negri","Rua Douglas Brito damalio",233,null,"Dom Bosco","Farmácia"),
("Luciano Rossi","Rua Diogo Paulino da Cruz dos Santos",234,null,"Dom Bosco",null),
("Luciano Rovanni Do Nascimento","Rua Diogo Matos da Silva",235,null,"Dom Bosco","Escola"),
("Marcelo Do Carmo Vieira Scomparim","Rua Diego Rafael Moraes",236,null,"Zambom",null),
("Marcelo José Vigorito Campara","Rua Deysiane Matos Sande",237,null,"Zambom","Campinho"),
("Murilo Gleyson Gazzola","Rua Denis Henrique Caixeta",238,null,"Zambom",null),
("Ovídio José Francisco","Rua Deivison Shindi Takatu",239,null,"Dom Bosco",null),
("Patrícia Fernanda da Silva Freitas","Rua Debora Barbosa Aires",240,null,"Dom Bosco","suermercado"),
("Paula Leticia Santos Lima","Rua Darvin Ames",241,null,"Dom Bosco",null),
("Rafael Tomé de Souza","Rua Danilo César Pereira",242,null,"Dom Bosco",null),
("Rafaela de Jesus Alencar","Rua Claudiney Ramos Tinoco",243,null,"Dom Bosco","Igreja"),
("Ramon Simões Abílio","Rua Claudiane Mendes Trigueiro Silva",244,null,"Dom Bosco","Farmácia"),
("Raphael Hungaro Moretti","Rua Claudemir de Souza Freitas Junior",245,null,"Dom Bosco",null),
("Sara Luzia de Melo","Rua Cesar Augusto Pascali Rago",246,null,"Dom Bosco","Escola"),
("Sergio Willians Poneli","Rua Carlos Roberto Do Nascimento Costa",247,null,"Dom Bosco",null),
("Silvia Roberta de Jesus Garcia","Rua Carlos Roberto de Oliveira Cazelatto Junior",248,null,"Dom Bosco","Campinho"),
("Suéllen Rodolfo Martinelli","Rua Carlos César Farias de Souza",249,null,"Zambom",null),
("Taynara Cerigueli Dutra","Rua Bernardo Moreira Zabadal",250,null,"Zambom",null),
("Thamires de Campos Luz","Rua Bento Rafael Siqueira",251,null,"Zambom","suermercado"),
("Viviane Mello Bonadia dos Santos","Rua Argemiro Pentian Junior",252,null,"Zambom",null),
("Walter Paulo Costenaro","Rua Anisio Alfredo da Silva Junior",253,null,"Zambom",null),
("Wellington Fabio de Oliveira Martins","Rua André Luyde da Silva Souza",254,null,"Zambom",null),
("André Luyde da Silva Souza","Rua Ana Claudia Maciel",255,null,"Zambom",null),
("Anisio Alfredo da Silva Junior","Rua Ana Cláudia de Moura Laurentino",256,null,"Zambom",null),
("Carlos César Farias de Souza","Rua Amanda Cristina davi Resende",257,null,"Zambom",null),
("Dyogo Porfirio Almeida Santos","Rua Alisson Linhares de Carvalho",258,null,"Zambom",null),
("Edinilson da Silva Vida","Rua Adriano da Silva Ferreira",259,null,"Zambom",null),
("Everton Jose de Souza","Rua Adelcio Biazi",260,null,"Zambom",null);

insert into Telefones(cliente_id, Telefone) values
(1,"19993452345"),
(1,"19984212444"),
(2,"19932342344"),
(2,"19942342355"),
(3,"1934567832"),
(3,"1930022834"),
(4,"1934566453"),
(4,"1930023351"),
(5,"19943454553"),
(5,"1930026509"),
(6,"1923234255"),
(6,"1930022768"),
(7,"19839234299"),
(7,"1930030641"),
(8,"1930030376"),
(8,"1930022756"),
(9,"1930031839"),
(9,"1930027165"),
(9,"1930024182"),
(10,"1930030115"),
(10,"1930030796"),
(11,"1930031286"),
(11,"1930022424"),
(12,"1930031664"),
(12,"1930025914"),
(12,"1930029833"),
(12,"1930030615"),
(13,"1930027583"),
(13,"1930033176"),
(14,"1930029980"),
(14,"1930023520"),
(15,"1930022692"),
(15,"1930027585"),
(16,"1930033086"),
(16,"1930033196"),
(17,"1930032224"),
(17,"1930026622"),
(18,"1930029528"),
(18,"1930032868"),
(19,"1930025167"),
(19,"1930023385"),
(20,"1930025793"),
(20,"1930022535"),
(21,"1930022177"),
(21,"1930030492"),
(22,"1930023002"),
(22,"1930033540"),
(23,"1930028742"),
(23,"1930027031"),
(24,"1930022145"),
(24,"1930032426"),
(25,"1930031341"),
(25,"1930031459"),
(25,"1930025470"),
(26,"1930022475"),
(26,"1930031892"),
(26,"1930031125"),
(27,"1930029559"),
(27,"1930027198"),
(27,"1930025398"),
(28,"1930024870"),
(28,"1930022148"),
(28,"1930027067"),
(29,"1930031629"),
(29,"1930029346"),
(29,"1930032590"),
(30,"1930031739"),
(30,"1930025218"),
(30,"1930030691"),
(31,"1930023399"),
(31,"1930031587"),
(31,"1930027720"),
(32,"1930023167"),
(32,"1930030016"),
(32,"1930030076"),
(33,"1930032098"),
(33,"1930029615"),
(33,"1930025992"),
(34,"1930023841"),
(34,"1930029951"),
(34,"1930027261"),
(35,"1930023831"),
(35,"1930027732"),
(35,"1930028718"),
(36,"1930027345"),
(36,"1930029844"),
(36,"1930032451"),
(37,"1930022263"),
(37,"1930030446"),
(37,"1930024362"),
(38,"1930023400"),
(38,"1930023013"),
(38,"1930032090"),
(39,"1930031783"),
(39,"1930026009"),
(39,"1930023440"),
(40,"1930030951"),
(40,"1930030265"),
(40,"1930027160"),
(40,"1930031588"),
(40,"1930031532"),
(41,"1930026115"),
(41,"1930027073"),
(41,"1930027676"),
(42,"1930027725"),
(42,"1930029158"),
(42,"1930030541"),
(43,"1930033179"),
(43,"1930022927"),
(43,"1930022783"),
(44,"1930030621"),
(44,"1930025970"),
(44,"1930022592"),
(45,"1930025200"),
(45,"1930031980"),
(45,"1930022167"),
(46,"1930025803"),
(46,"1930031305"),
(46,"1930030584"),
(47,"1930025281"),
(47,"1930029896"),
(47,"1930033039"),
(48,"1930030804"),
(48,"1930030014"),
(48,"1930030042"),
(49,"1930033143"),
(49,"1930023803"),
(49,"1930028526"),
(50,"1930025254"),
(50,"1930023498"),
(50,"1930033557"),
(51,"1930026504"),
(51,"1930033397"),
(51,"1930023781"),
(52,"1930024260"),
(52,"1930029023"),
(52,"1930025432"),
(53,"1930029910"),
(53,"1930031207"),
(53,"1930027217"),
(54,"1930030606"),
(54,"1930026080"),
(54,"1930030827"),
(55,"1930027992"),
(55,"1930031715"),
(55,"1930029165"),
(56,"1930032888"),
(56,"1930023794"),
(56,"1930023163"),
(57,"1930033292"),
(57,"1930029582"),
(57,"1930027265"),
(58,"1930028115"),
(58,"1930022966"),
(58,"1930024299"),
(59,"1930025357"),
(59,"1930025619"),
(59,"1930028621"),
(60,"1930030980"),
(60,"1930033493"),
(60,"1930027537"),
(61,"1930032948"),
(61,"1930024675"),
(61,"1930030659"),
(62,"1930022495"),
(62,"1930033151"),
(62,"1930024627"),
(63,"1930032391"),
(63,"1930027831"),
(63,"1930029803"),
(64,"1930032594"),
(64,"1930028089"),
(64,"1930028909"),
(65,"1930022114"),
(65,"1930022824"),
(65,"1930032338"),
(66,"1930022353"),
(66,"1930031340"),
(66,"1930028258"),
(67,"1930031036"),
(67,"1930025274"),
(67,"1930023273"),
(68,"1930030921"),
(68,"1930027790"),
(68,"1930030727"),
(69,"1930022156"),
(69,"1930030296"),
(69,"1930023616"),
(70,"1930029318"),
(70,"1930025861"),
(70,"1930022318"),
(71,"1930031543"),
(71,"1930027053"),
(71,"1930029024"),
(72,"1930032892"),
(72,"1930028595"),
(72,"1930029775"),
(73,"1930033374"),
(73,"1930031704"),
(73,"1930025889"),
(74,"1930031385"),
(74,"1930028300"),
(75,"1930026091"),
(75,"1930029355"),
(76,"1930025087"),
(76,"1930026917"),
(77,"1930028831"),
(77,"1930023821"),
(78,"1930030021"),
(78,"1930027324"),
(79,"1930026076"),
(79,"1930033524"),
(80,"1930027232"),
(80,"1930025728"),
(81,"1930027461"),
(81,"1930024606"),
(82,"1930022991"),
(82,"1930025648"),
(83,"1930029675"),
(83,"1930032398"),
(84,"1930030326"),
(84,"1930030117"),
(85,"1930026338"),
(85,"1930026927"),
(86,"1930022281"),
(86,"1930022359"),
(87,"1930027774"),
(87,"1930029138"),
(88,"1930023218"),
(88,"1930024003"),
(89,"1930023323"),
(89,"1930029876"),
(90,"1930024962"),
(90,"1930032556"),
(91,"1930029315"),
(91,"1930029889"),
(91,"1930022120"),
(92,"1930032517"),
(92,"1930032298"),
(92,"1930027798"),
(93,"1930032091"),
(93,"1930023111"),
(93,"1930030646"),
(94,"1930025140"),
(94,"1930025035"),
(95,"1930022168"),
(95,"1930028731"),
(96,"1930022427"),
(96,"1930023230"),
(97,"1930027169"),
(97,"1930030528"),
(98,"1930030627"),
(98,"1930025580"),
(99,"1930033290"),
(99,"1930022106"),
(100,"1930025251"),
(100,"1930025721"),
(101,"1930030392"),
(101,"1930028227"),
(102,"1930030490"),
(102,"1930029085"),
(103,"19994556355"),
(103,"1930029049"),
(103,"1930031157"),
(104,"1930027393"),
(104,"1930028172"),
(104,"1930028796"),
(105,"1930032618"),
(105,"1930029060"),
(105,"1930032703");
-- Inseridos dados de teste sempre recentes utilizando as funções Date_sub() e curdate()
insert into Pedidos(cliente_id, data, hora) values(1,DATE_SUB(curdate(),INTERVAL 10 DAY),"13:54:00");
insert into Pedidos(cliente_id, data, hora) values(2,DATE_SUB(curdate(),INTERVAL 10 DAY),"12:12:00");
insert into Pedidos(cliente_id, data, hora) values(2,DATE_SUB(curdate(),INTERVAL 10 DAY),"14:12:00");
insert into Pedidos(cliente_id, data, hora) values(3,DATE_SUB(curdate(),INTERVAL 10 DAY),"14:15:00");
insert into Pedidos(cliente_id, data, hora) values(3,DATE_SUB(curdate(),INTERVAL 9 DAY),"17:15:00");
insert into Pedidos(cliente_id, data, hora) values(4,DATE_SUB(curdate(),INTERVAL 9 DAY),"15:25:00");
insert into Pedidos(cliente_id, data, hora) values(4,DATE_SUB(curdate(),INTERVAL 9 DAY),"18:20:00");
insert into Pedidos(cliente_id, data, hora) values(5,DATE_SUB(curdate(),INTERVAL 8 DAY),"18:25:00");
insert into Pedidos(cliente_id, data, hora) values(6,DATE_SUB(curdate(),INTERVAL 8 DAY),"21:30:00");
insert into Pedidos(cliente_id, data, hora) values(7,DATE_SUB(curdate(),INTERVAL 8 DAY),"24:35:00");
insert into Pedidos(cliente_id, data, hora) values(8,DATE_SUB(curdate(),INTERVAL 8 DAY),"20:40:00");
insert into Pedidos(cliente_id, data, hora) values(9,DATE_SUB(curdate(),INTERVAL 8 DAY),"23:45:00");
insert into Pedidos(cliente_id, data, hora) values(10,DATE_SUB(curdate(),INTERVAL 7 DAY),"22:50:00");
insert into Pedidos(cliente_id, data, hora) values(10,DATE_SUB(curdate(),INTERVAL 7 DAY),"23:55:00");
insert into Pedidos(cliente_id, data, hora) values(11,DATE_SUB(curdate(),INTERVAL 7 DAY),"13:59:00");
insert into Pedidos(cliente_id, data, hora) values(11,DATE_SUB(curdate(),INTERVAL 7 DAY),"09:54:00");
insert into Pedidos(cliente_id, data, hora) values(11,DATE_SUB(curdate(),INTERVAL 7 DAY),"08:21:00");
insert into Pedidos(cliente_id, data, hora) values(12,DATE_SUB(curdate(),INTERVAL 7 DAY),"09:20:00");
insert into Pedidos(cliente_id, data, hora) values(13,DATE_SUB(curdate(),INTERVAL 6 DAY),"09:05:00");
insert into Pedidos(cliente_id, data, hora) values(11,DATE_SUB(curdate(),INTERVAL 6 DAY),"14:12:00");
insert into Pedidos(cliente_id, data, hora) values(11,DATE_SUB(curdate(),INTERVAL 6 DAY),"11:12:00");
insert into Pedidos(cliente_id, data, hora) values(12,DATE_SUB(curdate(),INTERVAL 6 DAY),"13:10:00");
insert into Pedidos(cliente_id, data, hora) values(13,DATE_SUB(curdate(),INTERVAL 5 DAY),"13:00:00");
insert into Pedidos(cliente_id, data, hora) values(15,DATE_SUB(curdate(),INTERVAL 5 DAY),"15:00:00");
insert into Pedidos(cliente_id, data, hora) values(16,DATE_SUB(curdate(),INTERVAL 5 DAY),"16:01:00");
insert into Pedidos(cliente_id, data, hora) values(17,DATE_SUB(curdate(),INTERVAL 5 DAY),"17:02:00");

insert into Pizzas(nome, descricao, valor) values("À Moda da Casa","Molho de tomate fresco, mussarela especial, presunto cozido picado, ovos, cebola fatiada, cobertura de catupiry, orégano e azeitonas pretas",32.93);
insert into Pizzas(nome, descricao, valor) values("Alho e Óleo","Molho de tomate fresco, alho crocante coberto com parmesão, orégano e azeitonas pretas",32.77);
insert into Pizzas(nome, descricao, valor) values("Aliche","Molho especial de tomate fresco, filés de aliche importado, orégano e azeitonas pretas",32.61);
insert into Pizzas(nome, descricao, valor) values("Ao Funghi","Molho de tomate fresco, mussarela especial, champignon fatiado, manjericão fresco, orégano e azeitonas pretas",32.45);
insert into Pizzas(nome, descricao, valor) values("Atum","Molho de tomate fresco, atum especial sólido, cebola fatiada, orégano e azeitonas pretas",32.29);
insert into Pizzas(nome, descricao, valor) values("Baiana","Molho de tomate fresco, calabresa moída levemente apimentada, ovos cozidos picados, cebola fatiada, orégano e azeitonas pretas",32.13);
insert into Pizzas(nome, descricao, valor) values("Bauru","Molho de tomate fresco, presunto cozido picado, mussarela especial, rodelas de tomate, orégano e azeitonas pretas",31.97);
insert into Pizzas(nome, descricao, valor) values("Caipira","Molho de tomate fresco, frango desfiado levemente temperado, cobertura de catupiry, milho verde, orégano e azeitonas pretas",31.81);
insert into Pizzas(nome, descricao, valor) values("Calabresa","Molho de tomate fresco, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas",31.65);
insert into Pizzas(nome, descricao, valor) values("Camponesa","Molho de tomate fresco, cobertura de catupiry, milho verde, orégano e azeitonas pretas",31.49);
insert into Pizzas(nome, descricao, valor) values("Canadense","Molho de tomate fresco, lombo canadense fatiado, cobertura de catupiry, rodelas de cebola, orégano e azeitonas pretas",31.33);
insert into Pizzas(nome, descricao, valor) values("Capri","Molho de tomate fresco, fatias de lombo canadense, mussarela especial, rodelas de tomate, manjericão fresco, orégano e azeitonas pretas",31.17);
insert into Pizzas(nome, descricao, valor) values("Catupiry","Molho de tomate fresco, cobertura de catupiry, orégano e azeitonas pretas",31.01);
insert into Pizzas(nome, descricao, valor) values("Cubana","Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com mussarela especial, polvilhado de parmesão, orégano e azeitonas pretas",30.85);
insert into Pizzas(nome, descricao, valor) values("Escarola","Molho de tomate fresco, escarola refogada alho e óleo, filés de aliche importada, coberta com mussarela especial, orégano e azeitonas pretas",35.49);
insert into Pizzas(nome, descricao, valor) values("Firense","Molho de tomate fresco, atum sólido especial, milho verde, coberto com catupiry, orégano e azeitonas pretas",35.33);
insert into Pizzas(nome, descricao, valor) values("Frango","Molho de tomate fresco, peito de frango desfiado levemente temperado, coberto com catupiry, orégano e azeitonas pretas",35.17);
insert into Pizzas(nome, descricao, valor) values("Gramute","Molho de tomate fresco, mussarela especial, presunto cozido picado, champignon fatiado, orégano e azeitonas pretas",35.01);
insert into Pizzas(nome, descricao, valor) values("Gratinada","Molho de tomate fresco, cobertura de catupiry, camada de provolone , salpicada de parmesão, orégano e azeitonas pretas",34.85);
insert into Pizzas(nome, descricao, valor) values("Grega","Molho de tomate fresco, palmito macio em rodelas, ervilhas, cobertura de mussarela especial, orégano e azeitonas pretas",34.69);
insert into Pizzas(nome, descricao, valor) values("Imperial","Molho de tomate fresco, mussarela especial, atum sólido, champignon fatiado, orégano e azeitonas pretas",34.53);
insert into Pizzas(nome, descricao, valor) values("Margherita","Molho de tomate fresco, mussarela especial, rodelas de tomate, salpicada de parmesão, manjericão fresco, orégano e azeitonas pretas",34.37);
insert into Pizzas(nome, descricao, valor) values("Matriciana","Molho de tomate fresco, mussarela especial, champignon fatiado, cobertura de parmesão, orégano e azeitonas pretas",34.21);
insert into Pizzas(nome, descricao, valor) values("Mexicana","Molho de tomate fresco, mussarela especial, presunto cozido picado, milho verde, orégano e azeitonas pretas",34.05);
insert into Pizzas(nome, descricao, valor) values("Moda do Clientes","Molho de tomate fresco, livre escolha dos ingredientes ( máx.4 ), orégano e azeitonas pretas",33.89);
insert into Pizzas(nome, descricao, valor) values("Mussarela","Molho de tomate fresco, cobertura de mussarela especial, orégano e azeitonas pretas",33.73);
insert into Pizzas(nome, descricao, valor) values("Napolitalho","Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmesão, alho crocante, orégano e azeitonas pretas",33.57);
insert into Pizzas(nome, descricao, valor) values("Napolitana","Molho de tomate fresco, mussarela especial, rodelas de tomate, queijo parmesão, orégano e azeitonas pretas",33.41);
insert into Pizzas(nome, descricao, valor) values("Oba Oba","Molho de tomate fresco, peito de frango desfiado levemente temperado, mussarela especial, bacon fatiado, orégano e azeitonas pretas",33.25);
insert into Pizzas(nome, descricao, valor) values("Palmito","Molho de tomate fresco, palmito macio em rodelas, coberto com catupiry, orégano e azeitonas pretas",33.09);
insert into Pizzas(nome, descricao, valor) values("Portuguesa","Molho de tomate fresco, presunto cozido, ovos picados, rodelas de cebola, cobertura de mussarela especial, orégano e azeitonas pretas",30.69);
insert into Pizzas(nome, descricao, valor) values("Provolone","Molho de tomate fresco, coberto com queijo provolone, champignon fatiado, rodelas de tomate, orégano e azeitonas pretas",30.53);
insert into Pizzas(nome, descricao, valor) values("Quatro Queijos","Molho de tomate fresco, mussarela especial, camada de catupiry, provolone, salpicado com gorgonzola, orégano e azeitonas pretas",30.37);
insert into Pizzas(nome, descricao, valor) values("Romana","Molho de tomate fresco, mussarela especial, rodelas de tomate, filés de aliche importado, orégano e azeitonas pretas",30.21);
insert into Pizzas(nome, descricao, valor) values("Rústica","Molho de tomate fresco, calabresa especial fatiada, alho crocante, rodelas de cebola, orégano e azeitonas pretas",30.05);
insert into Pizzas(nome, descricao, valor) values("Se Liga","molho de tomate fresco, fatias de lombo canadense, cobertura de provolone, orégano e azeitonas pretas",29.89);
insert into Pizzas(nome, descricao, valor) values("Siciliana","Molho de tomate fresco, mussarela especial, fatias de bacon, champignon fatiado, orégano e azeitonas pretas",29.73);
insert into Pizzas(nome, descricao, valor) values("Torino","Molho de tomate fresco, calabresa especial fatiada, palmito macio em rodelas, orégano e azeitonas pretas",29.57);
insert into Pizzas(nome, descricao, valor) values("Toscana","Molho de tomate fresco, calabresa moída especial, cobertura de mussarela, orégano e azeitonas pretas",29.41);
insert into Pizzas(nome, descricao, valor) values("Veneza","Molho de tomate fresco, presunto cozido picado, azeitona verde fatiada, cobertura de mussarela especial e orégano",29.25);
insert into Pizzas(nome, descricao, valor) values("Vienense","Molho de tomate fresco, mussarela especial, calabresa especial fatiada, rodelas de cebola, orégano e azeitonas pretas",29.09);

-- Insert com select para pegar o valor da Pizzas e copiar para o valor doítem Pedidos
-- OBS: Supondo que as Pizzass tenham sido vendidas pelo preço cadastrado

insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,1,1, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,3,2, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,5,3, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,7,4, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,8,5, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,11,1, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(1,13,2, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,1,3, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,3,4, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,5,5, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,7,1, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,8,2, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,11,3, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(2,13,4, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,7,5, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,5,1, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,8,2, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,9,3, (select valor from Pizzas where pizza_id = 9));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,3,4, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,10,5, (select valor from Pizzas where pizza_id = 10));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(3,16,1, (select valor from Pizzas where pizza_id = 16));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,22,2, (select valor from Pizzas where pizza_id = 22));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,23,3, (select valor from Pizzas where pizza_id = 23));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,8,4, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,11,5, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,13,1, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,7,2, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(4,5,3, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,8,4, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,9,5, (select valor from Pizzas where pizza_id = 9));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,3,1, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,10,2, (select valor from Pizzas where pizza_id = 10));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,16,3, (select valor from Pizzas where pizza_id = 16));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,22,4, (select valor from Pizzas where pizza_id = 22));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(5,23,5, (select valor from Pizzas where pizza_id = 23));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,8,1, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,11,2, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,17,3, (select valor from Pizzas where pizza_id = 17));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,16,4, (select valor from Pizzas where pizza_id = 16));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,15,5, (select valor from Pizzas where pizza_id = 15));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,14,1, (select valor from Pizzas where pizza_id = 14));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(6,13,2, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,12,3, (select valor from Pizzas where pizza_id = 12));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,11,4, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,10,5, (select valor from Pizzas where pizza_id = 10));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,9,10, (select valor from Pizzas where pizza_id = 9));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,8,2, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,7,3, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(7,6,4, (select valor from Pizzas where pizza_id = 6));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(8,5,5, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(8,4,1, (select valor from Pizzas where pizza_id = 4));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(8,3,1, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(8,2,2, (select valor from Pizzas where pizza_id = 2));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(9,1,3, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(9,1,4, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(9,3,5, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(9,5,10, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(10,7,2, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(10,8,3, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(10,1,4, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(10,3,5, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(11,5,1, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(11,7,1, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(11,8,2, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(11,11,3, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(12,13,4, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(13,1,5, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(14,3,1, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(15,5,2, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(16,7,3, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(17,8,11, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(18,22,5, (select valor from Pizzas where pizza_id = 22));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(19,1,1, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(20,3,1, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(20,5,2, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(20,7,3, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(20,8,4, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(21,11,5, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(21,13,1, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(21,1,2, (select valor from Pizzas where pizza_id = 1));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(21,3,3, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(22,5,4, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(22,7,5, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(22,8,1, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(22,25,1, (select valor from Pizzas where pizza_id = 25));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(23,24,2, (select valor from Pizzas where pizza_id = 24));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(23,23,3, (select valor from Pizzas where pizza_id = 23));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(23,22,4, (select valor from Pizzas where pizza_id = 22));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(23,21,5, (select valor from Pizzas where pizza_id = 21));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(24,20,1, (select valor from Pizzas where pizza_id = 20));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(25,19,2, (select valor from Pizzas where pizza_id = 19));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,18,3, (select valor from Pizzas where pizza_id = 18));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,17,4, (select valor from Pizzas where pizza_id = 17));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,16,5, (select valor from Pizzas where pizza_id = 16));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,15,1, (select valor from Pizzas where pizza_id = 15));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,14,1, (select valor from Pizzas where pizza_id = 14));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,13,2, (select valor from Pizzas where pizza_id = 13));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,12,3, (select valor from Pizzas where pizza_id = 12));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,11,4, (select valor from Pizzas where pizza_id = 11));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,10,5, (select valor from Pizzas where pizza_id = 10));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,9,11, (select valor from Pizzas where pizza_id = 9));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,8,2, (select valor from Pizzas where pizza_id = 8));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,7,3, (select valor from Pizzas where pizza_id = 7));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,6,13, (select valor from Pizzas where pizza_id = 6));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,5,5, (select valor from Pizzas where pizza_id = 5));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,4,1, (select valor from Pizzas where pizza_id = 4));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,3,1, (select valor from Pizzas where pizza_id = 3));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,2,2, (select valor from Pizzas where pizza_id = 2));
insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(26,1,3, (select valor from Pizzas where pizza_id = 1));

-- Exemplo de Update para preencher o valor do Pedidos somando as Pizzass
-- OBS: Somente exemplo, por ser um campo calculado, não é necessário existir na tabela.

update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 1) where pedido_id = 1;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 2) where pedido_id = 2;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 3) where pedido_id = 3;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 4) where pedido_id = 4;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 5) where pedido_id = 5;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 6) where pedido_id = 6;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 7) where pedido_id = 7;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 8) where pedido_id = 8;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 9) where pedido_id = 9;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 10) where pedido_id = 10;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 11) where pedido_id = 11;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 12) where pedido_id = 12;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 13) where pedido_id = 13;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 14) where pedido_id = 14;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 15) where pedido_id = 15;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 16) where pedido_id = 16;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 17) where pedido_id = 17;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 18) where pedido_id = 18;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 19) where pedido_id = 19;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 20) where pedido_id = 20;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 21) where pedido_id = 21;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 22) where pedido_id = 22;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 23) where pedido_id = 23;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 24) where pedido_id = 24;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 25) where pedido_id = 25;
update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 26) where pedido_id = 26;

select * from Clientes;
select * from Pizzas;
select * from Telefones;
select * from Pedidos;
select * from Itens_Pedido;

-- Mostrar todas as tabelas no fim do script
show tables;
```