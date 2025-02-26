// number => 2 to power of 53
// bigint  -- used in facebook/redit
// string = "RS"
// boolean = true/false
// null => standalone value
// undefined => value not assigned yet
// symbol => for unique ness


// object

console.log(typeof undefined) //undefined
console.log(typeof null) //



// datatype Summary

/* 
There are 2 types of dataTypes on the basis of how you store data in memory and access the data from memory
1. Primitive:
    this is of 7 categories. 
    1- String : all primitive are call by value (means the original data reference not provided, 
    only copy provide for change)
    2- Number
    3- Boolean
    4- null
    5- undefined
    6- BigInt -- big values
    7- Symbol -- to make value unique

2. Non-Primitive (reference type):
    1. Array
    2. Objects
    3. Functions


*/

const id = Symbol('1213')
const anotherId = Symbol('1213')

console.log(id === anotherId)  // false

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "akc",
    age: 31
}

const myFunction= function(){
    console.log("Hello World!")
}

console.log(typeof myFunction) // object 


/******************************************************************************** */
/* Memory -- is of 2 types 1. Stack and Heap

 1. Stack: (used in Primitive data-types)
      here you will get a copy of variable you created

 2. Heap: (used in Non-Primitive data-types)
    here you will get a reference  of original value. 
    If you do any change in reference value,the original value also change. 


*/

// STACK

let myFruit = "Apple";

let myLunch = myFruit;

console.log(myFruit)
console.log(myLunch)
//************** */
let myFruit1 = "Apple";

let myLunch1 = myFruit;
    myLunch1 = "Orange"; 

console.log(myFruit1)
console.log(myLunch1) // here the reference value was changed, but original value remain same.

// HEAP

let userOne = {
    email: "abc@gmail.com",
    pwd: "abc@abc"
}

let userTwo=userOne
console.table([userOne,userTwo])

 userTwo.email="bbb@nb.com"

console.table([userOne,userTwo])