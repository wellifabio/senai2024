# Aula09 - Design Patterns

Padrões de projeto ou soluções clássicas

## Padrões de projeto
Já utilizamos o padrão conhecido por **MVC** (Model, View, Condroller) que não pertence ao **GoF**

## Gof
- Gang of Four (Gangue dos quatro) um livro onde 4 programadores publicarams 23 Design Patterns **soluções clássicas** que se tornou um gia para novos programadores desde 1994 divididas em três categorias

### Criação
### Estrutura
### Comportamento
![Quadro pattherns](./patterns.png)

Estudaremos alguns destes padrões em nosso curso
### Estrutura - Composite
- Exemplo de um Objeto sem composite
```json
[
    {
        "cpf": "111.111.111-11",
        "nome_cliente": "Osvaldo Oliveira",
        "telefone": "19-06078-6843"
    },
    {
        "cpf": "111.111.111-11",
        "nome_cliente": "Osvaldo Oliveira",
        "telefone": "19-72077-0521"
    }
]
```
- Exemplo com composite
```json
{
    "cpf": "111.111.111-11",
    "nome_cliente": "Osvaldo Oliveira",
    "telefone": ["19-06078-6843","19-72077-0521"]
}
```

- Função que transforma uma lista simples em uma lista composta
```js
const compositeClientes = (lista) => {
    const listaComposta = [];
    let cpf = 0;
    lista.forEach(c => {
        if (cpf !== c.cpf) {
            c.telefones = []; //Cria uma lista de telefones
            c.telefones.push(c.telefone); //Acrescenta o telefone na lista
            delete c.telefone; //remover o campo telefone
            listaComposta.push(c);
            cpf = c.cpf;
        }else{
            listaComposta[listaComposta.length - 1].telefones.push(c.telefone);
        }
    });
    return listaComposta;
}
```
- Antes da função
```json
[
	{
		"cpf": "111.111.111-11",
		"nome_cliente": "Osvaldo Oliveira",
		"telefone": "19-06078-6843"
	},
	{
		"cpf": "111.111.111-11",
		"nome_cliente": "Osvaldo Oliveira",
		"telefone": "19-72077-0521"
	},
	{
		"cpf": "222.222.222-22",
		"nome_cliente": "Jaqueline Teixeira",
		"telefone": "19-23003-4864"
	},
	{
		"cpf": "333.333.333-33",
		"nome_cliente": "Keli Matos",
		"telefone": "19-06486-6449"
	},
	{
		"cpf": "333.333.333-33",
		"nome_cliente": "Keli Matos",
		"telefone": "19-53266-7923"
	},
	{
		"cpf": "444.444.444-44",
		"nome_cliente": "Ursula Souza",
		"telefone": "19-64378-2404"
	},
	{
		"cpf": "555.555.555-55",
		"nome_cliente": "Evandro Silva",
		"telefone": "19-53315-2734"
	}
]
```
- Resultado
```json
[
	{
		"cpf": "111.111.111-11",
		"nome_cliente": "Osvaldo Oliveira",
		"telefones": [
			"19-06078-6843",
			"19-72077-0521"
		]
	},
	{
		"cpf": "222.222.222-22",
		"nome_cliente": "Jaqueline Teixeira",
		"telefones": [
			"19-23003-4864"
		]
	},
	{
		"cpf": "333.333.333-33",
		"nome_cliente": "Keli Matos",
		"telefones": [
			"19-06486-6449",
			"19-53266-7923"
		]
	},
	{
		"cpf": "444.444.444-44",
		"nome_cliente": "Ursula Souza",
		"telefones": [
			"19-64378-2404"
		]
	},
	{
		"cpf": "555.555.555-55",
		"nome_cliente": "Evandro Silva",
		"telefones": [
			"19-53315-2734"
		]
	}
]
```