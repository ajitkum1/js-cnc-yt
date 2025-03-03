const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc,curVal) {
    console.log(`acc:${acc} and currVal:${curVal}`)
    return acc+curVal
},0)

console.log(myTotal)

const myTotal1 = myNums.reduce((acc,curVal) => acc+curVal,0 )
console.log(myTotal1)

console.log("***********************")

const shoppintCart= [
{
    itemName: "js",
    price: 900
},
{
    itemName: "ts",
    price: 800
},
{
    itemName: "py",
    price: 1000
}
]

const priceTotal = shoppintCart.reduce((acc,item) => (acc+item.price),0)
console.log(priceTotal)