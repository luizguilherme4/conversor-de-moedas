var valueRight = document.querySelector("#value-right");
var coinLeft = document.querySelector("#coinLeft");
var coinRight = document.querySelector("#coinRight");
var symbolLeft = document.querySelector("#symbol-left");
var symbolRight = document.querySelector("#symbol-right");

function convert() {
    var valueInput = document.querySelector("#value-left").value;

    if (coinLeft.value == "real") {
        symbolLeft.innerHTML = "R$";

        switch (coinRight.value) {
            case "dolar":
                valueRight.value = (valueInput / 5.31).toFixed(2);
                symbolRight.innerHTML = "USD";
                break;

            case "euro":
                valueRight.value = (valueInput / 5.64).toFixed(2);
                symbolRight.innerHTML = "EUR";
                break;

            case "real":
                valueRight.value = valueInput;
                symbolRight.innerHTML = "R$";
                break;
        }
    } else if (coinLeft.value == "dolar") {
        symbolLeft.innerHTML = "USD";

        switch (coinRight.value) {
            case "dolar":
                valueRight.value = valueInput;
                symbolRight.innerHTML = "USD";
                break;

            case "euro":
                valueRight.value = (valueInput / 1.06).toFixed(2);
                symbolRight.innerHTML = "EUR";
                break;

            case "real":
                valueRight.value = (valueInput * 5.31).toFixed(2);
                symbolRight.innerHTML = "R$";
                break;
        }
    } else {
        symbolLeft.innerHTML = "EUR";

        switch (coinRight.value) {
            case "dolar":
                valueRight.value = (valueInput * 1.06).toFixed(2);
                symbolRight.innerHTML = "USD";
                break;

            case "euro":
                valueRight.value = valueInput;
                symbolRight.innerHTML = "EUR";
                break;

            case "real":
                valueRight.value = (valueInput * 5.64).toFixed(2);
                symbolRight.innerHTML = "R$";
                break;
        }
    }
}