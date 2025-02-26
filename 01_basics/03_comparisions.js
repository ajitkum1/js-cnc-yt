/*console.log(2>1)  // true
console.log(2<1)  // false
console.log(2==1) // false
console.log(2!=2) // false */


console.log("2" > 1)  // true  // should not compare 2 different datatypes.
console.log(typeof "2") // string

// Avoid below comparisions

console.log(null >0 )
console.log(null ==0 )
console.log(null >=0 )

console.log(undefined > 0 )
console.log(undefined ==0 )
console.log(undefined >=0 )

console.log("//strict check ***********")
//strict check
console.log("2" === 1) // false

