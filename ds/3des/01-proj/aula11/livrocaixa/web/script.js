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
        resp.forEach(l => {
            if (l.tipo === "entrada") {
                entradas.innerHTML += `<div class="card">
                    <p>Descrição: ${l.descricao}</p>
                    <p>Valor: R$ ${l.valor}</p>
                    <p>Data: ${new Date(l.data).toLocaleDateString("pt-BR")}</p>
                    </div>`;
            } else {
                saidas.innerHTML += `<div class="card">
                    <p>Descrição: ${l.descricao}</p>
                    <p>Valor: R$ ${l.valor}</p>
                    <p>Data: ${new Date(l.data).toLocaleDateString("pt-BR")}</p>
                    </div>`;
            }
        });
    });

//Cadastrar os usuários
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

//Cadastrar os lançamentos
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
        <select name="usuario">${usuarios.map(usuario => `<option value="${usuario.id}">${usuario.nome}</option>`)}
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