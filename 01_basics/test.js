"use strict" //treat all JS Code as newer version
// alert (3+3) // we are using nodejs, not browser

console.log("RS")

console.log("akc")
// prepfer not to use var datatypes because of issue in block scope and functional scope.

const accountId =12345
let accountEmail="abc@abc.com" //Cannot redeclare block-scoped variable
var accountPassword="abc432"
accountCity="Mumbai"
let accountState;
 accountEmail="GGG@abc.com" // you can assign a new value 

//accountId=12


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])