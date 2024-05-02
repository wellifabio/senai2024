/** Exemplo do Gof pattern Factory */

//Lista de objetos predefinidos (Modelos)
const objts = [
    {
        nome: "Android",
        tipo: "O mais poderoso SO."
    },
    {
        nome: "Ios",
        tipo: "O mais seguro SO."
    },
    {   
        nome: "Windows",
        tipo: "Cópia piorada do MAC."
    }
]

//Gof pattern Factory (Esta função cria o objeto conforme parâmetros prédefinidos)
const fabricSO = (tipo) => {
    if(tipo == "aberto")
        return objts[0];
    else if(tipo == "fechado")
        return objts[1];
    else
        return objts[2];
}