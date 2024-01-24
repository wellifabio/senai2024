//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let cpf = req.query.cpf;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let nascimento = req.query.nascimento;
    let query = `INSERT INTO clientes(cpf, nome, sobrenome, nascimento) VALUE`;
    query += `('${cpf}', '${nome}', '${sobrenome}', '${nascimento}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Clientes",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.get("/clientes/create", create);
app.get("/clientes", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});