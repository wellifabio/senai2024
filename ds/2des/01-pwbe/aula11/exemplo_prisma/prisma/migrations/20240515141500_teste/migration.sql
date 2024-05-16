-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
