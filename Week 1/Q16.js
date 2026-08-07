//Accept 3 number and print the greatest among them

let prompt = require("prompt-sync")()

let num1 = prompt("Enter your first number = ")
let num2 = prompt("Enter your second number = ")
let num3 = prompt("Enter your third number = ")

if(num1>num2 && num1>num3){
    console.log("The greatest number is =", num1);
}

else if(num2>num1 && num2>num3){
    console.log("The greatest number is = ", num2);
}

else{
    console.log("The greatest number is = ", num3);
}