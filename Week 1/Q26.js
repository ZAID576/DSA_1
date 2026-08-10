// Loops - Print the sum of all even & odd numbers in a range separately

let prompt = require("prompt-sync")();

let start = prompt("Enter starting number = ");
let end = prompt("Enter ending number = ");

let evenSum = 0;
let oddSum = 0;

for (let i = start; i <= end; i++) {

    if (i % 2 == 0) {
        evenSum = evenSum + i;
    }
    else {
        oddSum = oddSum + i;
    }
}

console.log("Sum of even numbers =", evenSum);
console.log("Sum of odd numbers =", oddSum);