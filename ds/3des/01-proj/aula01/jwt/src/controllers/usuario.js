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

const create = async (req, res) => {
    try {
        const { matricula, nome, cargo, setor, pin } = req.body;
        const usuario = await prisma.usuario.create({
            data: {
                matricula: matricula,
                nome: nome,
                cargo: cargo,
                setor: setor,
                pin: pin
            }
        });
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
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

const update = async (req, res) => {
    try {
        const usuario = await prisma.usuario.update({
            where: {
                matricula: req.body.matricula
            },
            data: req.body
        });
        return res.status(202).json(usuario);
    } catch (error) {
        return res.status(404).json({ message: "usuario não encontrado" });
    }
};

const del = async (req, res) => {
    try {
        const usuario = await prisma.usuario.delete({
            where: {
                matricula: req.params.matricula
            }
        });
        return res.status(204).json(usuario);
    } catch (error) {
        return res.status(404).json({ message: "usuario não encontrado" });
    }
};

module.exports = {
    login,
    create,
    read,
    update,
    del
};