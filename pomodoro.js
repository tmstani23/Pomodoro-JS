//Create a timer that displays seconds counting down from 60 and stopping at 0

let secTimer = 0;
let breakOn;
let breakDisplay = document.getElementById("statusDiv");
let setHour;
let setMin;
let setSec;
let inputArr;



//let result;
const gongA = new Audio('sounds/cgong.mp3');

//let paused = false;
//var secTimer = setInterval(function(){ calcTime() }, 1000);

//function that takes user inputs and saves them to global variables
function setTInputs() {
    //get number input and save to globals
    // 
    // setHour = inputHour;
    // setMin = inputMin;
    // setSec = inputSec;
    
    // if (setMin == undefined) {
    //     setMin = 0;
    // }
    // if (setSec == undefined) {
    //     setSec = 0;
    // }
    
    intoZero();
    

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
        
        document.getElementById("statusP").innerHTML = " ";

    }
   
    
    //console.log(setHour);
    //console.log(setHour, setMin, setSec);
    //display time to screen:
    //result = inputHour + `:`+ inputMin + `:` + inputSec;
    result = setHour + `:`+ setMin + `:` + setSec;
    
    displayTime(result);    
}

function intoZero() {
    if (document.getElementById("hrInput").value == "") {
        
        document.getElementById("hrInput").value = 0;
        
    }
    if (document.getElementById("bhrInput").value == ""){
        document.getElementById("bhrInput").value = 0;
    }
    if (document.getElementById("minInput").value == "") {
        
        document.getElementById("minInput").value = 0;
        
    }
    if (document.getElementById("bminInput").value == ""){
        document.getElementById("bminInput").value = 0;
    }
    if (document.getElementById("secInput").value == "") {
        
        document.getElementById("secInput").value = 0;
        
    }
    if (document.getElementById("bsecInput").value == ""){
        document.getElementById("bsecInput").value = 0;
    }
    
}
//Timer that calls displayTime function every seconds;
function startTimer() {
    if(setMin == undefined) {
        setTInputs();
    }
    //console.log(secTimer);
    if (secTimer >= 1) {
        //stopTimer();
        return;
    }
    
    //console.log(secTimer);
    secTimer = window.setInterval('calcTime()', 1000);
}

function calcTime() {
    
    let result = "";
    if (setHour == 0 && setSec == 0 && setMin == 0) {
        if (breakOn == true) {
            stopTimer();
            gongA.pause();
            gongA.currentTime = 0;
            setTInputs(breakOn = false);
            gongA.play();
        }
        else {
            stopTimer();
            setTInputs(breakOn = true)
            gongA.pause();
            gongA.currentTime = 0;
            gongA.play();
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
    
    //console.log(setHour);
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
    //document.getElementById("mainTimeP").innerHTML = setHour;
}

        


//Start timer:
//startTimer();

