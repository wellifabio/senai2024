//Criar uma classe paciente com o método construtor
class Paciente {
    nome
    idade
    peso
    altura
    imc
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

//Construir o Objeto paciente1 utilizando a classe Paciente com o construtor
const paciente1 = new Paciente('Jogina', 74, 48, 1.59)
//Mostrar o resultado
console.log(paciente1)
console.log(paciente1.getImc())

//Construit um objeto paciente2 sem todos os parametros
const paciente2 = new Paciente()
console.log(paciente2)
//Paciente 3 com menos parâmetros do que os especificados no construtor
const paciente3 = new Paciente('Xiforinculo', 30)
console.log(paciente2)
