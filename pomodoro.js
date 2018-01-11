//Create a timer that displays seconds counting down from 60 and stopping at 0
// let inputHour = 0;
// let inputMin = 25;
// let inputSec = 60;
let inputHour = 0;
let inputMin = 25;
let inputSec = 60;
let secTimer = 0;
let setHour = inputHour;
let setMin = inputMin;
let setSec = inputSec;

//let paused = false;
//var secTimer = setInterval(function(){ calcTime() }, 1000);

//function that takes user inputs and saves them to global variables
function getTInputs() {
    //get number input and save to globals
    inputHour = document.getElementById("hrInput").value;
    inputMin = document.getElementById("minInput").value;
    inputSec = document.getElementById("secInput").value;
    //display time to screen:
    result = inputHour + `:`+ inputMin + `:` + inputSec;
    displayTime(result);
    console.log(inputMin);


    //check if input is a number if not throw an error
    //check if timer is running if yes throw an error

}


//Timer that calls displayTime function every seconds;
function startTimer() {
   
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
        setMin = inputMin;
        setSec = inputSec;
    }
   
    else if (setSec == 0) {
        setMin = setMin - 1;
        setSec = inputSec;
    }
    
    if (!setSec == 0) {
        setSec = setSec - 1
    }
    
    result = setHour + `:`+ setMin + `:` + setSec;
    
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

