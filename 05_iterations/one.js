//for of

arr = [1, 2, 3, 4, 5, 6, 7]
for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(` Each char of greet is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', 'INDIA')
map.set('FR', 'France')
map.set('UK', 'United Kingdom')
map.set('IN', 'INDIA')

console.log(map)
console.log("**************************8")
for (const key of map) {
    console.log(key)
}

console.log("**************************8")
for (const [key, value] of map) {
    console.log(key, ':', value)
}

console.log("**************************8")

const myObject = {
    CK: 'Cricket',
    FB: 'football'
}

/* for (const [key,value] of myObject) {   // forof loop not working for Objects.
console.log(key,':' ,value)
}*/

// we need to use forin loop for Object print.
for (const key in myObject) {
    console.log(`${key} shortcut is for game ${myObject[key]}`)
}


console.log("**************************8")

// Foreach loop

const coding = ["off", "exl", "email", "ai"]
coding.forEach(function (item) {
    console.log(item)
})

console.log("**************************8")
const coding1 = ["js", "ts", "java", "ai"]
coding1.forEach((sub) => {
    console.log(sub)
})

console.log("**************************8")
const coding2 = ["1", "ts1", "java1", "ai1"]
coding1.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


console.log("**************************8")

const myObjCoding = [
    {
        lanaguageName:'javascript',
        lanFilename:'js'
    },
    {
        lanaguageName:'python',
        lanFilename:'py'
    },
    {
        lanaguageName:'typescript',
        lanFilename:'ts'
    }
]

myObjCoding.forEach(item => {
    console.log(item.lanaguageName)
    console.log(item.lanFilename)
});