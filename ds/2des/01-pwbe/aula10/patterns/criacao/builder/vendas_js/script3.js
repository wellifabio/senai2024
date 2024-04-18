const venda = {
    constructor(prod, qtd, prc) {
        this.produto = prod;
        this.quantidade = qtd;
        this.preco = prc;
    },

    subtotal() {
        return this.quantidade * this.preco;
    },

    toString() {
        return this.produto + " " + this.quantidade + " " + this.preco + " " + this.subtotal();
    }
}

venda.constructor("Parafuso", 10, 1.5);
console.log(venda.toString());