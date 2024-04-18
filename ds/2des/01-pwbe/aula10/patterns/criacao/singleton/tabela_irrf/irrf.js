class IRRF {
    //O pattern Singleton é utilizado neste exemplo configurando os valores da tabela do IRRF do ano de 2023
    //Uma única vez, quando a classe é instanciada
    constructor() {
        if (!IRRF.instance) {
            this.taxas = [0, 7.5, 15, 22.5, 27.5];
            this.salarios = [0, 1903.98, 2826.65, 3751.05, 4664.68];
            this.deduzir = [0, 142.8, 354.8, 636.13, 869.36];
            IRRF.instance = this;
        }
        return IRRF.instance;
    }

    //Método que calcula o IRRF de acordo com o salário
    calculaIRRF(salario) {
        let i = 0;
        while (i < this.salarios.length && salario > this.salarios[i]) {
            i++;
        }
        return (salario * this.taxas[i - 1] / 100 - this.deduzir[i - 1]).toFixed(2);
    }
}

//Para testar criamos uma instância da classe IRRF e chamamos o método calculaIRRF
const irrf = new IRRF();
console.log(irrf.calculaIRRF(1000));
console.log(irrf.calculaIRRF(2000));
console.log(irrf.calculaIRRF(3000));
console.log(irrf.calculaIRRF(4000));
console.log(irrf.calculaIRRF(5000));
//Criamos uma nova instância da classe IRRF e chamamos o método calculaIRRF
const irrf2 = new IRRF();
console.log(irrf2.calculaIRRF(6000));
console.log(irrf2.calculaIRRF(7000));
console.log(irrf2.calculaIRRF(8000));
console.log(irrf2.calculaIRRF(9000));