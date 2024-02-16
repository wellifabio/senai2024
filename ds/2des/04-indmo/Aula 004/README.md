# Componentes Básicos - Aulao04

|Subpasta|Descrição|
|-|-|
|./lampada|App exemplo com botão que altera uma imagem.|

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
- 2. Criação de interface
	- 2.1. Leiaute de tela
		- 2.1.1.Estrutura
		- 2.1.2.Tipos
		- 2.1.3.Gerenciadores
		- 2.1.4.Componentes de tela
		- 2.1.5.Menu
		- 2.1.6.Diálogos
		- 2.1.7.Barra de ação


## Aula
- 1. Abrir uma nova pasta chamada Aula 04
- 2. Abrir a pasta com o Visual Code
- 3. No Terminal executar o comando
     ´´´cmd
     npm install -g expo
     ´´´
- 4. Depois o comando
      ´´´cmd
     px create-expo-app lampada
     ´´´
- 5. Entrar na Pasta com o comando
      ´´´cmd
     cd Lampada
     ´´´
- 6. Executar o comando
     ´´´cmd
     npm run web
     ´´´
     - 6.1. Pode acontecer o seguinte erro
![image](https://github.com/wellifabio/senai2024/assets/156427878/12465ada-5a92-4e07-ab15-12303a19f6c3)

Neste caso instale estas depencendias
```cmd
npx expo install react-native-web react-dom @expo/metro-runtime 
```

- 7. Desenvolver a aplicação no arquivo **App.js**
```javascript
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Switch,ImageBackground, ScrollView } from 'react-native';

const  icon = require('./assets/icon.png');
const backgroundImage = require('./assets/background.jpg');

export default function App() {
const [habilitado, setHabilitado] = new useState(false);

const habilitar = () => {
  setHabilitado(!habilitado);
}

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
      <Image
      source={icon}
      style={styles.icon}
      />
      <Switch
      value={habilitado}
      onValueChange={habilitar}
      />
      <Image
      source={{
        uri: (habilitado)
        ? "./assets/lampadaon.png"
        : "./assets/lampadaoff.png"
      }}
      style={[styles.lampada, {opacity: 0.8}]}
      />
      <Image
      source={{
        uri: "https://w7.pngwing.com/pngs/924/553/png-transparent-thirty-one-gift-idea-business-organization-plan-man-service-sticker-musician.png"

      }}
      style={styles.pessoa}
      />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.5)', // Adicionando transparência ao contêiner
    alignItems: 'center',
    justifyContent: 'center',
    gap: '32px'
  },
  icon: {
    width: '68px',
    height: '68px'
  },
  lampada: {
    width: '80px',
    height: '80px'
  },
  pessoa: {
    width: '200px',
    height: '200px'
  }
});
```
## Resultado
![image](https://github.com/wellifabio/senai2024/assets/156427878/39f11149-add0-478e-99ad-1c8b037e2276)


|Atividades|
|-|
|Desenvolver um aplicativo para mudança de imagens conforme citado na sala de aula, utilizando a mesma ferramenta da lampada|
