<div align = "center">
<img src = "https://github.com/user-attachments/assets/801b602c-b0b6-4404-8761-10099b20f232">
</div>


# Diagrama de Sequência

Um **Diagrama de Sequência** é um tipo de diagrama de interação que descreve como os objetos interagem entre si e a sequência das mensagens trocadas entre eles ao longo do tempo. É uma ferramenta útil para modelar o comportamento dinâmico de um sistema e entender como os processos ocorrem.

## Componentes do Diagrama de Sequência

1. **Objetos**: Representam as instâncias ou entidades que participam da interação. São geralmente representados por retângulos no diagrama.
2. **Mensagens**: Representam a comunicação entre objetos. As mensagens são desenhadas como setas que apontam do remetente para o destinatário e podem incluir o nome da mensagem e parâmetros.
3. **Lifelines (Linhas de Vida)**: Representam a duração de existência dos objetos e são mostradas como linhas verticais que se estendem ao longo do tempo.
4. **Ativação**: Representa o período em que um objeto está ativo ou ocupado realizando uma operação. É mostrado como um retângulo em uma lifeline.
5. **Notas**: Comentários ou explicações adicionais que ajudam a entender o diagrama. São mostradas como retângulos com uma aba.

## Estrutura Básica

Um diagrama de sequência geralmente possui a seguinte estrutura:

1. **Cabeçalho**: Inclui o nome do diagrama e a descrição geral da interação.
2. **Objetos**: Listados na parte superior, com suas lifelines começando abaixo deles.
3. **Mensagens**: Desenhadas entre as lifelines, representando a troca de informações.
4. **Ativações**: Mostradas ao longo das lifelines, indicando quando um objeto está ativo.

## Exemplo de Diagrama de Sequência

Aqui está um exemplo simples em pseudocódigo para um diagrama de sequência que descreve o processo de um usuário fazendo login em um sistema:


### Descrição do Exemplo

1. **Usuário solicita login**: O usuário envia uma solicitação de login para o sistema.
2. **Sistema verifica credenciais**: O sistema consulta o banco de dados para verificar as credenciais do usuário.
3. **Banco de dados retorna status**: O banco de dados responde com o status da verificação (sucesso ou falha).
4. **Sistema exibe mensagem**: O sistema exibe uma mensagem ao usuário com base no status retornado pelo banco de dados.

## Ferramentas para Criar Diagramas de Sequência

- **Lucidchart**
- **Draw.io (diagrams.net)**
- **Visual Paradigm**
- **PlantUML**: Permite criar diagramas a partir de texto.

## Conclusão

Os diagramas de sequência são essenciais para entender o fluxo de eventos em um sistema e são uma parte importante da modelagem UML (Unified Modeling Language). Eles ajudam a visualizar como os objetos interagem e facilitam a comunicação entre desenvolvedores e partes interessadas.


