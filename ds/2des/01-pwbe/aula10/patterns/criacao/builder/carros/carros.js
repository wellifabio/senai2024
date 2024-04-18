//Pattern Builder (Construtor)
//Classes com construtores
class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo == undefined ? '' : modelo;
        this.marca = marca == undefined ? '' : marca;
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Argo {
    constructor(ano) {
        this.modelo = 'Argo';
        this.marca = 'Fiat';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Gol {
    constructor(ano) {
        this.modelo = 'Gol';
        this.marca = 'VW';
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

//Classe que compõe a classe Carro ou as outras
class Turbo {
    constructor(marca) {
        this.marca = marca == undefined ? 'Genérica' : marca;
    }
}

//Classe Builder - Complexa
class CarroBuilder {
    constructor(modelo, marca, ano) {
        if(modelo && marca && ano) {
            if(modelo == 'Argo') {
                this.carro = new Argo(ano);
            } else if(modelo == 'Gol') {
                this.carro = new Gol(ano);
            } else {
                this.carro = new Carro(modelo, marca, ano);
            }
        }else if(modelo && marca){
            if(modelo == 'Argo') {
                this.carro = new Argo();
            } else if(modelo == 'Gol') {
                this.carro = new Gol();
            } else {
                this.carro = new Carro(modelo, marca);
            }
        }else{
            this.carro = new Carro();
        }
    }

    setTurbo(turbo) {
        this.carro.turbo = new Turbo(turbo);
        return this;
    }

    build() {
        return this.carro;
    }
}

//Criando um carro com o Builder
const carro1 = new CarroBuilder('Argo', 'Fiat', 2020);
const carro2 = new CarroBuilder('Gol', 'VW');
carro2.setTurbo('Garrett');
const carro3 = new CarroBuilder('Onix', 'Chevrolet');
const carro4 = new CarroBuilder();

const carros = [
    carro1.build(),
    carro2.build(),
    carro3.build(),
    carro4.build()
];

console.log(carros);