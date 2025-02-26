const founder ="akc"
const satsang = "Deoghar"

console.log(founder + " " + satsang)  // this is the old style of concatinating

console.log(`Hello Our Guruji's name is ${founder} and the satsang is located at ${satsang}`)  //latest style of concatinating
// this called string interpollation using back tick (``)

console.log(`Hello Our Guruji's name is ${founder.toUpperCase()} and the satsang is located at ${satsang.toLowerCase()}`)


// another way of defining String

const gameName = new String("Cricket")

console.log(gameName[0])
console.log(gameName.__protp__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5));
console.log(gameName.indexOf('C'));

const newString = gameName.substring(0,4);
console.log(newString)

const otherString = gameName.slice(-7,2) // in slice we can reverse the string using -ve value
console.log(otherString)