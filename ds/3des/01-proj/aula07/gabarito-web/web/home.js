const uri = "http://localhost:3000/";
const logado = JSON.parse(localStorage.getItem("logado"));

if (!logado) {
    window.location.href = "./index.html";
}

const professor = document.querySelector("#professor");
professor.innerHTML = `${logado.nome}`;

const turmas = document.querySelector("#turmas");
fetch(uri + "turma/" + logado.id)
    .then((res) => res.json())
    .then((res) => {
        res.forEach((turma) => {
            turmas.innerHTML += `
            <tr>
                <td>${turma.id}</td>
                <td>${turma.nome}</td>
                <td>
                    <button class="excluir" onclick="del(${turma.id})">Excluir</button>
                    <button class="vizualizar" onclick="vizualizar(${turma.id}, '${turma.nome}')">Visualizar</button>
                </td>
            </tr>`
        });
    });

const del = (id) => {
    if (confirm(`Deseja realmente excluir a turma ${id}?`)) {
        fetch(uri + "turma/" + id, { method: "DELETE" })
            .then((res) => res.status)
            .then((res) => {
                if (res != 204) {
                    alert("Esta turma não pode ser excluída pois possui atividades.");
                } else {
                    window.location.reload();
                }
            });
    }
}

const create = document.querySelector("#create");
create.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {
        nome: create.nome.value,
        professorId: logado.id
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
    };

    fetch(uri + "turma", options)
        .then((res) => res.json())
        .then((res) => {
            window.location.reload();
        });
});

const vizualizar = (id, nome) => {
    const t = {
        id: id,
        nome: nome
    }
    localStorage.setItem("turma", JSON.stringify(t));
    window.location.href = "./atividades.html";
}

const logout =() => {
    localStorage.removeItem("logado");
    window.location.href = "./index.html";
}