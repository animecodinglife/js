// # Primitive datatype

// 7 Types 1. Boolean, 2.undefined, 3.String, 4.Symbol, 5.Number , 6.Null, 7.BigInt


// JavaScript is a dynamic language and not static, 


// const score =100
// const scoreValue=100.2

// const isLoggedIn=flase
// const outsideTemp=null

// let userEmail;


// const id =Symbol('123')

// const anotherId =Symbol('123')

// console.log(id== anotherId)


// const bigNumber=234324324324234n


// Reference (non primitive)

//array, objects functions




// const anime=["goku","vegeta", "freeza","Broly","Gohan","Piccolo"]

// let myobj = {
//     name: "ajay",
//     age = 21
// }

// const myFunction (function){
//     console.log("hello world");
    
// }



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ********************  **********************

//  Stack (Primitive) and Heap(Non Primitive) memory )

let myyoutubename="ajayak2910@"

let anothername = myyoutubename
anothername="lolyak1098#"

console.log(myyoutubename);
console.log(anothername);


let user ={
    email:"user@google.com",
    upi:"ybl@useer"
}

let usertwo=user

usertwo.email="hitesh@gmail.com"

console.log(user.email);
console.log(usertwo.email);