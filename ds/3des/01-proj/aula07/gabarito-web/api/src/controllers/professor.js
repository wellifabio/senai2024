const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const read = async (req, res) => {
    const professores = await prisma.professor.findMany();
    return res.json(professores);
}

const login = async (req, res) => {
    const { email, senha } = req.body;
    try {
        if (!email || !senha) {
            return res.status(400).json({ erro: "Requisição inválida {email, senha}" }).end();
        }
    } catch (error) {
        return res.status(400).json({ erro: "Requisição inválida {email, senha}" }).end();
    }
    const professor = await prisma.professor.findUnique({
        where: {
            email: email,
            senha: senha
        }, select: {
            id: true,
            nome: true,
            email: true
        }

    });
    if (professor) {
        return res.json(professor);
    } else {
        return res.status(404).json({ erro: "Professor não encontrado" }).end();
    }
}

module.exports = {
    read,
    login
}