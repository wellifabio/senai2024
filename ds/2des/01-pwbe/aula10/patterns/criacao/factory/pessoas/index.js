//Exemplo de como criar um objeto vazio
let objeto = {}

//Exemplo 1 Factory (Função que retorna um objeto)
function fabricaObjeto(){
    let objeto = {}
    return objeto;
}

//Utilizando a função
var objeto1 = fabricaObjeto()

//Atribuindo atributos e valores ao objeto
objeto1.nome = "Maria";

//Mostrando na tela o resultado
console.log(objeto1.nome);

//Exemplo 2 Factory (Classe)
function fabricarPessoa(nome, sobrenome){
    
    //Atributo
    let pessoa = {}

    //Construtor
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    //Metodo
    function nomeCompleto(){
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }

    pessoa.nomeCompleto = nomeCompleto()
    return pessoa
}

var pessoaA = fabricarPessoa("Maria","Souza")
var pessoaB = fabricarPessoa("Marcos","Almeida")

function showPessoas(){
    console.log(" Pessoa A: "+pessoaA.nomeCompleto)
    console.log(" Pessoa B: "+pessoaB.nomeCompleto)
}

showPessoas();