
# Aula 03 - React e Expo

|Subpastas|Descrição|
|-|-|
|./alomundo|Alô mundo|
|./app|Exemplo de uma aplicação básica.|

## Documentação Oficial React Native e Expo
- https://reactnative.dev/
- https://expo.dev/

## Conhecimentos
- 1. Dispositivos móveis
	- 1.1. Definição
	- 1.2. Histórico
	- 1.3. Características
	- 1.4. Arquitetura
	- 1.5. Ambiente de desenvolvimento
		- 1.5.1.Instalação e configuração
		- 1.5.2.Gerenciamento de dependências
		- 1.5.3.Recursos e interfaces
## React Navive
#### Interface para dispositivos móveis com React Native e Expo

### Definição
React Native é uma biblioteca de desenvolvimento de aplicativos móveis que permite escrever código em JavaScript e produzir aplicativos nativos para iOS e Android. O React Native foi **criado pelo Facebook** e é uma extensão da biblioteca **React**, utilizada para criar interfaces de usuário em páginas da web. Com React Native, os desenvolvedores podem criar aplicativos nativos para dispositivos móveis, com alto desempenho e visual atraente, utilizando uma abordagem de programação declarativa e componentizada.

### Componentes
Componentes são os **blocos de construção básicos** de um aplicativo React Native. Eles representam uma parte da interface do usuário, que pode ser reutilizada em várias partes do aplicativo. Um componente pode ser considerado como uma função JavaScript que retorna uma interface de usuário. Os componentes podem receber parâmetros, chamados de **"props"** (propriedades), que definem o comportamento e a aparência do componente.

### Telas
Telas são os elementos visuais que aparecem no aplicativo móvel. Eles podem incluir elementos como botões, campos de entrada, imagens e texto. As telas geralmente são compostas de vários componentes, que juntos formam a interface do usuário do aplicativo. Por exemplo, uma tela de login pode incluir um campo de entrada para o nome de usuário, um campo de entrada para a senha e um botão de login, cada um desses elementos sendo um componente separado.

### Expo
O Expo é uma plataforma de desenvolvimento de aplicativos móveis baseada em React Native. Ele inclui um conjunto de ferramentas e serviços que permitem aos desenvolvedores criar aplicativos móveis de alta qualidade com facilidade e rapidez. O Expo fornece um ambiente de desenvolvimento completo, que inclui ferramentas para criar e testar aplicativos, bem como serviços para gerenciamento de projetos e publicação de aplicativos na App Store e na Google Play Store.

## Resumo
Em resumo, **React Native** é uma biblioteca para criação de aplicativos móveis nativos utilizando **JavaScript**, com uma abordagem de programação declarativa e componentizada. O **Expo** é uma plataforma de desenvolvimento de aplicativos móveis **baseada em React Native**, que fornece ferramentas e serviços para facilitar o processo de desenvolvimento. As **telas e componentes** são os principais elementos que compõem a interface do usuário do aplicativo.

## Desnvolvimento na Aula
Fizemos a isntalação das dependências relacionadas as bibliotecas e Criamos o aplicativo alomundo

# Instalando as Dependencias

```cmd
npm install -g expo
```
instala as dependencias da expo

```cmd
npx create-expo-app my-app
```
Dentro da pasta do aplicativo inicia e baixa os modulos dentro do projeto ficando assim

![image](https://github.com/wellifabio/senai2024/assets/156427878/9d053b4c-8ddf-481a-9ca7-6e6d840ab7bc)

Pode acontecer o seguinte erro
![image](https://github.com/wellifabio/senai2024/assets/156427878/12465ada-5a92-4e07-ab15-12303a19f6c3)

Neste caso instale estas depencendias
```cmd
npx expo install react-native-web react-dom @expo/metro-runtime 
```
Depois de iniciado de acordo com o print, execute o comando a seguir para iniciar o aplicativo na parte web
```cmd
npm run web
```
# Atividade
Realizar um aplicativo chamado My Pages, onde contem suas informações pessoais, assim como uma foto no começo da pagina
No final colocar um link para o Github



# Atividade
Cr

