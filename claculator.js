var display = document.getElementById('display')
var cal='';
var result = '';

function addToDisplay(input) {
    if (input=='*'){
        display.value += 'x';
        cal += '*';
    }
    else if (input=='/100'){
        display.value += '%';
        cal += '/100';
    }
    else if (input=='3.1415926535897') {
        display.value+='π';
        cal+='3.1415926535897';

    }
    else if (input=='/'){
        display.value+='÷';
        cal+='/'
    }
    else if (input=='**'){
        display.value+='^';
        cal+='**';
    }
    
    else{
    display.value += input;
    cal += input;
}

}

function calculate() {
    try {
        result = eval(cal);
        if (result === Infinity || result === -Infinity){
            display.value="Can't divide by 0!";
        }
        else{
            display.value=result;
        }

    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    cal='';
}

function back(){
    display.value=display.value.slice(0,-1);
    cal=cal.slice(0,-1);}
