//Adapter - Pattern de Estrutura (Adaptador)
//Neste exemplo o banco de dados padrão é MySQL e precisamos de um adaptador para Mongo DB
class Venda {

    constructor(bd) {
        if (bd != undefined) this.bd = bd;
    }

    listarMySql() {
        return "SELECT * FROM vendas";
    }

    listarMongo() {
        return "vendas.find()";
    }

    listar() {
        return this.bd == undefined ? this.listarMySql() : this.listarMongo();
    }
}

class Cliente{
    
    venda =  new Venda();
    
    show(){
        console.log(this.venda.listar());
    }
}

class ClienteAdapter{
    
    venda =  new Venda(true);
    
    show(){
        console.log(this.venda.listar());
    }
}

var teste = new Cliente();
var teste2 = new ClienteAdapter();

teste.show();
teste2.show();