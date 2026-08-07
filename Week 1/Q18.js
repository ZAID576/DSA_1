// Shop discount question

let prompt = require('prompt-sync')();
let amount = Number(prompt("Enter amount: "));

let payableAmount = 0;

if (amount >= 0 && amount <= 5000) {
    payableAmount = amount;
}
else if (amount > 5000 && amount <= 7000) {
    payableAmount = amount - (5 * amount) / 100;
}
else if (amount > 7000 && amount <= 9000) {
    payableAmount = amount - (10 * amount) / 100;
}
else {
    payableAmount = amount - (20 * amount) / 100;
}

console.log("Payable Amount =", payableAmount);