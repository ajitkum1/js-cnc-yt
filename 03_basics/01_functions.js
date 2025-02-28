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


function loginUserMsg1(username="sam"){
    if(username === undefined){
        console.log("Plese entre the username!")
        return
    }
    return `${username} just logged in `
}

const usrd1 = loginUserMsg1("Amul")
console.log(usrd1)