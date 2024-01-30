# Tipos de bancos de dados
- Não estruturado
  - TXT
  - DOC
  - PDF
  - XLS (Excel)
- Semi-estruturado
  - XML
  - JSON
- Estruturado
	- SGBD (Sistema Gerenciador de Banco de Dados)
	- Sem SGBD = CSV
	- Com SGBD
		- Não SQL (Ex: MongoDB, FireBase ...)
			- Não Relacional
		- SQL (Ex: Mysql, Oracle, SQL Server, Postgres, FireBird ...)
			- Relacionais

# Bancos de dados Relacionais
## MER x DER
- MER (Modelo Entidade Relacionamento)
- DER (Diagrama Entidade Relacionamento)
- Chave
	- Campo único que identifica o registro (A linha inteira de dados)
	- Chave Primária (Não se repete na tabela)
	- Chave Estrangeira (Se repete na tabela e sempre faz referência a uma chave primária em outra tabela)
- <b>Conceitual</b>
	- Mais próximo do problema,
	- descreve as concistências dos dados através dos relacionamentos
	- Não tem a necessidade de apresentar as chaves estrangeiras
	- Possui vários tipos de **cardinalidades**
		- 1 para 1
		- 1 para N
		- N para N
		- Min x Max
- <b>Lógico</b>
	- Mais próximo da solução
	- Possui **apenas** a **cardinalidades**
		- I para N
	- Chave primária e estrangeiras

## MER
|MER - Modelo Entidade Relacionamento|
|-|
|**Entidade1** (<u>Atributo chave primária</u>: tipo, Atributo: tipo, Atributo: tipo - modificador);|
|**Entidade2** (<u>Atributo chave primária</u>: tipo, Atributo: tipo, Atributo chave estrangeira: tipo – Referência [Entidade: chave primária]);|

### Exemplo: $Banco - Genérico
|MER - Modelo Entidade Relacionamento|
|-|
|**Clientes** (<u>cpf</u>: texto (20), nome_completo: texto (100), cep: texto (10), numero: texto (5) - nulo, complemento: texto (50), telefone: texto (20) - nulo, nascimento: data);|
|**Conta** (<u>numero_da_conta</u>: inteiro, tipo: texto(20), cpf: texto (20) – Referencia [Clientes: cpf]);|
|**Movimentacoes** (<u>id</u>: inteiro – auto incremento, tipo: texto(15), valor: moeda, numero da conta: inteiro – Referencia [Conta: numero_da_conta]);|

### Atividades
Em grupos de no máximo 3 pessoas modele um bancos de dados escolnhendo um dos temas a seguir:
- **Transportadora** (Gestão de frotas e fretes [viagens])
- **Varegista** (Loja grande ou pequena como Casas Bahia, Magazine Luiza, sistema de vendas)
- **Academia** (Sistema de matrícula de alunos, pagamentos e frequência)
- **Escola** (Sitema de matrícula de alunos, turmas e cursos)
