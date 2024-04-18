const venda1 = {
    subtotal() {
        return this.quantidade * this.preco;
    },

    toString() {
        return this.produto + " " + this.quantidade + " " + this.preco + " " + this.subtotal();
    }
}

venda1.produto = "parafuso";
venda1.quantidade = 10;
venda1.preco = 1.5;
console.log(venda1.toString());
