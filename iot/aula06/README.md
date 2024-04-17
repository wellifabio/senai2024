# Aula06 - Lógica
Lógica de programação com Python

## Roteiro
- Instalar o [Python](https://www.python.org/) ou o IDE [PyCharm](https://www.jetbrains.com/pt-br/pycharm/download/?section=windows)
- Ou utilizar um interpretador [online](https://www.online-python.com/)
## Exemplos
- alomunto.py
```python
print("Alô mundo!")
```
- soma.py
```python
# Programa que lê dois números inteiros e imprime a soma destes números
x = int(input("Digite um número inteiro"))
y = int(input("Digite outro número inteiro"))
z = x + y
print("A soma destes números é ", z)
```
- condicional.py
```python
#Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar.
numero = int(input("Digite um número inteiro: "))
if numero % 2 == 0:
    print("O número ", numero, " é par")
else:
    print("O número ", numero, " é ímpar")
```
- for.py
```python
# escreva um programa que apresente o numeral de 1 a 100
for i in range(1, 101):
    print(i)
```

### Lista de exercícios
```c
1 - Soma de dois números:
Escreva um programa que solicite dois números ao usuário e imprima a soma deles.

2 - Média de três números:
Escreva um programa que solicite três números ao usuário e imprima a média deles.

3 - Conversor de temperatura:
Escreva um programa que converta uma temperatura em Celsius para Fahrenheit. 
O usuário deve fornecer a temperatura em Celsius e o programa deve imprimir a temperatura equivalente em 
Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.

4 - Identificação de número par ou ímpar:
Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar. 

5 - Cálculo de fatorial:
Escreva um programa que solicite um número inteiro positivo ao usuário e calcule o fatorial 
desse número. O fatorial de um número inteiro positivo n é o produto de todos os inteiros positivos menores ou 
iguais a n. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120.

6 - Verificador de ano bissexto:
Escreva um programa que verifique se um ano fornecido pelo usuário é bissexto ou não. Um ano é bissexto se for 
divisível por 4, exceto em anos que são divisíveis por 100 mas não são divisíveis por 400.

7- Verificação de número positivo ou negativo:
Escreva um programa que solicite um número ao usuário e determine se ele é positivo, negativo ou zero.

8- Comparação de dois números:
Escreva um programa que solicite dois números ao usuário e determine qual é o maior deles. Se forem iguais, o programa deve informar isso.

9- Verificação de idade:
Escreva um programa que solicite a idade de uma pessoa e determine se ela é maior de idade
(idade maior ou igual a 18 anos) ou menor de idade (idade menor que 18 anos).

10- Verificação de número par ou ímpar:
Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar.

11- Classificação de triângulos:
Escreva um programa que solicite três comprimentos ao usuário, que representam os lados de um triângulo. O programa deve
determinar se o triângulo é equilátero (todos os lados iguais), isósceles (dois lados iguais) ou escaleno (todos os lados diferentes).

12- Verificação de ano bissexto:
Escreva um programa que solicite um ano ao usuário e determine se ele é bissexto ou não.
Um ano é bissexto se for divisível por 4, exceto em anos que são divisíveis por 100 mas não são divisíveis por 400.

```