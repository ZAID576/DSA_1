// Calculate compound interest 
// CP = P(1+r/100)^(t)-P

let prompt = require("prompt-sync")();

let p = prompt("Enter principle");
let r = prompt("Enter rate of interest");
let t = prompt("Enter time");

console.log(p * Math.pow(1 + r / 100, t) - p);
console.log((p * Math.pow(1 + r / 100, t) - p).toFixed(3));

