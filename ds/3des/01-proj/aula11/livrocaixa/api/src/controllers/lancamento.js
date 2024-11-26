const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const lancamento = await prisma.lancamento.create({
        data: req.body
    });
    res.json(lancamento);
}

const read = async (req, res) => {
    const lancamentos = await prisma.lancamento.findMany();
    res.json(lancamentos);
}

module.exports = { create, read };

