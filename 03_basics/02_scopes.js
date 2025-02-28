
let a =100   // This is Global scope , available to all inside the scope and outside.

if (true){
    let     a=30
    const   b=40
    console.log("Inner Scope: " + a) // This is local scope , available only inside the inner block scope
}

console.log(a)

console.log("**************************************")

function One(){
    const username= "akc"
    
    function Two(){
        const webSite="www.google.com"
        console.log(username)
    }
    //console.log(webSite) // ReferenceError: webSite is not defined--- because scope is local
    Two()
}
One()

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
if(true){
    const username = "thakur"
    if(username === "thakur"){
        const website="facebook"
        console.log(`user ${username} able to access website ${website}`)
    }
   //  console.log(website)  // shouldthrow error because out of scope, website is available only inside the block
}
//console.log(username) //ReferenceError: username is not defined -- username should call inside the scope, not outside.


console.log("************ INTERSTING *********************")

console.log(addone(5))  // working
function addone(num){
    return num+1
}

 // here the value is returned, but not print
    //console.log(addtwo(7)) // throwing error --- ReferenceError: Cannot access 'addtwo' before initialization..
    // this is called hoisting
const addtwo = function(num){
    return num+2
}
console.log(addtwo(7))  // working
