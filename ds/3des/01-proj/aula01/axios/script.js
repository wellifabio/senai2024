const uri = 'http://localhost:3000';

//Iniciando o apiios
const api = axios.create({
    baseURL: uri
});

//Lendo o localStorage para verificar se o usuário está logado
const usuario = window.localStorage.getItem('usuario');