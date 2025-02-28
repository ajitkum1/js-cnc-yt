// singleton  -- when objects create from constructors (single), but not from literals(multiple instances)
    //Objects.create -- singleton


// objects literals

const mySym = Symbol("key1")  // Symbol data type


const JsUser = {
    name : "akc",
    "full name" : "Thakur Anukul Chandra",
    [mySym] : "MyKey1",
     age : 47,
    location: "Pune",
    email: "abc@google.com",
    isLoggedIn: false,
    lasyloginDays : ["Monday","Tuesday","Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"]) // this is not possible through .
console.log(JsUser[mySym])
//console.log(typeof JsUser.mySym) // string
console.log(typeof JsUser[mySym])

// Change the value
JsUser.email="bbbbb@google.com"

// Object.freeze(JsUser) // here the chnages in object is freezed

JsUser.email="wwwww@google.com"

console.log(JsUser)

console.log("************************")

JsUser.greeting = function(){
    console.log("hello JS User")
}

console.log(JsUser.greeting) // [Function (anonymous)]
console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`hello JS User, ${this.name}`)
}

console.log(JsUser.greeting2())
