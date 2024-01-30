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

## MER - Dicionário de dados
|MER - Modelo Entidade Relacionamento - Dicionário de dados - Projeto: Genérico|
|-|
|**Entidade1** (<U>Atributo chave primária</U>: tipo, Atributo: tipo, Atributo: tipo - modificador);|
|**Entidade2** (<U>Atributo chave primária</U>: tipo, Atributo: tipo, Atributo chave estrangeira: tipo – Referência [Entidade: chave primária]);|

### Exemplo:
|MER - Modelo Entidade Relacionamento - Dicionário de dados - Projéto: Banco R$|
|-|
|**Clientes** (<U>cpf</U>: texto (20), nome_completo: texto (100), cep: texto (10), numero: texto (5) - nulo, complemento: texto (50) - nulo, telefone: texto (20) - nulo, nascimento: data);|
|**Contas** (<U>numero_conta</U>: inteiro, tipo: texto(20), cpf: texto (20) – Referencia [Clientes: cpf]);|
|**Movimentacoes** (<U>id</U>: inteiro – auto incremento, tipo: texto(15), valor: moeda, origem: texto(50), destino: texto(50), numero_conta: inteiro – Referencia [Conta: numero_conta]);|
#### Representação dos dados
<table>
<tr>
<td>Clientes</td>		
</tr>
<tr>
<td>

|cpf|nome_completo|cep|numero|complemento|telefone|nascimento|
|-|-|-|-|-|-|-|
|111.111.111-11|Arnaldo Coelho|13914-552||||1960-10-03|
|888.888.888-88|Solange Gomes|13914-553|23|BL14 AP44|19-98788-8789|1980-08-13|
|555.555.555-55|Ivone Silva Santos|13914-554|456A|Fundos|19-99878-8888|2001-05-26|
</td>
</tr>
<tr>
<td>Contas</td>
</tr>
<tr>
<td>

|numero_conta|tipo|cpf|
|-|-|-|
|777-7|CC|111.111.111-11|
|333-7|CC|888.888.888-88|
|333-8|Poupança|888.888.888-88|
|444-6|Salario|555.555.555-55|
|777-8|Poupança|555.555.555-55|
</td>
</tr>
<tr>
<td>Movimentacoes</td>
</tr>
<tr>
<td>

|id|tipo|valor|origem|destino|numero_conta|
|-|-|-|-|-|-|
|1001|Depósito|1000|CX Eletrônico|Esta conta|777-7|
|1002|Transferência|1500|PIX recebido do BB|Esta conta|333-8|
|1003|Transferência|1600|Pagamento Salário empresa XXX|Esta conta|444-6|
|1004|Depósito|300|CX Eletrônico|Esta conta|777-8|
|1005|Transferência|200|Esta conta|Este banco conta: 777-8|777-7|
|1006|Transferência|200|Este banco conta:777-7|Esta conta|777-8|
|1007|Saque|100|CX Eletrônico|Própria conta|777-7|
|1008|Saque|100|CX Eletrônico|Própria conta|333-7|
|1009|Depósito|200|CX Eletrônico|Própria conta|333-8|
|1010|Depósito|200|CX Eletrônico|Própria conta|777-8|
</td>
</tr>
</table>
### Atividades
Em grupos de no máximo 3 pessoas modele um bancos de dados escolnhendo um dos temas a seguir:
- **Projeto Transportadora** (Gestão de frotas e fretes [viagens])
- **Projeto Varegista** (Loja grande ou pequena como Casas Bahia, Magazine Luiza, sistema de vendas)
- **Projeto Academia** (Sistema de matrícula de alunos, pagamentos e frequência)
- **Projeto Escola** (Sitema de matrícula de alunos, turmas e cursos)
