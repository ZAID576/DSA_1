//Accept a number and check whether it is positive, negative, or zero.

let prompt = require("prompt-sync")()

let num = prompt("Enter your number = ")

if(num>0){
    console.log("Number is positive");
}

else if(num<0){
    console.log("Number is negative");
}

else{
    console.log("Number is zero");
}