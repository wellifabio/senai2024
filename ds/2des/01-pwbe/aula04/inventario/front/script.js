//Variáveis e constantes(objetos) globais
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const uri = "http://localhost:3000/itens";
const itens = [];
var total = document.getElementById('total');

//Obter dados do back-end
function loadItens() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            itens.push(...res);
            preencherTabela();
        });
}

//CRUD - Read - Renderizar os dados obtidos em uma tabela
function preencherTabela() {
    let tot = 0;
    itens.forEach(cli => {
        dados.innerHTML += `
                <tr>
                    <td data-label="ID">${cli.id}</td>
                    <td data-label="Nome">${cli.nome}</td>
                    <td data-label="Descrição">${cli.descricao}</td>
                    <td data-label="Valor">${cli.valor.toFixed(2)}</td>
                    <td>
                        <button onclick="del('${cli.id}')">[ - ]</button>
                        <button onclick="edit(this)">[ * ]</button>
                    </td>
                </tr>
            `;
        tot += cli.valor;
    });
    total.value = tot.toFixed(2);
}

//CRUD - Create
criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        id: criar.id.value,
        nome: criar.nome.value,
        descricao: criar.descricao.value,
        valor: criar.valor.value
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.status)
        .then(res => {
            if (res == 201) {
                window.location.reload();
            } else {
                mensagens('Erro ao cadastrar cliente!');
            }
        });
});

//CRUD - Update
function update(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    let id = celulas[0].innerHTML;
    let data = {
        nome: celulas[1].innerHTML,
        descricao: celulas[2].innerHTML,
        valor: celulas[3].innerHTML
    };
    fetch(uri + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.status)
        .then(res => {
            if (res == 202) {
                celulas[1].removeAttribute('contenteditable');
                celulas[2].removeAttribute('contenteditable');
                celulas[3].removeAttribute('contenteditable');
                btn.innerHTML = '[ * ]';
                btn.setAttribute('onclick', 'edit(this)');
            } else {
                mensagens('Erro ao atualizar cliente!');
            }
        });
}

//CRUD - Delete
function del(id) {
    mensagens('Deseja realmente excluir o ítem ' + id + '?', id);
}

//Confirma exclusão
function confirmar(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.status)
        .then(res => {
            if (res == 204)
                window.location.reload();
            else
                mensagens('Erro ao excluir cliente!');
        });
}

//Mostrar mensagens do sistema
function mensagens(msg, confirma) {
    document.querySelector('#msg').innerHTML = msg;
    document.querySelector('#cancela').classList.remove('oculto');
    if (confirma != undefined) {
        document.querySelector('#confirma').classList.remove('oculto');
        document.querySelector('#confirma').setAttribute("onclick", `confirmar('${confirma}')`);
    } else {
        document.querySelector('#confirma').classList.add('oculto');
    }
}

//Tornar as células da linha tabela editáveis
function edit(btn) {
    let linha = btn.parentNode.parentNode;
    let celulas = linha.cells;
    for (let i = 1; i < celulas.length - 1; i++) {
        celulas[i].setAttribute('contenteditable', 'true');
    }
    btn.innerHTML = '[ ✔ ]';
    btn.setAttribute('onclick', 'update(this)');
}

//Calcular idade a partir da data de nascimento
function calcIdade(nascimento) {
    let data = new Date(nascimento);
    let hoje = new Date();
    let idade = hoje.getFullYear() - data.getFullYear();
    let mes = hoje.getMonth() - data.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < data.getDate())) {
        idade--;
    }
    return idade;
}