//Criar uma classe paciente com o método construtor
class Paciente {
    nome
    idade
    peso
    altura
    imc
    constructor(nome, peso, idade, altura) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = Number((peso / altura ** 2).toFixed(2))
    }
}

//Construir o Objeto paciente1 utilizando a classe Paciente com o construtor
const paciente1 = new Paciente('Jogina', 74, 48, 1.59)
//Mostrar o resultado
console.log(paciente1)