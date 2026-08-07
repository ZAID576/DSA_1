// Accept a number and check whether it is even or odd

let prompt = require("prompt-sync")()

let num = prompt("Enter your number : ")

if(num%2==0){
    console.log("Number is Even");
}

else{
    console.log("Number is odd");
}