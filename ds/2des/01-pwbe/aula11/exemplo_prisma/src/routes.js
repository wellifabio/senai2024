const express = require('express');

const router = express.Router();

const clientes = require('./controllers/clientes');

router.get('/', (req, res) => {
    res.send('Hello World').end();
});

//Clientes
router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.delete('/clientes/:id', clientes.remove);
router.put('/clientes/:id', clientes.update);

module.exports = router;