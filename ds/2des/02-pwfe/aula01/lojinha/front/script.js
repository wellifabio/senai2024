//Obter dados do back-end
const dados = document.getElementById('dados');
fetch('http://localhost:3000/clientes')
    .then(res => res.json())
    .then(res => {
        res.forEach(cli => {
            dados.innerHTML += `
                <tr>
                    <td>${cli.id}</td>
                    <td>${cli.cpf}</td>
                    <td>${cli.nome} ${cli.sobrenome}</td>
                    <td>${cli.nascimento.toString().split("T")[0]}</td>
                </tr>
            `;
        });
    });

//Obter dados da URL
const url = window.location.search
const params = new URLSearchParams(url)
const erro = params.get('erro');
const cod = params.get('err');
if (erro) {
    document.querySelector('#msgs').classList.remove('oculto');
    document.querySelector('#msg').innerHTML = erro + "<br>Código do erro:" + cod
}
