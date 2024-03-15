//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Inventário respondendo!");
}

//Rotas de Saída - items
router.get("/", teste);
router.post("/itens", Item.create);
router.get("/itens", Item.read);
router.put("/itens/:id", Item.update);
router.delete("/itens/:id", Item.del);

module.exports = router;
