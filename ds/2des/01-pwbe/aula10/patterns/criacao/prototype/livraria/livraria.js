class Livro {

    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    toString() {
        return this.id + " " + this.nome;
    }
}

class Livraria {
    livros = [];

    constructor(nome){
        this.nome = nome;
        this.prototipo();
    }

    prototipo() {
        for (let i = 0; i < 10; i++)
            this.livros.push(new Livro(i + 1, "Livro"));
    }

    toString() {
        return this.nome + " " + this.livros;
    }
}

const livraria1 = new Livraria("Saraiva");
const livraria2 = new Livraria("Nobel");
const livraria3 = new Livraria("Cultura");
livraria1.toString();
livraria2.toString();
livraria3.toString();