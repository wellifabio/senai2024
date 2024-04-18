//Classe simples chamad Venda, com três atributos, método construtor e dois métodos
class Venda {

    constructor(prod, qtd, prc) {
        this.produto = prod;
        this.quantidade = qtd;
        this.preco = prc;
    }

    subtotal() {
        return this.quantidade * this.preco;
    }

    toString() {
        return this.produto + " " + this.quantidade + " " + this.preco + " " + this.subtotal();
    }
}

class Lista {
    //Um atributo ou método do tipo "static" não é instanciado (podemos utilizar como um Singleton)
    static vendas = []
}

Lista.vendas.push(new Venda("Parafuso", 10, 1.5));
Lista.vendas.push(new Venda("Porca", 10, 1.1));
Lista.vendas.push(new Venda("Arruela", 10, 1.2));
Lista.vendas.push(new Venda("Prego", 10, 1.3));

Lista.vendas.forEach(e => {
    console.log(e.toString())
});