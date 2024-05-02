# Comportamento - Iterator

O padrão de projeto **Iterator** é usado para fornecer uma maneira de percorrer elementos de uma coleção sem expor sua estrutura interna. Ele encapsula a lógica de iteração em um objeto separado, permitindo que você percorra os elementos de uma coleção de maneira uniforme, independentemente de como a coleção é implementada. Aqui está um exemplo de como usar o padrão Iterator em **JavaScript**:

```javascript
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    const item = this.collection[this.index];
    this.index++;
    return item;
  }
}

class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator() {
    return new Iterator(this.items);
  }
}

// Exemplo de uso:

const collection = new Collection();
collection.addItem('Item 1');
collection.addItem('Item 2');
collection.addItem('Item 3');

const iterator = collection.createIterator();

while (iterator.hasNext()) {
  const item = iterator.next();
  console.log(item);
}
```
Neste exemplo, temos a classe **Iterator** que encapsula a lógica de iteração em uma coleção. Ele mantém uma referência para a coleção e um índice que controla a posição atual. O método **hasNext()** verifica se ainda há elementos a serem percorridos, e o método **next()** retorna o próximo elemento da coleção e avança o índice.

A classe **Collection** representa a coleção de itens. Ela possui um método **addItem(item**) para adicionar itens à coleção e um método **createIterator()** que retorna um objeto **Iterator** para percorrer os elementos da coleção.

No exemplo de uso, criamos uma instância da **Collection** e adicionamos alguns itens. Em seguida, chamamos o método **createIterator()** para obter um objeto **Iterator**. Em um loop **while**, verificamos se o iterador possui mais elementos usando **hasNext()** e, em seguida, obtemos o próximo elemento usando **next()** e o exibimos no console.

O padrão Iterator é útil quando você precisa percorrer elementos de uma coleção de maneira uniforme, sem expor a estrutura interna da coleção. Ele permite que você trate diferentes tipos de coleções de forma consistente, utilizando a mesma interface do iterador, facilitando a reutilização do código de iteração.