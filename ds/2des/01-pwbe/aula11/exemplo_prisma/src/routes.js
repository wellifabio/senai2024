const express = require('express');

const router = express.Router();

const clientes = require('./controllers/clientes');
const telefones = require('./controllers/telefones');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//Clientes
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.delete('/clientes/:id', clientes.remove);
router.put('/clientes/:id', clientes.update);

router.get('/cliente/:id', clientes.readById);
router.post('/clientes/nome', clientes.readByName);

//Telefones
router.post('/telefones', telefones.create);
router.get('/telefones', telefones.read);
router.delete('/telefones/:id', telefones.remove);
router.put('/telefones/:id', telefones.update);

module.exports = router;