var valueRight = document.querySelector("#value-right");
var coinLeft = document.querySelector("#coinLeft");
var coinRight = document.querySelector("#coinRight");
var symbol = document.querySelector("#symbol")

function convert() {
    var valueInput = document.querySelector("#value-left").value;

    switch (coinLeft.value) {
        case "dolar":
            valueRight.value = valueInput * 5;
            symbol.innerHTML = "USD";
            break;

        case "euro":
            valueRight.value = valueInput * 10;
            symbol.innerHTML = "EUR";
            break;

        case "real":
            valueRight.value = valueInput;
            symbol.innerHTML = "R$";
            break;
    }
}