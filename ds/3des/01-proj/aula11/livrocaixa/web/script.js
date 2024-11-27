const uri = "http://localhost:4000/";

const conteiner = document.getElementById("conteiner");
const entradas = document.getElementById("entradas");
const saidas = document.getElementById("saidas");
const totEntradas = document.getElementById("totEntradas");
const totSaidas = document.getElementById("totSaidas");
const satual = document.getElementById("satual");
const santerior = document.getElementById("santerior");
const sdia = document.getElementById("sdia");
const data = document.getElementById("data");
var usuarios = [];
var lancamentos = [];

//Listar os usuários
fetch(uri + "usuarios")
    .then((resp) => resp.json())
    .then((resp) => {
        usuarios = resp;
    });

//Listar os lançamentos
fetch(uri + "lancamentos")
    .then((resp) => resp.json())
    .then((resp) => {
        lancamentos = resp;
    });

//Cadastrar os usuários (Tela01)
function novoUsuario() {
    conteiner.innerHTML = `
    <form id="novoUsuario">
        <h2>Novo Usuário</h2>
        <input type="text" name="nome" placeholder="Digite o nome" required>
        <input type="email" name="email" placeholder="Digite o Email" required>
        <button type="submit">Cadastrar</button>
    </form>`;
    const novoUsuario = document.getElementById("novoUsuario");
    novoUsuario.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = {
            nome: novoUsuario.nome.value,
            email: novoUsuario.email.value,
        };
        fetch(uri + "usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        })
            .then((resp) => resp.status)
            .then((status) => {
                if (status === 201) {
                    alert("Usuário cadastrado com sucesso!");
                    window.location.reload();
                } else {
                    alert("Erro ao cadastrar usuário!");
                }
            });
    });
}

//Cadastrar os lançamentos (Tela02)
function novoLancamento() {
    conteiner.innerHTML = `
    <form id="novoLancamento">
        <h2>Novo Lançamento</h2>
        <select name="tipo">
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
        </select>
        <input type="text" name="descricao" placeholder="Digite a descricao" required>
        <input type="number" step="0.01" name="valor" placeholder="0.00" required>
        <select name="usuario">
            ${usuarios.map(usuario => `<option value="${usuario.id}">${usuario.nome}</option>`)}
        </select>
        <button type="submit">Cadastrar</button>
    </form>`;
    const novoLancamento = document.getElementById("novoLancamento");
    novoLancamento.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = {
            usuario: Number(novoLancamento.usuario.value),
            descricao: novoLancamento.descricao.value,
            tipo: novoLancamento.tipo.value,
            valor: Number(novoLancamento.valor.value),
        };
        fetch(uri + "lancamentos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        })
            .then((resp) => resp.status)
            .then((status) => {
                if (status === 201) {
                    alert("Lançamento cadastrado com sucesso!");
                    window.location.reload();
                } else {
                    alert("Erro ao cadastrar lançamento!");
                }
            });
    });
}

//Listar os lançamentos da data (Tela03)
async function listarLancamentos(data) {
    entradas.innerHTML = "";
    saidas.innerHTML = "";
    let totalEntradas = 0;
    let totalSaidas = 0;
    let saldoDia = 0;
    let saldoAtual = 0;
    let saldoAnterior = 0;
    if (data == undefined) data = new Date().toISOString().split("T")[0];
    await fetch(uri + "lancamentos/" + data)
        .then((resp) => resp.json())
        .then((resp) => {
            resp.forEach(l => {
                if (l.tipo === "entrada") {
                    entradas.innerHTML += `<div class="card">
                    <div class="areas">
                        <p>Usuário: ${usuarios.find(u => u.id === l.usuario).nome}</p>
                        <p>Descrição: ${l.descricao}</p>
                        <p>Data: ${new Date(l.data).toLocaleDateString("pt-BR")}</p> 
                        <p>Hora: ${new Date(l.data).toLocaleTimeString("pt-BR")}</p>
                        <p>Valor: R$ ${l.valor.toFixed(2).replace('.',',')}</p>
                    </div>
                    <div class="areas">
                        <button onclick="editarLancamento(${l.id})">Editar</button>
                        <button class="excluir" onclick="excluirLancamento(${l.id})">Excluir</button>
                    </div>
                    </div>`;
                    totalEntradas += l.valor;
                } else {
                    saidas.innerHTML += `<div class="card">
                    <div class="areas">
                        <p>Usuário: ${usuarios.find(u => u.id === l.usuario).nome}</p>
                        <p>Descrição: ${l.descricao}</p>
                        <p>Data: ${new Date(l.data).toLocaleDateString("pt-BR")}</p> 
                        <p>Hora: ${new Date(l.data).toLocaleTimeString("pt-BR")}</p>
                        <p>Valor: R$ ${l.valor.toFixed(2).replace('.',',')}</p>
                    </div>
                    <div class="areas">
                        <button onclick="editarLancamento(${l.id})">Editar</button>
                        <button class="excluir" onclick="excluirLancamento(${l.id})">Excluir</button>
                    </div>
                    </div>`;
                    totalSaidas += l.valor;
                }
            });
        })
        .then(() => {
            totEntradas.innerHTML = 'Total de entradas: ' + totalEntradas.toFixed(2).replace('.',',');
            totSaidas.innerHTML = 'Total de saídas: ' + totalSaidas.toFixed(2).replace('.',',');
            saldoDia = totalEntradas - totalSaidas;
            sdia.value = saldoDia.toFixed(2);
        }).then(() => {
            for (let i = 0; i < lancamentos.length; i++) {
                if (new Date(lancamentos[i].data) < new Date(data)) {
                    if (lancamentos[i].tipo == "entrada") {
                        saldoAnterior += lancamentos[i].valor;
                    } else {
                        saldoAnterior -= lancamentos[i].valor;
                    }
                }
            }
            santerior.value = saldoAnterior.toFixed(2);
            saldoAtual = saldoAnterior + saldoDia;
            satual.value = saldoAtual.toFixed(2);
        });
}

function excluirLancamento(id) {
    if (confirm(`Confirma a exclusão do lançamento ${id}`)) {
        fetch(uri + "lancamentos/" + id, {
            method: "DELETE",
        })
            .then((resp) => resp.status)
            .then((status) => {
                if (status === 200) {
                    alert("Lançamento excluído com sucesso!");
                    window.location.reload();
                } else {
                    alert("Erro ao excluir lançamento!");
                }
            });
    }
}

function editarLancamento(id){
    const lancamento = lancamentos.find(l => l.id === id);
    console.log(lancamento, id);
    conteiner.innerHTML = `
    <form id="novoLancamento">
        <h2>Editar Lançamento</h2>
        <select name="tipo">
            <option value="entrada" ${lancamento.tipo == 'entrada'?'selected':''}>Entrada</option>
            <option value="saida" ${lancamento.tipo == 'saida'?'selected':''}>Saída</option>
        </select>
        <input type="text" name="descricao" placeholder="Digite a descricao" value="${lancamento.descricao}" required>
        <input type="number" step="0.01" name="valor" placeholder="0.00"  value="${lancamento.valor}" required>
        <select name="usuario">
            ${usuarios.map(usuario => `<option value="${usuario.id}" ${lancamento.usuario == usuario.id?'selected':''}>${usuario.nome}</option>`)}
        </select>
        <button type="submit">Enviar</button>
    </form>`;
    const novoLancamento = document.getElementById("novoLancamento");
    novoLancamento.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = {
            id: Number(id),
            usuario: Number(novoLancamento.usuario.value),
            descricao: novoLancamento.descricao.value,
            tipo: novoLancamento.tipo.value,
            valor: Number(novoLancamento.valor.value),
        };
        fetch(uri + "lancamentos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        })
            .then((resp) => resp.status)
            .then((status) => {
                if (status === 200) {
                    alert("Lançamento alterado com sucesso!");
                    window.location.reload();
                } else {
                    alert("Erro ao alterar lançamento!");
                }
            });
    });
}