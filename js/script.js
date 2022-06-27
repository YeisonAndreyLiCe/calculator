var display = document.querySelector('#display');
var result = "";

function press(value) {
    result+= value;
    display.innerHTML = result;
}

function setOP(operator) {
    result += operator;
    display.innerHTML = result;
}

function clr() {
    display.innerHTML = "";
    result = "";
}

function calculate() {
    result = eval(result);
    display.innerHTML = result;
}