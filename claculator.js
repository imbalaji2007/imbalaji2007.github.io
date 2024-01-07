var display = document.getElementById('display')
var cal='';

function addToDisplay(input) {
    if (input=='*'){
        display.value += 'x';
        cal += '*';
    }
    else if (input=='/100'){
        display.value += '%';
        cal += '/100';
    }
    else{
    display.value += input;
    cal += input;
}
}

function calculate() {
    try {
        display.value = eval(cal);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    cal='';
}