// Loops - Print all the factors of the numbers

let prompt = require("prompt-sync")();

let n = prompt("Enter a number = ");

// console.log("Factors are:");

for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log("Factors are:",i);
    }
};