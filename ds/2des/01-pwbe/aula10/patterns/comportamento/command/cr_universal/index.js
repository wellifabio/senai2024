//Pattern de Comportamento "Command": Exemplo de um controle remoto que da comandos (Faz checagem/validação antes de dar o comando)
class Dispositivo {

    status = false;

    ligar() {
        this.status = true;
        console.log("Caixa ligada");
    }

    desligar() {
        this.status = false;
        console.log("Caixa desligada");
    }

    setCanal(canalPadrao) {
        console.log("Caixa está configurada no canal " + canalPadrao);
    }

    setVolume(volume) {
        console.log("Caixa está configurada no volume " + volume);
    }

}

class Controle {
    constructor(dispositivo) {
        this.dispositivo = dispositivo
    }
    //Command (Verifica se o dispositivo está ligado antes de dar o comando ligar)
    ligar() {
        if (!this.dispositivo.status)
            this.dispositivo.ligar();
        else
            console.log("Dispositivo já está ligado");
    }
    //Command (Verifica se o dispositivo está desligado antes de dar o comando desligar)
    desligar() {
        if (this.dispositivo.status)
            this.dispositivo.desligar();
        else
            console.log("Dispositivo já está desligado");
    }
}

//Testando o pattern Command
const caixa = new Dispositivo();
const tv = new Dispositivo();
const ctrCaixa = new Controle(caixa);
const ctrTV = new Controle(tv);

console.log("Caixa de Som status: " + caixa.status + " Status TV:" + tv.status);
console.log("1. Ligar Caixa de Som");
console.log("2. Desligar Caixa de Som");
console.log("3. Ligar TV");
console.log("4. Desligar TV");
console.log("5. Sair TV");

let menu = parseInt(prompt("Digite uma opção:"));

switch (menu) {
    case 1: console.log(ctrCaixa.ligar()); break;
    case 2: console.log(ctrCaixa.desligar()); break;
    case 3: console.log(ctrTV.ligar()); break;
    case 4: console.log(ctrTV.desligar()); break;
    default: console.log();
}
