/*
 * Design Pattern Comportamental Observer
 * Quando precisamos que outros objetos sejam atualizados quando um objeto muda
 * Exemplo
 * Um programa que compara preços de um determinado produto em fornecedores diferentes
 * e atualiza o valor no estoque
 * https://www.youtube.com/watch?v=wiQdrH2YpT4
 * 
 * */

//Classe produto com um construtor e um método que atualiza o preço
class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    atualiza(fornecedor) {
        fornecedor.produtos.forEach(e => {
            if (this.nome == e.nome && this.valor > e.valor) {
                this.valor = e.valor;
                console.log("Produto " + e.nome + " atualizado para R$: " + e.valor);
            }
        });
    }
}

//Classe fornecedor com uma lista de produtos
class Fornecedor {
    produtos = [];
    constructor(nome, produto) {
        this.nome = nome;
        this.produtos.push(produto);
    }
    addProduto(produto) {
        this.produtos.push(produto);
    }
    show() {
        console.log(this.nome);
        this.produtos.forEach(e => {
            console.log(e);
        });
    }
}

//Classe estoque com uma lista de produtos
class Estoque {
    produtos = [];
    constructor(produto) {
        this.produtos.push(produto);
    }
    addProduto(produto) {
        this.produtos.push(produto);
    }
    observer(fornecedor) {
        this.produtos.forEach(e => {
            e.atualiza(fornecedor);
        })
    }
    show() {
        this.produtos.forEach(e => {
            console.log(e);
        });
    }
}

//Lista de produtos a ser observada
const forns = ["PapelArte", "PapelTudo", "Papeludo", "Kalunga"];
const nomes = ["Caneta", "Lápis", "Régua", "Borracha", "Caderno", "Compasso", "Transferidor", "Sufite", "Apontador", "Grafite"];

//Criar e preecher o estoque da loja com os 5 primeiros produtos e valores definidos manualmente
const estoque = new Estoque(new Produto(nomes[0], 5));
estoque.addProduto(new Produto(nomes[1], 3.5));
estoque.addProduto(new Produto(nomes[2], 8.5));
estoque.addProduto(new Produto(nomes[3], 2));
estoque.addProduto(new Produto(nomes[4], 12.9));

//Criar e preencher uma lista de fornecedores com produtos e preços aleatórios
const fornecedores = [];
for (i = 0; i < 4; i++) {//Cria 4 fornecedores aleatorios
    let produto = new Produto(nomes[Math.floor(Math.random() * 10)], parseFloat((Math.random() * 15).toFixed(2)));
    fornecedores.push(new Fornecedor(forns[i], produto));
    for (j = 0; j < 10; j++) {//Cadastra os 10 produtos com preços aleatporios
        produto = new Produto(nomes[j], parseFloat((Math.random() * 15).toFixed(2)));
        fornecedores[i].addProduto(produto);
    }
}

estoque.show();
fornecedores.forEach(e => {
    e.show();
});

//Para cada fornecedor estoque é atualizado
fornecedores.forEach(e => {
    estoque.observer(e);
});

estoque.show();