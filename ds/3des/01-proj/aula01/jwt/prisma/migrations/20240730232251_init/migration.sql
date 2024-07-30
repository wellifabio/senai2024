-- CreateTable
CREATE TABLE `Usuario` (
    `matricula` VARCHAR(8) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `cargo` VARCHAR(50) NOT NULL,
    `setor` VARCHAR(50) NOT NULL,
    `pin` VARCHAR(8) NOT NULL,

    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
