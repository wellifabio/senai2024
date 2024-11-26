const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const lancamento = await prisma.lancamento.create({
        data: req.body
    });
    res.status(201).json(lancamento);
}

const read = async (req, res) => {
    const lancamentos = await prisma.lancamento.findMany();
    res.json(lancamentos);
}
const readDia = async (req, res) => {
    const lancamentos = await prisma.lancamento.findMany({
        where: {
            data: new Date(req.params.dia)
        }
    });
    res.json(lancamentos);
}

const update = async (req, res) => {
    const lancamento = await prisma.lancamento.update({
        where: {
            id: req.body.id
        },
        data: req.body
    });
    res.json(lancamento);
}

const del = async (req, res) => {
    const lancamento = await prisma.lancamento.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    res.json(lancamento);
}

module.exports = { create, read, readDia, update, del };

