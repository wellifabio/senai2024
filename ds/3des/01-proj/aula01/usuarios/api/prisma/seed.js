const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usuarios = require("./usuarios.json");

async function main() {
    for (const usuario of usuarios) {
        await prisma.usuario.create({
            data: usuario
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Seed complete');
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });