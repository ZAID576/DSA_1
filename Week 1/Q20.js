// Counting number of days in a given month 

// Logic yaad rakho 🧠
// 1) February (2) → 28 days
// 2) April, June, September, November → 30 days
// 3) Baaki valid months → 31 days
// 4) 1–12 ke bahar → Invalid month

let prompt = require("prompt-sync")();
let month = Number(prompt("Enter month number = "));

let days;

if (month == 2) {
    days = 28;
}

else if (month == 4 || month == 6 || month == 9 || month == 11) {
    days = 30;
}

else if (month >= 1 && month <= 12) {
    days = 31;
}

else {
    days = "Invalid month";
}

console.log("Number of days =", days);