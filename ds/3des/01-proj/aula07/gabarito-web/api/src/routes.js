const express = require('express');

const router = express.Router();
const Professor = require('./controllers/professor');
const Turma = require('./controllers/turma');
const Atividade = require('./controllers/atividade');

router.get('/', (req, res) => { return res.json("API Turmas e Atividades respondendo") });
router.get('/professor', Professor.read);
router.post('/professor', Professor.login);
router.get('/turma/:id', Turma.read);
router.post('/turma', Turma.create);
router.delete('/turma/:id', Turma.del);
router.get('/atividade/:turma', Atividade.read);
router.post('/atividade', Atividade.create);

module.exports = router;