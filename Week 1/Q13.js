// Accept two number and print the greatest number [Conditional Statement,Q1]

let prompt = require("prompt-sync")();


let num1 = prompt("Enter your first number = ")
let num2 = prompt("Enter your second number = ")

if(num1>num2){
    console.log("Greatest number is : ", num1 );
    
}

else {
    console.log("Greatest number is : ", num2);
    
}


// Bonus, handling equal number too

let prompt = require("prompt-sync")();

let num1 = prompt("Enter your first number = ")
let num2 = prompt("Enter your second number = ")

if(num1>num2){
    console.log("Greatest number is : ", num1);
    
}

else if(num1<num2){
     console.log("Greatest number is : ", num2);
}

else{
    console.log("Both number are equal");
    
}