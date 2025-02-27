const marvel_heros = ["thor","Ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros) // arrays of arrays --- [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][2])  // batman 


const marvel_heros1 = ["thor","Ironman","spiderman"]
const all_heros =  marvel_heros1.concat(dc_heros)
console.log(all_heros)  // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] 

const all_comb_heros = [...marvel_heros1, ...dc_heros]  // this is called spread method
console.log(all_comb_heros) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[8,9,[1,2,3]]]

const real_another_array = anotherArray.flat(Infinity) // this will give output of child array also in a single line

console.log(real_another_array)


console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) //  [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "Hitesh"})) // []

let score =100
let score1 = 200
let scotre2 = 300
console.log(Array.of(score,score1,scotre2)) // [ 100, 200, 300 ]