const uri = "http://localhost:3000/";
const logado = JSON.parse(localStorage.getItem("logado"));
const turmaLocal = JSON.parse(localStorage.getItem("turma"));

if (!logado) {
    window.location.href = "./index.html";
}

const professor = document.querySelector("#professor");
professor.innerHTML = `${logado.nome}`;
const turma = document.querySelector("#turma");
turma.innerHTML = `${turmaLocal.nome}`;

const atividades = document.querySelector("#atividades");
fetch(uri + "atividade/" + turmaLocal.id)
    .then((res) => res.json())
    .then((res) => {
        res.forEach((atividade) => {
            atividades.innerHTML += `
            <tr>
                <td>${atividade.id}</td>
                <td>${atividade.descricao}</td>
            </tr>`
        });
    });

const create = document.querySelector("#create");
create.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {
        descricao: create.descricao.value,
        turmaId: turmaLocal.id
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    };

    fetch(uri + "atividade", options)
        .then((res) => res.json())
        .then((res) => {
            window.location.reload();
        });
});

const logout =() => {
    localStorage.removeItem("logado");
    window.location.href = "./index.html";
}