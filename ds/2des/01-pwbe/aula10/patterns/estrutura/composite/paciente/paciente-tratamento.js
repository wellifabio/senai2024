
//Classe Paciente composta por N Tratamentos
class Paciente {
    constructor(nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.getImc()
    }
    getImc(){
        return Number((this.peso / this.altura ** 2).toFixed(2))
    }
}

class Tratamento {
    constructor(nome, descricao, duracao) {
        this.nome = nome
        this.descricao = descricao
        this.duracao = duracao
    }
}

//Pattern COMPOSITE
class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
    remove(componente) {
        const index = this.filhos.indexOf(componente);
        this.filhos.splice(index, 1);
    }
    getfilho(index) {
        return this.filhos[index];
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
        this.filhos.forEach(filho => {
            filho.print();
        });
    }
}

//Exemplo de uso
const paciente1 = new Composite(new Paciente("Jair Silva", 45, 66, 1.68))
paciente1.add(new Folha(new Tratamento('Hipertrofia', 'Muita carga poucas repetições', 90)))
paciente1.add(new Folha(new Tratamento('Aerobico', 'Média carga media repetições', 120)))

const paciente2 = new Composite(new Paciente("Márcia Machado", 39, 78, 1.59))
paciente2.add(new Folha(new Tratamento('Hipertrofia', 'Muita carga poucas repetições', 90)))
paciente2.add(new Folha(new Tratamento('Cardiovascular', 'Pouca carga muitas repetições', 60)))
paciente2.add(new Folha(new Tratamento('Aerobico', 'Média carga media repetições', 120)))

console.log(paciente1)
paciente2.print()