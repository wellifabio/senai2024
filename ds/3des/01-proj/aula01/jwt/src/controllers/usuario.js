const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
    const { matricula, pin } = req.body;
    const usuario = await prisma.usuario.findFirst({
        where: {
            matricula: matricula,
            pin: pin
        }
    });
    if (usuario) {
        const token = await jwt.sign({ matricula: usuario.matricula }, process.env.KEY, {
            //expira em uma hora ou 3600 segundos
            expiresIn: 3600
        });
        usuario.token = token;
        return res.json(usuario);
    } else {
        return res.status(401).json({ message: 'Matrícula ou pin inválidos' });
    }
};

const read = async (req, res) => {
    if (req.params.matricula !== undefined) {
        const usuario = await prisma.usuario.findUnique({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.json(usuario);
    } else {
        const usuarios = await prisma.usuario.findMany();
        return res.json(usuarios);
    }
};

module.exports = {
    login,
    read
};