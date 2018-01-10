//Create a timer that displays seconds counting down from 60 and stopping at 0
let inputHour = 0;
let inputMin = 1;
let inputSec = 5;
let secTimer = 0;
let setHour = inputHour;
let setMin = inputMin;
let setSec = inputSec;

//let paused = false;
//var secTimer = setInterval(function(){ calcTime() }, 1000);

//Timer that calls displayTime function every seconds;
function startTimer() {
    // if(secTimer == true) {
    //     console.log("istrue");
    //     stopTimer();
    //     return;
    // }
    console.log(secTimer);
    if (secTimer >= 1) {
        //stopTimer();
        return;
    }
    // if (secTimer > 1){
    //     stopTimer();
    //     return;
    // }
    // if (secTimer >=2) {
    //     return;
    // }
    if (setHour == 0 && setMin == 0 && setSec == 0) {
        
        restartTimer();
        
    }
    console.log(secTimer);
    secTimer = window.setInterval('calcTime()', 1000);
}

function calcTime() {
    let result = "";
    if (setHour == 0 && setSec == 0 && setMin == 0) {
        stopTimer();
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
    
    if (!setSec == 0) {
        setSec = setSec - 1
    }
    
    result = setHour + " " + setMin + " " + setSec;
    
    // console.log(setHour + "hour");
    // console.log(setMin + "min");
    // console.log(setSec + "sec");
    //console.log(result);
    return displayTime(result);
    
}
function restartTimer() {
    setHour = inputHour;
    setMin = inputMin;
    setSec = inputSec;
    
    let result = setHour + " " + setMin + " " + setSec;
    displayTime(result);
    //endTimer();
}
function stopTimer() {
    
    clearInterval(secTimer);
    secTimer = 0;
    //secTimer = false;
}
function displayTime(time){
    document.getElementById("mainTimeP").innerHTML = time;
}

        


//Start timer:
//startTimer();

