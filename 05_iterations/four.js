const myNums=[1,2,3,4,5,6,7]

const mapNum = myNums.map((num) => num+5)
console.log(mapNum)


const mapNum1 = myNums.map((num) => {return num+1})
console.log(mapNum1)

const wowNum=[1,2,3,4,5,6,7]

const wm = myNums.map((num) => num*10)
                    .map((num) => num +1)
                    .filter((num) => num >=40)
console.log(wm)
