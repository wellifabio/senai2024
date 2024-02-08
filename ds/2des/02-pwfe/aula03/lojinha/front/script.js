const uri = "http://localhost:3000/clientes";
const clientes = [];
const msgs = document.getElementById('msgs');
const criar = document.getElementById('criar');
const dados = document.getElementById('dados');
const cadastro = document.getElementById('cadastro');

//Obter dados do back-end
function loadClientes() {
    fetch(uri)
        .then(res => res.json())
        .then(res => {
            res.forEach(cli => {
                clientes.push(cli);
            });
            preencherTabela();
        });
}

function preencherTabela() {
    clientes.forEach(cli => {
        dados.innerHTML += `
                <tr>
                    <td>${cli.id}</td>
                    <td>${cli.cpf}</td>
                    <td>${cli.nome} ${cli.sobrenome}</td>
                    <td>${cli.nascimento.toString().split("T")[0]}</td>
                    <td>
                        <button onclick="del(${cli.id})"> - </button>
                        <button> * </button>
                    </td>
                </tr>
            `;
    });
}

criar.addEventListener('submit', e => {
    e.preventDefault();
    const data = {
        cpf: criar.cpf.value,
        nome: criar.nome.value,
        sobrenome: criar.sobrenome.value,
        nascimento: criar.nascimento.value
    };
    fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.sqlMessage == undefined) {
                clientes.push(res);
                dados.innerHTML = "";
                preencherTabela();
                cadastro.classList.add('oculto');
            } else {
                cadastro.classList.add('oculto');
                msgs.classList.remove('oculto');
                document.querySelector('#msg').innerHTML = res.sqlMessage;
            }
        });
});

function del(id) {
    fetch(uri + '/' + id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            clientes.splice(clientes.findIndex(cli => cli.id === id), 1);
            dados.innerHTML = "";
            preencherTabela();
        });
}
