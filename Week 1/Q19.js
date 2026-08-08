// Electricity Bill , [ 0 to 100 unit - 4.2rs/unit ], [ 101 to 200 - 6rs/unit ], [ 201 to 400 - 8rs/unit ], [ more than 400 - 13rs/units]

let prompt = require("prompt-sync")()
let unit = prompt("Enter your unit = ")

// let amount = "0"

if (unit>0 && unit<=100){
    console.log(unit * 4.2);
}

else if(unit>100 && unit<=200){
    console.log((100 * 4.2) + (unit - 100)*6); 
}

else if(unit>200 && unit<=400){
    console.log((100 * 4.2) + (100 * 6) + (unit - 200)*8);   
}

else{
    console.log((100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400)*13);
}




// Same code in optimize manner [1st way]

let prompt = require("prompt-sync")();
let unit = prompt("Enter your unit = ");

// let amount = 0;

if (unit > 0 && unit <= 100) {
   let amount = unit * 4.2;
}

else if (unit > 100 && unit <= 200) {
   let amount = (100 * 4.2) + (unit - 100) * 6;
}

else if (unit > 200 && unit <= 400) {
   let amount = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
}

else {
   let amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13;
}

console.log("Your payable amount =", amount);




// Same code in optimize manner [2nd way]

let prompt = require("prompt-sync")();
let unit = prompt("Enter your unit = ");

let amount = 0;

if (unit > 0 && unit <= 100) {
    amount = unit * 4.2;
}

else if (unit > 100 && unit <= 200) {
    amount = (100 * 4.2) + (unit - 100) * 6;
}

else if (unit > 200 && unit <= 400) {
    amount = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
}

else {
    amount = (100 * 4.2) + (100 * 6) + (200 * 8) + (unit - 400) * 13;
}

console.log("Your payable amount =", amount);
