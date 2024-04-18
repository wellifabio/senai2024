# Criação - Singleton

O padrão de projeto **Singleton** é usado quando você deseja ter apenas uma única instância de uma classe em todo o seu aplicativo, garantindo que haja apenas um ponto de acesso global para essa instância. Aqui está um exemplo de como implementar o padrão Singleton em **JavaScript**:

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      // A instância única é criada apenas na primeira chamada do construtor
      this.data = Math.random(); // Dados específicos da instância
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getData() {
    return this.data;
  }
}

// Exemplo de uso:

const instance1 = new Singleton();
console.log(instance1.getData()); // Saída: 0.12345

const instance2 = new Singleton();
console.log(instance2.getData()); // Saída: 0.12345

console.log(instance1 === instance2); // Saída: true
```
Neste exemplo, a classe **Singleton** possui um construtor que verifica se a instância única já foi criada. Se a instância única ainda não existe, o construtor cria uma nova instância e a atribui à propriedade estática **Singleton.instance**. Se a instância única já existir, o construtor retorna a mesma instância.

Isso garante que todas as chamadas subsequentes ao construtor retornem a mesma instância única, mantendo um ponto de acesso global consistente para essa instância.

Ao criar uma instância do **Singleton**, você pode acessar os dados específicos da instância por meio do método **getData()**. No exemplo, ambas as instâncias **instance1** e **instance2** retornam os mesmos dados, pois se referem à mesma instância.

O padrão Singleton é útil em situações em que você precisa garantir que apenas uma única instância de uma classe exista em todo o aplicativo, como uma conexão de banco de dados compartilhada, configurações globais ou gerenciamento de cache.