let score = "33abc"

console.log(typeof score);

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN -- not a number

let someNumber=44
let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber); // String

//1 = true, 0=false

//**************************  OPERATIONS  ************************************** */

let value =3
let negValue = -value
console.log(negValue)

let str1 ="hello"
let str2= "Sir"

console.log(str1+ " " +str2 );

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+"2")  //12
console.log("1"+2+2)  // 122

console.log(1+2 +"2")  // 32

console.log(true) // true
console.log(+true) // 1
//console.log(true+) // give error expression expected
console.log(+"") //0

let gameCounter =10;
gameCounter++;  // postfix -
++gameCounter; // pretfix -
console.log(gameCounter) //11

console.log(/************************/)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.