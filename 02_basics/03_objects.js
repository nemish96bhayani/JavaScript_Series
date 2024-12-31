// singleton

//object literals

Object.create;

const mySym = Symbol("key1");
const JsUser = {
  name: "Nemish",
  "full name": "Nemish Bhayani",
  [mySym]: "mykey1",
  age: 18,
  location: "Surat",
  email: "nemish@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Staurday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// myArray = ["h", "i"];
JsUser.email = "hitesh@chatgpt.com";

// Object.freeze(JsUser);
JsUser.email = "nemish@chatgpt.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user,${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
