//Create a timer that displays seconds counting down from 60 and stopping at 0
let inputHour = 1;
let inputMin = 1;
let inputSec = 5;

let setHour = inputHour;
let setMin = inputMin;
let setSec = inputSec;

//Timer that calls displayTime function every seconds;
let secTimer = setInterval(displayTime, 1000);



function displayTime() {
    
    if (setHour == 0 && setSec == 0 && setMin == 0) {
        return endTimer();
    }
    else if (setHour > 0 && setMin == 0 && setSec == 0) {
        setHour = setHour - 1;
        setMin = 1;
        setSec = 5;
    }
   
    else if (setSec == 0) {
        setMin = setMin - 1;
        setSec = 10;
    }
    
    setSec = setSec - 1
    
    console.log(setHour + "hour");
    console.log(setMin + "min");
    console.log(setSec + "sec");
    
}
function endTimer() {
    clearInterval(secTimer);
}


