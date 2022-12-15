var valueLeft = document.querySelector("#value-left");
var valueRight = document.querySelector("#value-right");
var coinLeft = document.querySelector("#coinLeft");
var coinRight = document.querySelector("#coinRight");

function toRight() {
    switch (coinLeft.value) {
        case "dolar":
            valueRight.value = (valueLeft.value) * 5;
            break;

        case "euro":
            valueRight.value = (valueLeft.value) * 10;
            break;

        case "real":
            valueRight.value = (valueLeft.value);
            break;
    }
}

