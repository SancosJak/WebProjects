const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterElement = document.getElementById("counter");
const resetBtnElement = document.getElementById("reset");

let counter = 0;

const plusHandler = () => {
    counter++;
    counterElement.innerText = counter;
}

const minusHandler = () => {
    counter--;
    counterElement.innerText = counter;
}

const resetHandler = () => {
    counter = 0;
    counterElement.innerText = counter;
}

plusBtnElement.addEventListener("click", plusHandler);
minusBtnElement.addEventListener("click", minusHandler);
resetBtnElement.addEventListener("click", resetHandler);