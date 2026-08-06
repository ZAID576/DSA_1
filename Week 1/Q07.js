// Maths Function

// -- Math.abs - turn any negative number into positive but it will not turn positive to negative 
console.log(Math.abs(-10));
// 10


// -- Math.ceil -  //increase decimal number to the next nearest digit 
console.log(Math.ceil(10.2));
// 11


// -- Math.floor()  //decrease decimal number to the lower nearest digit
console.log(Math.floor(10.9));
// 10


// -- Math.round()  // if the number has decimal value below .4 then it will lower to the nearest digit or if the number is .5 or above .5 then it will increase to the next nearest digit 
console.log(Math.round(13.4));
// 13


// -- Math.trunc() // remove the decimal part
console.log(Math.trunc(10.67834647836));
// 10


// -- Math.pow()
console.log(Math.pow(2, 5));  // first element is the number and second element is the power 
// 32


// -- Math.sqrt()  // square the number
console.log(Math.sqrt(25));  
// 5


// -- Math.cbrt()  // cube the number
console.log(Math.cbrt(27));    
// 3


// -- Math.max()  // print max value 
console.log(Math.max(19, 56, 78, 69, 2));  
//78


// -- Math.min()  // print min value
console.log(Math.min(19, 56, 78, 69, 2)); 
//2


// -- Math.random()  // it give any random number between 0 to 1 used in OPT generation
console.log(Math.random()); 
// 0.5012613503794165 


// -- toFixed()
let num = 9.87654;
console.log(num.toFixed(3));
//"9.877"