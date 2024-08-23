# Aula 04 - CRUD e Storage

Fazendo CRUD no Pets

Para isso vamos colocar algumas funções no nosso aplicativo do Pets

## Instalando dependencias

Inicialmente vamos instalar alguma dependencias para poder armazenar juntamente com os dados as imagens dos animais

```bash
yarn add react-native-image-picker
yarn add @react-native-firebase/storage
```

## Configurando o Firebase


Primeiramente vamos configurar dentro do Firebase Pets a parte de Storage

Clique em Storage

![alt text](image.png)

Logo após crie um banco no modo Produção

Após Criar va em regras e coloque a seguinte regra

```json
rules_version = '2';

// Craft rules based on data in your Firestore database
// allow write: if firestore.get(
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```
Dentro do arquivo firebaseconfig.js adicione a seguinte configuração

```javascript
import { getStorage } from 'firebase/storage';
```

E tamebem ao final do arquivo adicione a seguinte configuração

```javascript
export const storage = getStorage();
```
Va em seu arquivo App.js e vamos adicionar as alterações de storage e o CRUD juntos

