var h1 = document.getElementById('h1');

var min = 0;
var sec = 0;
var msec = 0;
var timer;
var isRunning = false;

function start() {
    if (!isRunning) {
        isRunning = true;
        console.log('Started');
        timer = setInterval(update, 100); // Updates every 10ms for more precise timing
    }
}

function update() {
    msec += 1;

    if (msec >= 10) {
        msec = 0;
        sec += 1;
    }

    if (sec >= 60) {
        sec = 0;
        min += 1;
    }

    h1.textContent = 
        (min < 10 ? '0' + min : min) + ' : ' + 
        (sec < 10 ? '0' + sec : sec) + ' : ' + 
        (msec < 100 ? '0' + msec : msec);
}

function stop() {
    if (isRunning) {
        isRunning = false;
        console.log('Stopped');
        clearInterval(timer);
    }
}

function reset() {
    stop();
    console.log('Reset');
    min = 0;
    sec = 0;
    msec = 0;
    h1.textContent = 'MM : SS : MS';
}
