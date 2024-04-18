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

//Sem construtor
const venda1 = new Venda();
venda1.produto = "parafuso";
venda1.quantidade = 10;
venda1.preco = 1.5;
console.log(venda1.toString());

//Com construtor
const venda2 = new Venda("Parafuso", 10, 1.5);
console.log(venda2.toString());