const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    const atividades = await prisma.atividade.findMany({
        where: {
            turmaId: parseInt(req.params.turma)
        }
    });
    return res.json(atividades);
}

const create = async (req, res) => {
    const { descricao, turmaId } = req.body;
    const atividade = await prisma.atividade.create({
        data: {
            descricao,
            turmaId
        }
    });
    return res.status(201).json(atividade);
}

module.exports = {
    read,
    create
}