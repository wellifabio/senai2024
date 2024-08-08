//Se o usuário não estiver logado, redireciona para a página de login
if(!usuario){
    window.location.href = 'index.html';
}else{
    user = JSON.parse(usuario);
}

//Função para deslogar o usuário
const sair = () => {
    window.localStorage.removeItem('usuario');
    window.location.href = 'index.html';
}

//Obter dados para preencher a tabela
const dados = document.querySelector('#dados');
const dadosETabela = () => {
    document.querySelector('#titulo').innerHTML = user.nome;
    document.querySelector('#perfil').nome.value = user.nome;
    document.querySelector('#perfil').cargo.value = user.cargo;
    document.querySelector('#perfil').setor.value = user.setor;
    document.querySelector('#perfil').pin.value = user.pin;
    api.get('/usuario', {
        headers: {
            Authorization: user.token
        }
    }).then((response) => {
        response.data.forEach((item) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.textContent = item.matricula;
            const td2 = document.createElement('td');
            td2.textContent = item.nome;
            const td3 = document.createElement('td');
            td3.textContent = item.cargo;
            const td4 = document.createElement('td');
            td4.textContent = item.setor;
            const td5 = document.createElement('td');
            const btn = document.createElement('button');
            btn.textContent = '[ - ]';
            //Excluir usuário
            btn.addEventListener('click', () => {
                api.delete('/usuario/' + item.matricula, {
                    headers: {
                        Authorization: user.token
                    }
                }).then((response) => {
                    window.location.reload();
                }).catch((error) => {
                    msg.style.display = 'block';
                    msg.style.color = 'red';
                    msg.innerHTML = 'Erro ao excluir o usuário ' + error;
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                });
            });
            td5.appendChild(btn);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            dados.appendChild(tr);
        }); 
    }).catch((error) => {
        //Exibindo uma mensagem de erro
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.innerHTML = 'Erro ao listar os usuários ' + error;
        //Aguardando 3 segundos e limpando a mensagem
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
}

//Atualizar dados do perfil do usuário
const perfil = document.querySelector('#perfil');
perfil.addEventListener('submit', (event) => {
    event.preventDefault();
    const dados = {
        matricula: user.matricula,
        nome: perfil.nome.value,
        cargo: perfil.cargo.value,
        setor: perfil.setor.value,
        pin: perfil.pin.value
    };
    api.put('/usuario', dados, {
        headers: {
            Authorization: user.token
        }
    }).then((response) => {
        document.querySelector('#modalPerfil').classList.add('oculto');
        msg.style.display = 'block';
        msg.innerHTML = 'Perfil atualizado com sucesso';
        setTimeout(() => {
            sair();
        }, 3000);
    }).catch((error) => {
        document.querySelector('#modalPerfil').classList.add('oculto');
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.innerHTML = 'Erro ao atualizar o perfil ' + error;
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});
