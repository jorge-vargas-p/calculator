
function one() {
    document.getElementById('result').value += '1';
}
//get  values every time when is clicked the buttons
//Addition assignment "=+"
function two() {
    document.getElementById('result').value += '2';
}

function three() {
    document.getElementById('result').value += '3';
}

function plus() {
    document.getElementById('result').value += '+';
}

function four() {
    document.getElementById('result').value += '4';
}

function five() {
    document.getElementById('result').value += '5';
}

function six() {
    document.getElementById('result').value += '6';
}

function minus() {
    document.getElementById('result').value += '-';
}

function seven() {
    document.getElementById('result').value += '7';
}

function eight() {
    document.getElementById('result').value += '8';
}

function nine() {
    document.getElementById('result').value += '9';
}

function mult() {
    document.getElementById('result').value += '*';
}

//Re-initialise all the operation when AC is clicked
function c()   {
    document.getElementById('result').value = '';
}

function zero() {
    document.getElementById('result').value += '0';
}
//eval(string)
function equal() {
    document.getElementById('result').value = eval(document.getElementById("result").value);
}

function divide() {
    document.getElementById('result').value += '/';
}