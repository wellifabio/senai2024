//Se o usuário não estiver logado, redireciona para a página de login
if(!usuario){
    window.location.href = 'index.html';
}

//Função para deslogar o usuário
const sair = () => {
    window.localStorage.removeItem('usuario');
    window.location.href = 'index.html';
}

//Obter dados para preencher a tabela
const dados = document.querySelector('#dados');
const preencherTabela = () => {
    api.get('/usuario   ').then((response) => {
        response.data.forEach((item) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = item.matricula;
            const td2 = document.createElement('td');
            td2.textContent = item.nome;
            const td3 = document.createElement('td');
            td3.textContent = item.email;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            dados.appendChild(tr);
        }); 
    }).catch((error) => {
        alert('Erro ao obter os dados');
    });
}