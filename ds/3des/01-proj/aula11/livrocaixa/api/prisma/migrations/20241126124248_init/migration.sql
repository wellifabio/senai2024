-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lancamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` INTEGER NOT NULL,
    `descricao` TEXT NOT NULL,
    `valor` DOUBLE NOT NULL,
    `tipo` ENUM('entrada', 'saida') NOT NULL DEFAULT 'entrada',
    `data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lancamento` ADD CONSTRAINT `Lancamento_usuario_fkey` FOREIGN KEY (`usuario`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
