//Se o usuário não estiver logado, redireciona para a página de login
if(usuario){
    window.location.href = 'home.html';
}

//Obtendo o formulário de login do DOM
const form = document.querySelector('#form');

//Adicionando um evento de submit ao formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtendo os valores dos campos de matricula e pin
    const matricula = form.matricula.value;
    const pin = form.pin.value;

    //Enviando os dados para a API
    api.post('/login', {
        matricula,
        pin
    }).then((response) => {
        //Salvando o token no localStorage
        window.localStorage.setItem('usuario', response.data.token);
        //Redirecionando para a página de home
        window.location.href = 'home.html';
    }).catch((error) => {
        //Exibindo uma mensagem de erro
        alert('matricula ou pin inválidos');
    });
});
