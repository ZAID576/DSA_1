// Accept a year and check if it is leap year or not

let prompt = require("prompt-sync")()

let year = prompt("Enter your Year = ")

if(year%4==0){
    console.log("This year is leap year =",year);
}

else {
    console.log("Not a leap year");   
}