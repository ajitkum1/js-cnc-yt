const score =400
console.log(score)

const balance =new Number(100)
console.log(balance)
console.log(balance.toString()) // converted to String and now we can use string properties here
console.log(balance.toString().length) 
console.log(balance.toFixed(3))  // this will show you number results with decimal values as you enter

const wowNumber = 22.92989
console.log(wowNumber.toPrecision(3));
console.log(wowNumber.toPrecision(4));

const hundreds = 1000000;

console.log(hundreds.toLocaleString()); // american format -- 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // Indian format  -- 10,00,000


/* *******************************  MATHS *************************************************/

console.log("*************************MATH ************************************")


console.log(Math) // Object [Math] {}

console.log(Math.PI) // 3.141592653589793
console.log(Math.SQRT2) // 1.4142135623730951
console.log(Math.sqrt(9)) // 3
console.log(Math.abs(-9)) //abs(absolute)--> 9  change from negative to positive value
console.log(Math.round(4.5)) // 5
console.log(Math.round(4.2)) // 4

console.log(Math.ceil(4.2)) // Always give upper value -- 5
console.log(Math.ceil(4.9)) // 5

console.log(Math.floor(4.2)) // Always give lower value -- 4
console.log(Math.floor(4.9)) // 4

console.log(Math.min(2,3,4,5,1,7)) // gives you minimum value --1 
console.log(Math.max(2,3,4,5,1,7)) // gives you maximum value --7


console.log(Math.random());

console.log((Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );

console.log("*************************RANDOM ************************************")


const min =10;
const max =50;

console.log(Math.random()*(max-min + 1)); // this will give value also from 1-10, but we need from 10 to 20
console.log((Math.random()*(max-min + 1)) + min); // this will give value from 10 to 20 with decimal values
console.log(Math.floor(Math.random()*(max-min + 1) + min));  //will give value from 10 to 20 with correct values


