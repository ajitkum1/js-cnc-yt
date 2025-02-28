function myName(){
    console.log("Thakur, koti koti pranam!")
}

myName() // this is execution
// myName // this is reference

function add2Num(num1,num2){  // here it is called parameters
    
    console.log(num1+num2)
}
add2Num(3,4)  // when we call it,  here it is called as arguments

function add3Num(num1,num2,num3){  // here it is called parameters
    
    //let result= num1+num2+num3
   // return result
   return num1+num2+num3
}
const sum= add3Num(3,4,5)  // when we call it,  here it is called as arguments
console.log("The sum of Three numbers are: " + sum)


function loginUserMsg(username){
    return `${username} just logged in `
}
const usr = loginUserMsg("ajit")
const usr1 = loginUserMsg() // undefined
console.log(usr)
console.log(usr1) 

function loginUserMsg1(username){
    if(username === undefined){
        console.log("Plese entre the username!")
        return
    }
    return `${username} just logged in `
}

const usrd = loginUserMsg1()
console.log(usrd)

console.log("##########################################")

function loginUserMsg1(username="sam"){
    if(username === undefined){
        console.log("Plese entre the username!")
        return
    }
    return `${username} just logged in `
}

const usrd1 = loginUserMsg1("Amul") // overwrite the default value (Sam)
console.log(usrd1)

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// ... --> This is called rest / spread operator

function calculatecartPrice(...num1){
    return num1
}

console.log(calculatecartPrice(200,300,400)) //[ 200, 300, 400 ]


function calculatecartPrice1(val1,val2, ...num1){
    return num1
}

console.log(calculatecartPrice1(200,300,4000,3000)) // [ 4000, 3000 ]

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
// How to pass object in functions

const usrt = {
    username: "RAMA",
    price: 200

}

function handleObject(anyobject){

    console.log(`UserName is ${anyobject.username}  and the price is ${anyobject.price}`)

}
handleObject(usrt)
handleObject({
    username: "Ajit",
    price:10
})

// passing Array
const myNewArray = [22,33,44,55,66,77]

function returnedSecondValue(getArray){
    return getArray[1]
}
console.log(returnedSecondValue(myNewArray))
console.log(returnedSecondValue([100,900,200,300]))

