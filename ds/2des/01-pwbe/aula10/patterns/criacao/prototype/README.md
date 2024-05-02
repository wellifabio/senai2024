# Criação - Prototype

O padrão de projeto **Prototype** é usado para criar objetos baseados em um protótipo existente, clonando o protótipo em vez de criar novas instâncias do zero. Isso permite criar novos objetos com eficiência, evitando a necessidade de recriar a estrutura e os dados do objeto original. Aqui está um exemplo de como usar o padrão Prototype em **JavaScript**:

|Problema|
|-|
|Criar ou clonar objetos a partir de um protótipo|
|![UML](./ovelha.png)|

```javascript
// Classe protótipo
class Ovelha {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {}
}

// Implementação concreta do Ovelha
class BlackOvelha extends Ovelha {
  constructor(name, weight) {
    super(name, weight);
    this.color = 'black';
  }

  clone() {
    return new BlackOvelha(this.name, this.weight);
  }
}

// Exemplo de uso:

const blackOvelha = new BlackOvelha('Dolly', 50);
const clonedOvelha = blackOvelha.clone();

console.log(clonedOvelha.name); // Saída: Dolly
console.log(clonedOvelha.weight); // Saída: 50
console.log(clonedOvelha.color); // Saída: black
```

Neste exemplo, temos uma classe protótipo chamada **Ovelha**, que define a interface para clonar objetos. Em seguida, temos uma implementação concreta chamada **BlackOvelha**, que estende Ovelha e fornece sua própria implementação para o método **clone**.

Ao criar uma instância de **BlackOvelha**, podemos usar o método **clone** para criar um novo objeto **BlackOvelha** com os mesmos valores de propriedade. Isso é mais eficiente do que criar uma nova instância e definir manualmente todas as propriedades novamente.

O padrão Prototype permite a criação eficiente de novos objetos, evitando a duplicação de código e reduzindo o tempo de execução necessário para criar objetos. Cada classe protótipo pode ter sua própria implementação de clonagem personalizada, permitindo que as propriedades e o comportamento sejam ajustados conforme necessário ao criar novos objetos clonados.