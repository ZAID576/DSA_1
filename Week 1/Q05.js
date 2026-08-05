// Swapping two variable 1st way

// let a = 10
// let b = 20

// let c = a
// a = b
// b = c

// console.log(a);
// console.log(b);

// output = 20 10



//2nd way of swapping two variables

// let a = 10
// let b = 20

// a = a + b
// b = a - b
// a = a - b

// console.log(a,b);

// output 20 10



//3nd way of swapping two variables using destructuring

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);

// output 20 10