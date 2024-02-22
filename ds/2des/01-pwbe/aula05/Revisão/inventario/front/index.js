const uri = 'http://localhost:3000/item'
const cadastro = document.querySelector('#cadastro')
const corpo = document.querySelector('#corpo')
const total = document.querySelector('#total')
var valTotal = 0;

fetch(uri + '/listar', { method: 'GET' })
    .then(resp => resp.json())
    .then(resp => montarTabela(resp))
    .catch(err => console.error(err));

cadastro.addEventListener('submit', e => {
    e.preventDefault();

    const body = {
        "id": cadastro.id.value,
        "nome": cadastro.nome.value,
        "descricao": cadastro.descricao.value,
        "valor": cadastro.valor.value,
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    options.body = JSON.stringify(body)

    fetch(uri + '/criar', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201) window.location.reload()
            else alert('Erro ao enviar dados')
        })
})

function montarTabela(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let del = document.createElement('button')
        let alterar = document.createElement('button')
        del.innerHTML = '[-]'
        alterar.innerHTML = '[*]'
        del.setAttribute('onclick', `excluirItem('${e.id}')`)
        alterar.setAttribute('onclick', `alterarItem('${e.id}')`)
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.descricao
        col4.innerHTML = e.valor
        col5.appendChild(del)
        col5.appendChild(alterar)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        corpo.appendChild(linha)
        valTotal += e.valor
        total.value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valTotal)
    });
}

function excluirItem(i) {
    if (confirm('Valida Exclusao'))
        fetch(uri + '/excluir/' + i, { method: 'DELETE' })
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}
function alterarItem(id) {
    const linha = document.querySelector(`th[data-id="${id}"]`);
    if (!linha) {
        console.error(`Item com ID ${id} não encontrado na tabela.`);
        return;
    }

    // Preencher os campos do formulário de edição com os dados do item
    const colunas = linha.querySelectorAll('td');
    document.querySelector('#editar-nome').value = colunas[1].textContent; // Índice 1 para nome
    document.querySelector('#editar-descricao').value = colunas[2].textContent; // Índice 2 para descrição
    document.querySelector('#editar-valor').value = colunas[3].textContent; // Índice 3 para valor

    // Exibir o formulário de edição
    document.getElementById('form-edicao').style.display = 'block';

    // Adicionar um event listener para o envio do formulário de edição
    document.getElementById('form-edicao').addEventListener('submit', function(e) {
        e.preventDefault();

        // Obter os novos dados do formulário de edição
        const novoNome = document.getElementById('editar-nome').value;
        const novaDescricao = document.getElementById('editar-descricao').value;
        const novoValor = document.getElementById('editar-valor').value;

        // Enviar uma solicitação PUT para atualizar o item no servidor
        const body = {
            "id": id,
            "nome": novoNome,
            "descricao": novaDescricao,
            "valor": novoValor
        };

        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch(uri + '/atualizar/' + id, options)
            .then(resp => {
                if (resp.status === 200) {
                    // Ocultar o formulário de edição após a atualização bem-sucedida
                    document.getElementById('form-edicao').style.display = 'none';
                    // Atualizar a tabela
                    return fetch(uri + '/listar', { method: 'GET' });
                } else {
                    throw new Error('Erro ao atualizar o item');
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                corpo.innerHTML = ''; // Limpar a tabela antes de remontar
                montarTabela(resp); // Remontar a tabela com os novos dados
            })
            .catch(err => {
                console.error(err);
                alert('Erro ao atualizar o item');
            });
    });
}
