const tinderUser= new Object()  // this is one way of defining -- this is singleton objects

const tinderUser1={} // this is another way of defining  -- Non singleton Objects

//console.log(tinderUser)  // {}
//console.log(tinderUser1) // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn=false


console.log(tinderUser)

const regularUser={

    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firsttName: "AKC",
            lastName: "thakur"

        }
    }
}
console.log(regularUser) //fullname: { userFullName: { firsttName: 'AKC', lastName: 'thakur' } }
console.log(regularUser.fullname) // { userFullName: { firsttName: 'AKC', lastName: 'thakur' } }
console.log(regularUser.fullname.userFullName) //{ firsttName: 'AKC', lastName: 'thakur' }
console.log(regularUser.fullname.userFullName.firsttName) // AKC
console.log(regularUser.fullname.userFullName.lastName) //Thakur

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign(target,source)
const obj3 = Object.assign({},obj1,obj2,obj4)

console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = {...obj1, ...obj2, ...obj4} // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj5)

// Data coming from database
const users = [{
    id:1,
    email: "abc@bbb.com"
},
{
    id:2,
    email: "ret@bbb.com"
}]

console.log(Object.keys(tinderUser))  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//asking for any value is present or not
console.log(tinderUser.hasOwnProperty("name")) // true


console.log(Object.values(users[0])) //[ 1, 'abc@bbb.com' ]
console.log(Object.values(users[1]))  //[ 2, 'ret@bbb.com' ]

console.log(Object.keys(users[0])) //[ 'id', 'email' ]


console.log("****************************************************")

const course={
    coursename: "JS",
    price: "999", 
    courseteacher: "HC"
}

const {courseteacher,price, coursename} = course
console.log(courseteacher,price,coursename) // HC 999 JS

// destructuring the objects
const {courseteacher: ct, price:pr, coursename:cn} = course
console.log(ct,pr,cn) // HC 999 JS

