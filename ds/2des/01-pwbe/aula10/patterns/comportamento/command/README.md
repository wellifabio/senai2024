# Comportamento - Command

O padrão de projeto **Command** é usado para encapsular uma solicitação como um objeto, permitindo que você parametrize clientes com diferentes solicitações, faça fila ou registre solicitações e ofereça suporte a operações desfazer. Aqui está um exemplo de como usar o padrão Command em **JavaScript**:


```javascript
// Receiver
class Light {
  turnOn() {
    console.log('Luz ligada');
  }

  turnOff() {
    console.log('Luz desligada');
  }
}

// Command
class LightCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {}
}

// Concrete Commands
class TurnOnCommand extends LightCommand {
  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand extends LightCommand {
  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Exemplo de uso:

const light = new Light();

const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Saída: Luz ligada

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Saída: Luz desligada
```

Neste exemplo, temos a classe **Light** que representa o receptor, ou seja, o objeto que executará a ação desejada (ligar ou desligar a luz).

A classe **LightCommand** é a classe base abstrata para os comandos relacionados à luz. Ela possui uma referência para o objeto **Light** e define o método **execute()** que será implementado pelas classes concretas de comando.

As classes **TurnOnCommand** e **TurnOffCommand** são os comandos concretos que herdam de **LightCommand** e implementam o método **execute()** para ligar e desligar a luz, respectivamente.

A classe **RemoteControl** é o invocador, que define um método **setCommand(command)** para configurar o comando desejado e o método **pressButton()** para executar o comando.

No exemplo de uso, criamos uma instância de **Light**, bem como as instâncias dos comandos **TurnOnCommand** e **TurnOffCommand**, passando a instância de **Light** como parâmetro para cada comando.

Em seguida, configuramos o comando desejado no controle remoto (**remoteControl**) usando o método **setCommand()**. Ao chamar **pressButton()**, o comando associado é executado, resultando na ação correspondente, que é ligar ou desligar a luz.


|O padrão Command permite que você encapsule uma solicitação como um objeto, fornecendo uma maneira flexível de parametrizar e executar diferentes ações em um sistema. Ele facilita a adição de novos comandos sem modificar o código existente e permite a implementação de recursos como desfazer e refazer operações.|
|-|