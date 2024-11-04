const form = document.querySelector("#add");
const botoes = [];
const gabarito = ['A', 'C', 'B', 'D', 'D', 'E', 'A', 'C', 'B', 'D'];
const notas = [];
const result = ['', '', '', '', '', '', '', '', '', ''];
preencherRadios();
preencherTabela();
function msg(ms) {
    document.querySelector("#msg").innerHTML = ms;
    setTimeout(() => {
        document.querySelector("#msg").innerHTML = "";
    }, 1000);
}
function preencherRadios() {
    document.querySelector("#dados").innerHTML = "";
    for (i = 0; i < 10; i++) {
        botoes.push(
            {
                "questao": i,
                "A": `<input type="radio" name="q${i}" value="A">`,
                "B": `<input type="radio" name="q${i}" value="B">`,
                "C": `<input type="radio" name="q${i}" value="C">`,
                "D": `<input type="radio" name="q${i}" value="D">`,
                "E": `<input type="radio" name="q${i}" value="E">`
            }
        );
    }
}
function preencherTabela() {
    document.querySelector("#dados").innerHTML = "";
    botoes.forEach((e, i) => {
        const l = document.createElement("tr");
        l.innerHTML = `<td>${e.questao}</td><td>${e.A}</td><td>${e.B}</td><td>${e.C}</td><td>${e.D}</td><td>${e.E}</td><td class="${result[i]}">${result[i]}</td>`;
        document.querySelector("#dados").appendChild(l);
    });
}
function verificar() {
    if (checado()) {
        return;
    } else {
        let erros = 0;
        let acertos = 0;
        for (i = 0; i < 10; i++) {
            notas.push(document.querySelector(`input[name='q${i}']:checked`).value);
            if (notas[i] == gabarito[i]) {
                result[i] = "V";
                acertos++;
            } else {
                result[i] = "X";
                erros++;
            }
        }
        preencherTabela();
        document.querySelector("#acertos").value = acertos;
        document.querySelector("#erros").value = erros;
    }
}

function checado() {
    let clicado = false;
    for (i = 0; i < 10; i++) {
        if (document.querySelector(`input[name='q${i}']:checked`) == null) {
            msg("Selecione todas as questões");
            clicado = true;
        }
    }
    return clicado;
}