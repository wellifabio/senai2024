# Instalar e configurar GOGS
O Gogs é uma aplicação escrita em Go que oferece uma solução simples de hospedagem de repositórios Git. Para começar, faça o download da versão mais recente do Gogs para o Windows:

## Para instalar e configurar o Gogs em um ambiente Windows, siga o passo a passo abaixo:

### 1 Baixar o Gogs
- Acesse a página de downloads do Gogs: https://gogs.io/
- Na seção Windows, baixe o arquivo gogs_x.x.x_windows_amd64.zip (onde "x.x.x" é a versão mais recente).
### 2 Descompactar o Arquivo
Após o download, descompacte o arquivo .zip em um diretório de sua preferência, como **C:\gogs** O arquivo gogs.exe estará dentro dessa pasta.
### 3 Executar o Gogs pela Primeira Vez
- Navegue até o diretório onde você descompactou o Gogs, por exemplo, **C:\gogs**
- Clique com o botão direito do mouse em gogs.exe e escolha Executar como administrador.
- Ao executar, o Gogs irá iniciar o servidor localmente e abrir o processo de configuração no navegador.

### 4 Configuração Inicial
- Ao executar o Gogs, o navegador abrirá automaticamente na URL: http://localhost:3000
- Agora, você precisa realizar as configurações iniciais. Siga os passos abaixo:
- Escolher o Tipo de Banco de Dados:
    - O Gogs oferece opções para usar o banco de dados SQLite (padrão) ou MySQL/PostgreSQL. Para um uso simples, o SQLite é uma boa escolha.
Configurações de Banco de Dados:
#### Para SQLite:
- No campo Database Path, deixe o valor padrão ou especifique o local para o banco de dados.
#### Para MySQL/PostgreSQL:
Insira as informações de banco de dados (host, nome de usuário, senha, etc.).
#### Configurações de Aplicação:
- Application URL: Defina a URL da sua instância do Gogs, como http://localhost:3000.
- Git Path: Deixe o valor padrão, geralmente é automático para o Git instalado.
- SMTP Settings (opcional): Se você deseja configurar notificações por e-mail, configure um servidor SMTP.

#### Administração:
- Crie a conta admin fornecendo nome de usuário, e-mail e senha.
- Escolha um nome para a organização (caso necessário).
- Clique em Install Gogs para finalizar a configuração inicial.

## 5 Acessar o Gogs
- Após a instalação, você pode acessar o Gogs a partir do navegador na URL configurada (http://localhost:3000). Faça login com a conta de administrador que você criou.

## 6 Configurações Adicionais
- Agora que o Gogs está instalado e funcionando, você pode realizar algumas configurações adicionais, como:
- Alterar a porta do servidor: Caso você precise alterar a porta padrão (3000), edite o arquivo de configuração custom/conf/app.ini na seção [server] e modifique o valor de HTTP_PORT.
- Iniciar o Gogs como um serviço: Se você deseja que o Gogs inicie automaticamente com o Windows, pode configurá-lo para rodar como um serviço. Isso pode ser feito com ferramentas como NSSM (Non-Sucking Service Manager), que transforma o Gogs em um serviço Windows. Você pode baixar o NSSM aqui.

## 7 Criação de Repositórios
Com o Gogs rodando, você pode começar a criar repositórios Git:
- No painel de administração, clique em New Repository.
- Defina o nome do repositório, se será público ou privado, e outras configurações necessárias.
- Após a criação, você poderá clonar o repositório em sua máquina e começar a trabalhar com ele.
## 8. Manutenção e Atualizações
De tempos em tempos, você pode querer atualizar o Gogs para a versão mais recente. Para fazer isso:
- Baixe a versão mais recente do Gogs no site oficial.
- Substitua o executável gogs.exe pela versão nova.
- Reinicie o Gogs.
## Conclusão
Agora o Gogs está configurado e funcionando corretamente em seu sistema Windows! Você pode começar a utilizar para hospedagem de repositórios Git, integrando com outras ferramentas de CI/CD e gerenciando projetos de forma eficiente.
- Se tiver problemas durante a instalação ou configuração, consulte a documentação oficial do Gogs ou procure por logs de erros no diretório logs na pasta onde o Gogs foi instalado.