//Create a timer that displays seconds counting down from 60 and stopping at 0

let secTimer = 0;
let breakOn;
let setHour;
let setMin;
let setSec;

//let paused = false;
//var secTimer = setInterval(function(){ calcTime() }, 1000);

//function that takes user inputs and saves them to global variables
function setTInputs() {
    //get number input and save to globals
    // inputHour = document.getElementById("hrInput").value;
    // inputMin = document.getElementById("minInput").value;
    // inputSec = document.getElementById("secInput").value;
    // setHour = inputHour;
    // setMin = inputMin;
    // setSec = inputSec;
    if (breakOn == true) {
        setHour = document.getElementById("bhrInput").value;
        setMin = document.getElementById("bminInput").value;
        setSec = document.getElementById("bsecInput").value;
        startTimer();
        document.getElementById("statusP").innerHTML = "Break!";  
    }
    else {
        setHour = document.getElementById("hrInput").value;
        setMin = document.getElementById("minInput").value;
        setSec = document.getElementById("secInput").value;
        document.getElementById("statusP").innerHTML = "Regular Time";
    }
    
    //display time to screen:
    //result = inputHour + `:`+ inputMin + `:` + inputSec;
    result = setHour + `:`+ setMin + `:` + setSec;
    displayTime(result);    
}


//Timer that calls displayTime function every seconds;
function startTimer() {
    if(setMin == undefined) {
        setTInputs();
    }
    console.log(secTimer);
    if (secTimer >= 1) {
        //stopTimer();
        return;
    }
    
    console.log(secTimer);
    secTimer = window.setInterval('calcTime()', 1000);
}

function calcTime() {
    
    let result = "";
    if (setHour == 0 && setSec == 0 && setMin == 0) {
        if (breakOn == true) {
            stopTimer();
            setTInputs(breakOn = false);
        }
        else {
            stopTimer();
            setTInputs(breakOn = true)
        }
    }
    else if (setHour > 0 && setMin == 0 && setSec == 0) {
        setHour = setHour - 1;
        setMin = 59;
        setSec = 59;
    }
    else if (setSec == 0) {
        setMin = setMin - 1;
        setSec = 59;
    }
    
    else if (!setSec == 0) {
        setSec = setSec - 1
    }
    
    result = setHour + `:`+ setMin + `:` + setSec;
    
    
    return displayTime(result);
    
}
// function restartTimer() {
//     // setHour = inputHour;
//     // setMin = inputMin;
//     // setSec = inputSec;
//     setTInputs();
//     let result = setHour + " " + setMin + " " + setSec;
//     displayTime(result);
//     //endTimer();
// }
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

