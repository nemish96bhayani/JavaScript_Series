// //Primitive

// // 7 types: String, Number, BigInt, Boolean, Null, Undefined, Symbol

// // const score = 100;
// // const scoreValue = 100.3;

// // const isLoggedIn = false;
// // const outsideTemp = null;

// let userEmail;
// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 1234567898523698523698741269874123698n;

// // Reference(Non-Primitive)

// // Array, Object, Functions

// const heros = ["shaktiman", "Nagraj", "donga"];
// let myObject = {
//   name: Nemish,
//   age: 22,
// };

// const myFunction = function () {
//   console.log("Hello World");
// };

// console.log(typeof outside);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (Primitive), Heap(Non - Primitive)

// When data going in stack then we got them copy but when Data going in heap then we get a Reference of them.

let myYoutubename = "nemishbhayanidotcom";

let anothername = myYoutubename;

anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "nemish@google.com";

console.log(userOne.email);
console.log(userTwo.email);
