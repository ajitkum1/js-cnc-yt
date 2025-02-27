let myDate = new Date(); // 2025-02-27T07:44:45.556Z
console.log(myDate) // 2025-02-27T07:48:52.312Z

console.log(typeof myDate) // object

console.log(myDate.toString()) // Thu Feb 27 2025 07:48:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())  // Thu Feb 27 2025
console.log(myDate.toISOString())  // 2025-02-27T07:48:52.312Z
console.log(myDate.toJSON())       // 2025-02-27T07:48:52.312Z
console.log(myDate.toLocaleDateString())   // 2/27/2025
console.log(myDate.toLocaleString())    // 2/27/2025, 7:48:52 AM
console.log(myDate.toLocaleTimeString())   //  7:48:52 AM

let myCreateDate = new Date(2025,0,10);  
console.log(myCreateDate)  // 2025-01-10T00:00:00.000Z

let myCreateDate1 = new Date(2025,0,10,5,3);
console.log(myCreateDate1) // 2025-01-10T05:03:00.000Z

let myCreateDate2 = new Date(2025,0,10,10,3,50);
console.log(myCreateDate2) // 2025-01-10T10:03:50.000Z

let myCreateDate3 = new Date("2025-02-21");
console.log(myCreateDate3) // 2025-02-21T00:00:00.000

let myCreateDate4 = new Date("02-27-2025");
console.log(myCreateDate4) // 2025-02-27T00:00:00.000Z

let myTimestamp = Date.now()
console.log(myTimestamp) // 1740643379630
console.log(myCreateDate.getTime()); // 1736467200000

console.log(Date.now()) // 1740643857160
console.log(Date.now()/1000)  // 1740643857.16
console.log(Math.floor(Date.now()/1000)); // 1740643932


let ddate = new Date()
console.log(ddate)
console.log(ddate.getDate())
console.log(ddate.getMonth()+1)
console.log(ddate.getFullYear())
console.log(ddate.getDay())


let sampledate = new Date();
console.log(sampledate.toLocaleString('default',{
    weekday: "long",
    month: "long",
    year: "numeric",
    minute: "numeric"
})) 