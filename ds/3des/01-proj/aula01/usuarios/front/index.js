//Se o usuário não estiver logado, redireciona para a página de login
if(usuario){
    window.location.href = 'home.html';
}

//Obtendo objetos do DOM
const login = document.querySelector('#login');
const msg = document.querySelector('#msg');
const novo = document.querySelector('#novo');

//Adicionando um evento de submit ao formulário
login.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtendo os valores dos campos de matricula e pin
    const matricula = login.matricula.value;
    const pin = login.pin.value;

    //Enviando os dados para a API
    api.post('/login', {
        matricula,
        pin
    }).then((response) => {
        //Salvando o token no localStorage
        window.localStorage.setItem('usuario', JSON.stringify(response.data));
        //Redirecionando para a página de home
        window.location.href = 'home.html';
    }).catch((error) => {
        //Exibindo uma mensagem de erro
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.innerHTML = 'matricula ou pin inválidos';
        //Aguaardando 3 segundos e limpando a mensagem
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});

//Aadicionar um evento submit ao formulário de cadastro
novo.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtendo os valores dos campos de matricula e pin
    const matricula = novo.matricula.value;
    const nome = novo.nome.value;
    const cargo = novo.cargo.value;
    const setor = novo.setor.value;
    const pin = novo.pin.value;

    //Enviando os dados para a API
    api.post('/usuario', {
        matricula,
        nome,
        cargo,
        setor,
        pin
    }).then((response) => {
        //Exibindo uma mensagem de sucesso
        document.querySelector('#modalNovo').classList.add('oculto');
        msg.style.display = 'block';
        msg.innerHTML = 'Usuário cadastrado com sucesso';
        //Aguardando 3 segundos e limpando a mensagem
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }).catch((error) => {
        //Exibindo uma mensagem de erro
        document.querySelector('#modalNovo').classList.add('oculto');
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.innerHTML = 'Erro ao cadastrar usuário';
        //Aguardando 3 segundos e limpando a mensagem
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});