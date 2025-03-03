console.log("**************************8")
const coding1 = ["js", "ts", "java", "ai"]
coding1.forEach((sub) => {
    console.log(sub)
})
// for each does not return any value

console.log("**************************8")
// where as filter retrun value
const num =[1,2,3,4,5,6,7]

const selectNum = num.filter( (item) => item >5)
console.log(selectNum)

const num1= num.filter( (val) =>{
    return val < 5
})

console.log(num1)