
//Initialize global variables:
let secTimer = 0;
let breakOn;
let setHour;
let setMin;
let setSec;

//Initialize audio file for timer end
const gongA = new Audio('sounds/cgong.mp3');


//function that takes user inputs and saves them to global variables
function setTInputs() {
    //intoZero resets user inputs to 0 if they were left blank:
    intoZero();
    
    //Break on determines if the timer is on break or normal timer status
    if (breakOn == true) {
        //Set global time variables to user input values from the DOM:
        setHour = document.getElementById("bhrInput").value;
        setMin = document.getElementById("bminInput").value;
        setSec = document.getElementById("bsecInput").value;
        //Start the timer - call function:
        startTimer();
        //Display break message to screen:
        document.getElementById("statusP").innerHTML = "Break!";  
    }
    //Break is off:
    else {
        //Set global time variables to user inputs:
        setHour = document.getElementById("hrInput").value;
        setMin = document.getElementById("minInput").value;
        setSec = document.getElementById("secInput").value;
        //Set status display to blank:
        document.getElementById("statusP").innerHTML = " ";

    }
    //Set result to time variables separated by colons:
    result = setHour + `:`+ setMin + `:` + setSec;
    //Display the result to the screen:
    displayTime(result);    
}
//Function that sets user input fields to 0 if they were left blank or deleted:
function intoZero() {
    //if element input value is blank set value to 0:
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
//Main timer function that creates an interval timer:
function startTimer() {
    //If setMin timer input is undefined call set inputs function to grab user inputs:
    if(setMin == undefined) {
        setTInputs();
    }
    //If there is more than one timer end the function:
    if (secTimer >= 1) {
        return;
    }
    
    //Set a timer that calls calcTime function every second:
    secTimer = window.setInterval('calcTime()', 1000);
}
//Function that calculates time, updates time variables and plays sounds:
function calcTime() {
    //initialize result variable to empty:
    let result = "";
    //If all the time variables reach zero:
    if (setHour == 0 && setSec == 0 && setMin == 0) {
        //If break mode is on:
        if (breakOn == true) {
            //End the timer:
            stopTimer();
            //Stop the gong sound:
            gongA.pause();
            gongA.currentTime = 0;
            //Call function that updates time variables:
            setTInputs(breakOn = false);
            //Play gong sound:
            gongA.play();
        }
        //If break mode isn't on:
        else {
            //End the timer:
            stopTimer();
            //Update time variables - call function
            setTInputs(breakOn = true)
            //End gong sound in case it was still playing
            gongA.pause();
            gongA.currentTime = 0;
            //Play gong sound:
            gongA.play();
        }
    }
    //If there are remaining hours and the mins and secs are 0:
    else if (setHour > 0 && setMin == 0 && setSec == 0) {
        //Down increment the hours 1:
        setHour = setHour - 1;
        //Reset mins and secs to 59:
        setMin = 59;
        setSec = 59;
    }
    //Else if seconds reach zero:
    else if (setSec == 0) {
        //Down increment the minutes reset seconds to 59:
        setMin = setMin - 1;
        setSec = 59;
    }
    //Else if none of the above: 
    else if (!setSec == 0) {
        //down increment seconds by 1:
        setSec = setSec - 1
    }
    //Update the result variable:
    result = setHour + `:`+ setMin + `:` + setSec;
    
    //Display the result to the screen:
    return displayTime(result);
}
//Function that clears the interval timer:
function stopTimer() {
    //Removes the current timer:
    clearInterval(secTimer);
    //Set timer count to 0:
    secTimer = 0;
}
//Function that displays the time to the screen(DOM);
function displayTime(time){
    //Display the function argument input to the screen:
    document.getElementById("mainTimeP").innerHTML = time;
}


