const name = "Nemish";
const repoCount = 50;
// console.log(name);

// console.log(name + repoCount + " Value");

// morden time string interpolation

console.log(`Hello My Name is ${name} and My repo count is ${repoCount}`);

// string declarations

const gameName = new String("hitesh-hc-com"); //string print in key value pair starting key is 0.

// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("m"));

// const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
console.log(...name);
