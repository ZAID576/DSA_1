// Loops - Take a number as input and print its table 5*1 = 5, 5*2 = 10..... so on

let prompt = require("prompt-sync")()
let n = prompt("Enter a table number u like to print = ")

for(let i=1; i<=10; i++){
   console.log(n, "*", i ,"=", (n*i));
}