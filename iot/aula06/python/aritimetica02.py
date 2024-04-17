# Programa que leia o nome a o salário de um funcionário
# calculo o FGTS imprima o nome, o salário e o FGTS
nome = input("Digite o nome do funcionário: ")
salario = float(input("Digite o salário do funcionário: "))
fgts = salario * 0.08
print("Funcionário ", nome, "Salário R$", salario, " e FGTS R$", fgts)