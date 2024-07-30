const express = require('express');

const router = express.Router();

const Middleware = require('./middleware/middleware');
const Usuario = require('./controllers/usuario');

router.post('/login', Usuario.login);
router.post('/usuario', Usuario.create);
router.get('/usuario', Middleware.validaAcesso, Usuario.read);
router.get('/usuario/:matricula', Middleware.validaAcesso, Usuario.read);
router.put('/usuario', Middleware.validaAcesso, Usuario.update);
router.delete('/usuario/:matricula', Middleware.validaAcesso, Usuario.del);

router.get('/', (req, res) => { return res.json("API OSs respondendo") });

module.exports = router;