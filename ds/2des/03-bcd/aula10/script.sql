-- criar um usuário com a senha 1234
CREATE USER 'pizzaiolo'@'localhost' IDENTIFIED BY '1234';
-- dar permissão para o usuário pizzaiolo acessar o banco de dados pizzaria
GRANT ALL PRIVILEGES ON pizzaria.* TO pizzaiolo@localhost;
-- Remover acesso de insert e update para o usuário pizzaiolo
REVOKE INSERT, UPDATE ON pizzaria.* FROM pizzaiolo@localhost;