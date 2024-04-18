//POO Criar um Objeto JavaScript DIRETAMENTE
const objeto = {}
//Atributos
objeto.nome = "Márcia"
objeto.idade = 19
objeto.peso = 66.5
objeto.altura = 1.58
//Mostrar o Objeto
console.log(objeto)
//Método - Obter IMC (Índice de Massa Corpórea)
objeto.getImc = () => {
    return Number((objeto.peso / (objeto.altura ** 2)).toFixed(2))
}
//Mostrar o resultado do método
console.log(objeto.getImc())
//Incorporar o resultado do Método a um atributo
objeto.imc = objeto.getImc()
//Mostrar o Objeto com o Método incorporado
console.log(objeto)
//Resultado
/*
{
  nome: 'Márcia',
  idade: 19,
  peso: 66.5,
  altura: 1.58,
  getImc: [Function (anonymous)],
  imc: 26.64
}
*/

//Criar um Objeto JavaScript a partir de uma Classe
class Paciente{
    //Atributos
    nome
    idade
    peso
    altura
    imc = this.getImc()
    //Método
    getImc(){
        return Number((this.peso / this.altura ** 2).toFixed(2))
    }
}
//Mostrar somente a classe
console.log(Paciente)
//Instânciar a classe paciente em um objeto
const paciente1 = new Paciente()
//Mostrar o objeto instanciado na classe Paciente
console.log(paciente1)
//O Objeto paciente1 está com todos os atributos e métodos indefinidos
paciente1.nome = 'Alfredo'
paciente1.idade = 25
paciente1.peso = 88
paciente1.altura = 1.92
//Mostrar Paciente 1
console.log(paciente1)
paciente1.imc = paciente1.getImc()
console.log(paciente1)


