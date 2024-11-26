const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario.js');
const Lancamento = require('./controllers/lancamento.js');

router.get('/', (req, res) => {
    res.send('API Livro Caixa Respondendo');
});

router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.read);

router.post('/lancamentos', Lancamento.create);
router.get('/lancamentos', Lancamento.read);
router.get('/lancamentos/:dia', Lancamento.readDia);
router.put('/lancamentos', Lancamento.update);
router.delete('/lancamentos/:id', Lancamento.del);

module.exports = router;