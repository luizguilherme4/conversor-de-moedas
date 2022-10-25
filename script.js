//seleciona a div com id "valor-real"
let real = document.getElementById("valor-real");
//seleciona a div com id "moeda-string"
let moeda = document.getElementById("moeda-string");
//seleciona a div com id "cifrao-right"
let cifrao = document.getElementById("cifrao-right");

function converteMoeda() {
    //seleciona o valor do id "moeda-string"
    let valorMoeda = moeda.value;
    //convertendo real para um valor numérico
    let valorReal = parseFloat(real.value);

    if (valorMoeda == "dolar") {
        cifrao.innerHTML = "USD";

        //convertendo real para dólar
        let valorDolar = valorReal / 5.15;
        //selecionando a div com o id "valor-moeda"
        let moeda = document.getElementById("valor-moeda");
        //atualiza o value da div selecionada
        moeda.value = valorDolar.toFixed(2);
    }
    if (valorMoeda == "libra") {
        cifrao.innerHTML = "GBP";

        //convertendo real para libra
        let valorLibra = valorReal / 6;
        //selecionando a div com o id "valor-moeda"
        let moeda = document.getElementById("valor-moeda");
        //atualiza o value da div selecionada
        moeda.value = valorLibra.toFixed(2);
    }
    if (valorMoeda == "euro") {
        cifrao.innerHTML = "EUR";

        //convertendo real para euro
        let valorEuro = valorReal / 5.2;
        //selecionando a div com o id "valor-moeda"
        let moeda = document.getElementById("valor-moeda");
        //atualiza o value da div selecionada
        moeda.value = valorEuro.toFixed(2);
    }
}
