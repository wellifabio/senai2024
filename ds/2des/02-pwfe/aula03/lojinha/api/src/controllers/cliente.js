//Dependências - Frameworks
const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let nascimento = req.body.nascimento;
    let query = `INSERT INTO clientes(cpf, nome, sobrenome, nascimento) VALUE`;
    query += `('${cpf}', '${nome}', '${sobrenome}', '${nascimento}');`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            const novo = req.body;
            novo.id = result.insertId;
            res.status(201).json(novo).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Clientes ORDER BY id DESC", (err, result) => {
        if (err)
            res.json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let id = req.params.id;
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let nascimento = req.body.nascimento;
    let query = `UPDATE clientes SET cpf = '${cpf}', nome = '${nome}', sobrenome = '${sobrenome}', nascimento = '${nascimento}' WHERE id = ${id}`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end;
        else {
            if (result.affectedRows > 0)
                res.status(202).json(req.body).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

//CRUD - Delete
const del = (req, res) => {
    let id = req.params.id;
    con.query(`DELETE FROM Clientes WHERE id = ${id}`, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            if (result.affectedRows > 0)
                res.status(204).json(result).end();
            else
                res.status(404).json("Registro não encontrado").end();
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
};