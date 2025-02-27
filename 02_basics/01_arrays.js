// array

const myArray = [1,2,3,4,5,6];

console.log(myArray[0]);
console.log(myArray[4]);

const myHeros = ["Thakur","akc","RS"];
console.log(myHeros)

const myArray2 = new Array(2,4,3,5,6,7,9);
console.log(myArray2)

// Array methods

const my1Array = [4,5,6];
my1Array.push(80)
my1Array.push(81)
my1Array.pop()          // Remove the element from the end
my1Array.unshift(12)    // Add the element from the begining
my1Array.shift()        // Remove the element from the begining


console.log(my1Array)

console.log(my1Array.includes(80))
console.log(my1Array.includes(90))
console.log(my1Array.indexOf(80)) // 3
console.log(my1Array.indexOf(90)) // -1 -- not available

const newAddarr = my1Array.join()  // .join -- add all the array in to a string
console.log(my1Array) // in a arya format  [ 4, 5, 6, 80 ]
console.log(newAddarr) // in a string format  4,5,6,80
console.log(typeof newAddarr) // string

console.log("***************** Slice and Splice *********************")

const mydata1= [4,5,6,7];

console.log("A", mydata1);

const mecon = mydata1.slice(1,3)
console.log(mecon)

console.log("B", mydata1)

const mecon1 = mydata1.splice(1,3) // Splice manipulate the original array
console.log("C", mydata1)
console.log(mecon1)
