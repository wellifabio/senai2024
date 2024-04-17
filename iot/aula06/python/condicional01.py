#Escreva um programa que solicite um número ao usuário e determine se ele é par ou ímpar.
numero = int(input("Digite um número inteiro: "))
if numero % 2 == 0:
    print("O número ", numero, " é par")
else:
    print("O número ", numero, " é ímpar")