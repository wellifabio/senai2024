# Aula06 - Normalização

O processo de normalização consiste em separar dados brutos em tabelas relacionais.

## Benefícios
- Reduz redundância
- Reduz inconcistência
- Melhora o desempenho

## Passos e níveis de normalização
### Primeira forma normal
Identificar atributos/campos **compostos** e dividí-los em várias colunas ex: atributo **endereço** dividido em **cep, número e complemento**
### Segunda forma normal
Estar na primeira forma normal, Identificar atributos/campos **multivalorados** e separa-los em outra tabela, relacionada por chave estrangeira ex: **telefones** criar uma tabela de telefones e utilizar as chaves primárias e estrangeiras para relacionar
### Terceira forma normal
Estar na segunda forma normal, identificar atributos/campos **derivados** e eliminar estes campos
### OBS
Existe outras mais formas normais, porém trabalharemos inicialmente com estas três.

### Exemplo com um banco de dados de compras
![Exemplo](./dados_compras.png)
![DER](./der_compras.png)