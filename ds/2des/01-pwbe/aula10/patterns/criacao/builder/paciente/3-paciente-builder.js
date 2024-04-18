//Criar uma classe paciente com o método construtor
class Tratamento {
    nome
    descricao
    duracao
    constructor(nome, descricao, duracao) {
        this.nome = nome
        this.descricao = descricao
        this.duracao = duracao
    }
}

class Paciente {
    nome
    idade
    peso
    altura
    imc
    tratamentos
    constructor(nome, idade, peso, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.getImc()
        this.tratamentos = []
    }
    getImc() {
        return Number((this.peso / this.altura ** 2).toFixed(2))
    }
    addTratamento(tratamento) {
        this.tratamentos.push(tratamento)
    }
    listarTratamentos() {
        console.log(`Paciente: ${this.nome}: ${JSON.stringify(this.tratamentos)}`)
    }
}

const tratamentos = [
    new Tratamento('Hipertrofia', 'Muita carga poucas repetições', 90),
    new Tratamento('Cardiovascular', 'Pouca carga muitas repetições', 60),
    new Tratamento('Aerobico', 'Média carga media repetições', 120)
]

class InterfaceBuilder {
    criaTratamento1() { }
    criaTratamento2() { }
    criaTratamento3() { }
}

class DoisTratamentos extends InterfaceBuilder {
    constructor(nome, idade, peso, altura) {
        super()
        this.paciente = new Paciente(nome, idade, peso, altura)
    }

    criaTratamento1() {
        this.paciente.addTratamento(tratamentos[0])
    }

    criaTratamento2() {
        this.paciente.addTratamento(tratamentos[1])
    }

    getPaciente() {
        return this.paciente
    }
}

class TresTratamentos extends InterfaceBuilder {
    constructor(nome, idade, peso, altura) {
        super()
        this.paciente = new Paciente(nome, idade, peso, altura)
    }

    criaTratamento1() {
        this.paciente.addTratamento(tratamentos[0])
    }

    criaTratamento2() {
        this.paciente.addTratamento(tratamentos[1])
    }

    criaTratamento3() {
        this.paciente.addTratamento(tratamentos[2])
    }

    getPaciente() {
        return this.paciente
    }
}

class Construtor {
    constructor() {
        this.builder = null
    }

    setBuilder(builder) {
        this.builder = builder
    }

    constroiTratamentos() {
        this.builder.criaTratamento1()
        this.builder.criaTratamento2()
        this.builder.criaTratamento3()
    }
}

//Aplicação
const construtor = new Construtor()
const builder1 = new DoisTratamentos("Jair Silva", 45, 66, 1.68)
const builder2 = new TresTratamentos("Márcia Machado", 39, 78, 1.59)

construtor.setBuilder(builder1)
construtor.constroiTratamentos()
const paciente1 = builder1.getPaciente()

construtor.setBuilder(builder2)
construtor.constroiTratamentos()
const paciente2 = builder2.getPaciente()

//Ver resultados
paciente1.listarTratamentos()
paciente2.listarTratamentos()