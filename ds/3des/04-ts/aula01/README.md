# Aula01 - Testes de Software
## 1. Introdução
### 1.1. O que é um teste de software?
- Teste de software é um processo de execução de um programa com o objetivo de encontrar erros.
- O teste é uma atividade de execução de um sistema com o objetivo de encontrar falhas.

## Erro x Falla
- Erro: é a diferença entre o valor calculado e o valor correto.
- Falha: é a manifestação do erro durante a execução do programa.

## Falha e Defeito
- Falha: é a manifestação do erro durante a execução do programa.
- Defeito: é o erro no código fonte que causa a falha.
### Falha x Defeito segundo o ISTQB
- Falha: é a **incapacidade** de um sistema ou componente de executar suas funções requeridas dentro de requisitos especificados.
    - Ex: normalmente quando há uma falha o sistema **não funciona**.
- Defeito: é um desvio do comportamento especificado de um sistema ou componente.
    - Ex: o sistema funciona, mas **não funciona como deveria**.

## 2. Tipos de Testes
### 2.1. Teste de Unidade
- Teste de unidade é o teste de menor nível, é o teste de um único componente ou unidade do sistema.
- O teste de unidade é realizado pelo desenvolvedor, que testa cada unidade de código assim que é desenvolvida.
- Ex: Testes que realizamos no nosso banco de dados, alimentando com dados e verificando se os dados estão sendo salvos corretamente (CRUD).

### 2.2. Teste de Integração
- Teste de integração é o teste de um conjunto de unidades de código.
- O teste de integração é realizado pelo desenvolvedor, que testa o conjunto de unidades de código assim que são desenvolvidas.
- Ex: Utilizando a ferramenta Insomnia para testar as rotas da nossa aplicação.

### 2.3. Teste de Sistema (Ponto a Ponto)
- Teste de sistema é o teste de todo o sistema.
- O teste de sistema é realizado pelo desenvolvedor, que testa o sistema assim que é desenvolvido.

# Relatório Caixa Preta 

## Exemplo - Relatório de Teste de Caixa Preta - Sistema Mobile de Petshop

### 1. Introdução

### 1.1 Objetivo do Teste
O objetivo deste teste é verificar a funcionalidade do aplicativo móvel de petshop sem considerar a implementação interna, garantindo que as funcionalidades básicas de navegação, busca de produtos, compra e gerenciamento de conta funcionem conforme o esperado.

### 1.2 Escopo do Teste
O teste inclui as funcionalidades principais do aplicativo móvel, como a navegação pelos produtos, a realização de pedidos, o gerenciamento da conta do usuário, e a visualização de histórico de compras.

### 1.3 Referências

Documento de Requisitos do Aplicativo de Petshop (Versão 1.2)
Especificação Funcional do Sistema Mobile de Petshop
### 2. Ambiente de Teste

### 2.1 Configuração do Ambiente

Dispositivos Testados: iPhone 13 (iOS 16), Samsung Galaxy S21 (Android 13)
Versão do Aplicativo: 2.5.1
Conexão: Wi-Fi, 4G
Sistema Operacional: iOS 16, Android 13
### 2.2 Ferramentas de Teste

--
### 3. Descrição dos Casos de Teste

### 3.1 Caso de Teste 1: Navegação pelos Produtos

ID do Caso de Teste: CT001
Descrição: Verificar se o usuário consegue navegar pelas categorias de produtos.
Pré-condições: Usuário deve estar autenticado.
Passos para Executar:
Abrir o aplicativo.
Navegar para a seção "Categorias".
Selecionar uma categoria de produto.
Dados de Entrada: Nenhum dado específico é necessário.
Resultado Esperado: O aplicativo deve exibir os produtos da categoria selecionada.
Resultado Obtido: (Descreva o resultado real)
Status: Passou/Não passou
### 3.2 Caso de Teste 2: Realização de Pedido

ID do Caso de Teste: CT002
Descrição: Verificar se o usuário pode adicionar um produto ao carrinho e realizar o checkout.
Pré-condições: Usuário deve ter um produto disponível no estoque e estar autenticado.
Passos para Executar:
Abrir o aplicativo e navegar para um produto.
Adicionar o produto ao carrinho.
Ir para o carrinho e iniciar o checkout.
Completar o pagamento.
Dados de Entrada: Dados de pagamento válidos.
Resultado Esperado: O pedido deve ser realizado com sucesso e o usuário deve receber uma confirmação.
Resultado Obtido: (Descreva o resultado real)
Status: Passou/Não passou
### 3.3 Caso de Teste 3: Gerenciamento da Conta do Usuário

ID do Caso de Teste: CT003
Descrição: Verificar se o usuário pode atualizar suas informações de perfil e senha.
Pré-condições: Usuário deve estar autenticado.
Passos para Executar:
Abrir o aplicativo e acessar a seção "Conta".
Atualizar as informações de perfil (nome, endereço, etc.).
Alterar a senha.
Dados de Entrada: Novas informações de perfil e nova senha.
Resultado Esperado: As informações do perfil e a senha devem ser atualizadas corretamente.
Resultado Obtido: (Descreva o resultado real)
Status: Passou/Não passou
### 3.4 Caso de Teste 4: Visualização de Histórico de Compras

ID do Caso de Teste: CT004
Descrição: Verificar se o usuário pode visualizar seu histórico de compras.
Pré-condições: Usuário deve estar autenticado e ter feito compras anteriores.
Passos para Executar:
Abrir o aplicativo e acessar a seção "Histórico de Compras".
Navegar pelas compras anteriores.
Dados de Entrada: Nenhum dado específico é necessário.
Resultado Esperado: O histórico de compras deve ser exibido corretamente com detalhes de cada compra.
Resultado Obtido: (Descreva o resultado real)
Status: Passou/Não passou
### 4. Resultados e Análise

### 4.1 Sumário dos Resultados

Navegação pelos Produtos: Passou
Realização de Pedido: Não passou (detalhe o problema)
Gerenciamento da Conta do Usuário: Passou
Visualização de Histórico de Compras: Passou
### 4.2 Análise dos Resultados
O teste revelou que a funcionalidade de realização de pedidos falhou devido a um erro de processamento de pagamento. Todos os outros casos de teste foram concluídos com sucesso, indicando que as principais funcionalidades do aplicativo estão operando conforme o esperado.

### 4.3 Problemas Encontrados

Erro de Pagamento: Durante o checkout, o sistema apresentou uma falha ao processar pagamentos, resultando em uma mensagem de erro genérica.
### 5. Conclusão

### 5.1 Resumo do Teste
O teste de caixa preta do aplicativo móvel de petshop demonstrou que a maioria das funcionalidades principais está funcionando corretamente, exceto a função de pagamento, que precisa ser corrigida.

### 5.2 Recomendações

Corrigir o problema de processamento de pagamento.
Realizar testes adicionais após a correção para garantir que o problema foi resolvido.
5.3 Próximos Passos

Enviar um relatório detalhado do erro para a equipe de desenvolvimento.
Planejar uma nova rodada de testes após a implementação das correções.
6. Anexos

### 6.1 Capturas de Tela

Capturas de tela do erro de pagamento e dos resultados dos testes (se disponíveis).
### 6.2 Logs de Teste

Logs de erros e detalhes dos testes realizados.
### 6.3 Documentos de Referência

Especificação Funcional do Sistema Mobile de Petshop

# Formulário para Envio!

Link: https://forms.gle/ophUbDtCnHB1XtsS9
