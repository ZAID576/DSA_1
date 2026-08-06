// Circumference of a Circle

let prompt = require("prompt-sync")();

let radius = Number(prompt("Enter radius: "));

let circumference = 2 * Math.PI * radius;

console.log("Circumference =", circumference);
console.log("Circumference =", (circumference).toFixed(2));
console.log("Circumference =", Math.floor(circumference));
console.log("Circumference =", Math.floor(circumference).toFixed(2));