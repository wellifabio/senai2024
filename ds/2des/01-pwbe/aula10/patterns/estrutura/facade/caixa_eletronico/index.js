class BoasVindas {
    constructor() {
        console.log("Bem vindo ao banco XPTO");
        console.log("Estamos felizes administrar seu dinheiro");
    }
}

class ValidaNumeroConta {

    numeroConta = 12345678;

    contaAtiva(conta) {
        if (conta == this.numeroConta) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidaSenhaConta {

    senha = 1234;

    senhaCorreta(senha) {
        if (senha == this.senha) {
            return true;
        } else {
            return false;
        }
    }
}

class ValidaSaldoConta {

    saldo = 0;

    diminuirSaldo(dinheiro) {
        this.saldo -= dinheiro;
    }

    aumentarSaldo(dinheiro) {
        this.saldo += dinheiro;
    }

    fazerSaque(dinheiro) {
        if (dinheiro > this.saldo) {
            console.log("Erro: Saldo insuficiente");
            console.log("Saldo atual: " + this.saldo);
            return false;
        } else {
            this.diminuirSaldo(dinheiro);
            console.log("Saque realizaro com sucesso.");
            console.log("Saldo atual: " + this.saldo);
            return true;
        }
    }

    fazerDeposito(dinheiro) {
        this.aumentarSaldo(dinheiro);
        console.log("Deposito realizado com sucesso: Saldo atual:" + this.saldo);
    }
}

class ContaCorrenteFacade {
    constructor(numero, senha) {
        this.numero = numero;
        this.senha = senha;
        this.bemVindo = new BoasVindas();
        this.validarNumero = new ValidaNumeroConta();
        this.validarSenha = new ValidaSenhaConta();
        this.validarSaldo = new ValidaSaldoConta();
    }

    sacar(dinheiro) {
        if (this.validarNumero.contaAtiva(this.numero) && this.validarSenha.senhaCorreta(this.senha)
            && this.validarSaldo.fazerSaque(dinheiro)) {
            console.log("Transação completa");
        } else {
            console.log("Falha ao executar transação");
        }
    }

    depositar(dinheiro) {
        if (this.validarNumero.contaAtiva(this.numero) && this.validarSenha.senhaCorreta(this.senha)) {
            this.validarSaldo.fazerDeposito(dinheiro);
            console.log("Transação completa");
        } else {
            console.log("Falha ao executar transação");
        }
    }
}

let menu = 0;
console.log("Digite o número da conta e a senha:");
const cc = new ContaCorrenteFacade(12345678,1234);
cc.depositar(100);
cc.depositar(100);
cc.depositar(100);
cc.depositar(100);
cc.sacar(1000);
cc.sacar(200);
const cc0 = new ContaCorrenteFacade(123456,1111);
cc0.depositar(100);
cc0.depositar(100);
cc0.depositar(100);
cc0.depositar(100);
cc0.sacar(1000);
cc0.sacar(200);