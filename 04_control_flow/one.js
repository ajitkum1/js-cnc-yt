// If Statement

/*
if(if condition is true){
     // code should execute
}

if(if condition is false){
     // code should not execute
}
*/

// === strict check (check value and datatype)
// == check only value , not the datatype

if (2=="2"){
    console.log("code executed") // output -> code executed , which is wrong
}

if (2==="2"){
    console.log("code should not executed")  // code should not executed, which is correct
}


// var and let datatype difference with real example
const score =50;

 if (score >40){
    var power ="fly"  // datatype is var
    console.log(`User power: ${power}`)
}
console.log(`Var dataype --User power: ${power}`)  
// although the power condition is internally defined, 
// still we get output out side the scope using var datatype

if (score >40){
    let power ="fly" // datatype is let
    console.log(`User power: ${power}`)
}
//console.log(`User power: ${power}`) // ReferenceError: power is not defined

// although the power condition is internally defined, 
// getting error msg using let datatype -- ReferenceError: power is not defined which is correct.



console.log("******************************************")

const month =3;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
        
    case 5:
        console.log("May");
        break;

    default:
        console.log(`Invalid input ${month}`)

}

// here we are using break because it will check all the code if we are not using break except default value.

const monthstr ="feb";
switch (monthstr){
    case "January":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
        
    case "april":
        console.log("May");
        break;

    default:
        console.log(`Invalid input ${monthstr}`)

}

// false values
// false, 0, -0, BigInt 0n, null, undefined, "",NaN

// truthy values
// "0", 'false'," ",[],{}, function(){}

console.log("******************************************")

const UserEmail ="ak@ak.com"

if (UserEmail.length === 0){
    console.log(`Useremail ${UserEmail} Array is empty`)
}
else{
    const len=UserEmail.length;
    console.log(`UserEmail lenght is ${len}`)
}

console.log("******************************************")

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log(` Object is empty`)
}

console.log("******************************************")

// Nullish Coalescing Operaor (??): null undefined

let val1;
val1= 5 ?? 10
console.log(val1) // 5

val1 = null ?? 10
console.log(val1) // 10

val1 = undefined ?? 18
console.log(val1) // 18

val1 = null ?? 11 ?? 21
console.log(val1) // 11, the first correct value

console.log("******************************************")

// Terniary Operator  
// (Nullish Coalescing Operaor and Terniary Operator are different with each other)

// condition ? true : false
const teaPrice = 100;
teaPrice >=100 ? console.log(` Price of tea is greatre than 100 ${teaPrice}`):console.log("Price is less than 100")