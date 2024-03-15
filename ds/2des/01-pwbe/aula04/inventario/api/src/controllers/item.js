//Dependências - Frameworks
const con = require("../connect/connect").con;

//CRUD - create
const create = (req, res) => {
    let id = req.body.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = Number(req.body.valor);
    let query = `INSERT INTO item(id, nome, descricao, valor) VALUE`;
    query += `('${id}', '${nome}', '${descricao}', ${valor});`;
    con.query(query, (err, result) => {
        if (err)
            res.status(400).json(err).end();
        else {
            res.status(201).json(req.body).end();
        }
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM item", (err, result) => {
        if (err)
            res.status(500).json(err);
        else
            res.json(result);
    });
}

//CRUD - Update
const update = (req, res) => {
    let id = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let valor = Number(req.body.valor);
    let query = `UPDATE item SET id = '${id}', nome = '${nome}', descricao = '${descricao}', valor = ${valor} WHERE id = '${id}'`;
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
    con.query(`DELETE FROM item WHERE id = '${id}'`, (err, result) => {
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