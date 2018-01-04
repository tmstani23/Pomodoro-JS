
let today = new Date();

let initialSec = today.getSeconds();
console.log(initialSec);

//today.setHours(0, 0, 0, 0);
//console.log(today); // still today, now 00:00:00 sharp.
setTimeout(displaySeconds, 3000);

function displaySeconds() {
    let seconds = today.getSeconds();
    console.log(seconds);
}
