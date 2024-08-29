// dates
let myDate = new Date()
// console.log(myDate.toString());


// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toISOString());

// console.log(typeof myDate);

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());

// console.log(myDate.toUTCString());

// console.log(myDate.toJSON());

// let mycreate = new Date(2024, 0, 23)
// let mycreate = new Date(2024, 0, 23,5,7,5)
// let mycreate = new Date("2024-03-15")
// let mycreate = new Date("01-15-2024")

// let mycreate = new Date("01-15-2024")


// console.log(mycreate.toLocaleString());

let myTimestamp = Date.now()

// console.log(myTimestamp);
// console.log(mycreate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
/*
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth());
console.log(newdate.getTime());
console.log(newdate.getMinutes());
*/

newdate.toLocaleString('default',{
    weekday:"long",// ctrl+ space
    // timeZone : ""
})

// **************ARRAY2 **************************************

const myArr1 = [0,1,2,3,4,5];

const myheros=["Moro","MasterRoshi"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr2);
// console.log(myArr1[1]);

// Array methods

// myArr1.push(6)
// myArr1.push(7)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift(9)

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(3));

const arr = myArr1.join()

// console.log(myArr1);
// console.log(arr);

//slice and splice

console.log("A ",myArr1);

const mn1 = myArr1.slice(1,3)

console.log(mn1);
console.log("B ",myArr1);

const mn2 = myArr1.splice(1,3)
console.log("C ",myArr1);

console.log(mn2);
