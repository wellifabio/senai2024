const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const professores = require("./dados/professores.json");
const turmas = require("./dados/turmas.json");
const atividades = require("./dados/atividades.json");

async function main() {
    for (const professor of professores) {
        await prisma.professor.create({
            data: professor
        });
    }
    for (const turma of turmas) {
        await prisma.turma.create({
            data: turma
        });
    }
    for (const atividade of atividades) {
        await prisma.atividade.create({
            data: atividade
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