# Aula 010 - Gerando um APK

Vamos agora transformar o projeto em realidade

Para isso vamos precisar de algumas ferramentas

Primeiramente crie uma conta neste site: https://expo.dev/accounts

Para gerar um APK local com o novo [EAS do Expo](https://docs.expo.dev/build/setup/):

1. Instale o `eas-cli` de forma Global via `npm`
*(o Expo não recomenda o uso do Yarn para pacotes globais😪)*
```
npm install -g eas-cli
```
2. Faça o login na sua conta Expo
```
eas login
```
3. Gere o arquivo de configuração (`eas.json`)
```
eas build:configure
```
4. Substitua o arquivo gerado pelo conteúdo abaixo:
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```
5. Gere o APK
```
eas build -p android --profile preview
```
6. Caso faça alguma alteração no código fonte, basta repetir o passo 5 para gerar novamente a APK.