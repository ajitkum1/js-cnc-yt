const user = {
username: "AKC",
price: 199,

welComeMsg: function(){
    console.log(`${this.username}, welcome to website`) // this. used in refrence to current context
}

}
user.welComeMsg()
user.username = "Sam"
user.welComeMsg()
console.log("************************************")
function chai(){
    let username = "abd"
    console.log(this.username)
    //console.log(this)
}
chai()

const chai1 = function (){
    let username = "avx"
    console.log(this.username)
}
chai1()

console.log("************************************")

const chaiT =  () => {  // => this is called arrow functions.
    let username = "avx"
    console.log(this)
}
chaiT() // {}

console.log("************************************")

const addTwon =  (num1,num2) => {  
    return num1+num2
}
console.log(addTwon(9,1))

console.log("************************************")

const addTree =  (num1,num2,num3) => num1+num2+num3
console.log(addTree(9,1,10))

const addTree1 =  (num1,num2,num3) => (num1+num2+num3) // if you give {num1+num2+num3}, then need to use return key word, else not
console.log(addTree1(9,11,10))

// using objects in arrow function
const addTree4 =  (num1,num2) => ({username: "abc"})
console.log(addTree4(2,3))

