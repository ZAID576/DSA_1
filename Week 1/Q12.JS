// Area of Circle

let prompt = require("prompt-sync")();

let radius = Number(prompt("Enter radius: "));

let area = Math.PI * radius * radius;

console.log("Area =", (area));
console.log("Area =", Math.trunc(area));
console.log("Area =", Math.trunc(area).toFixed(3));
console.log("Area =", Math.floor(area).toFixed(3));
console.log("Area =", Math.ceil(area).toFixed(3));