const dolar = document.querySelector("#dolar");
const euro = document.querySelector("#euro");
const bitcoin = document.querySelector("#bitcoin");
const cdi = document.querySelector("#cdi");

//Obter cotação do dolar e euro em reais
fetch("https://economia.awesomeapi.com.br/json/all")
    .then((r) => r.json())
    .then((json) => {
        dolar.value = json.USD.high;
        euro.value = json.EUR.high;
    });

//Obter cotação do bitcoin em reais
fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((json) => {
        bitcoin.value = json.BRL.last;
    });

//Obter cotação do CDI hoje
fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4391/dados?formato=json")
    .then((r) => r.json())
    .then((json) => {
        cdi.value = json[json.length - 1].valor;
    });

function msg(ms) {
    document.querySelector("#msg").innerHTML = ms;
    setTimeout(() => {
        document.querySelector("#msg").innerHTML = "";
    }, 1000);
}

function calcular() {
    const valor = document.querySelector("#valor").value;
    if (valor == 0) {
        msg("Informe um valor");
        return;
    }
    const vdolar = document.querySelector("#vdolar");
    const veuro = document.querySelector("#veuro");
    const vbitcoin = document.querySelector("#vbitcoin");

    vdolar.value = (valor / document.querySelector("#dolar").value).toFixed(2);
    veuro.value = (valor / document.querySelector("#euro").value).toFixed(2);
    vbitcoin.value = (valor / document.querySelector("#bitcoin").value).toFixed(8);
}