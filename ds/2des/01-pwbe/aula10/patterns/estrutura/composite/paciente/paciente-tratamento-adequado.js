
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

//Pattern COMPOSITE
class Componente {
    constructor(obj) {
        this.paciente = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Tratamento {
    constructor(nome, descricao, duracao) {
        this.nome = nome
        this.descricao = descricao
        this.duracao = duracao
    }
}

// representa os objetos compostos na árvore
class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.tratamentos = [];
    }
    add(componente) {
        this.tratamentos.push(componente);
    }
    remove(componente) {
        const index = this.tratamentos.indexOf(componente);
        this.tratamentos.splice(index, 1);
    }
    getfilho(index) {
        return this.tratamentos[index];
    }
    getObj() {
        return this.tratamentos;
    }
}

//Exemplo de uso
const paciente1 = new Composite(new Paciente("Jair Silva", 45, 66, 1.68))
paciente1.add(new Tratamento('Hipertrofia', 'Muita carga poucas repetições', 90))
paciente1.add(new Tratamento('Aerobico', 'Média carga media repetições', 120))

const paciente2 = new Composite(new Paciente("Márcia Machado", 39, 78, 1.59))
paciente2.add(new Tratamento('Hipertrofia', 'Muita carga poucas repetições', 90))
paciente2.add(new Tratamento('Cardiovascular', 'Pouca carga muitas repetições', 60))
paciente2.add(new Tratamento('Aerobico', 'Média carga media repetições', 120))

console.log(paciente1)
console.log(paciente2)