//array

const myArr = [0, 1, 2, 3, 4, 5]; //........ ||  Array
const myHeroes = ["Shaktiman", "Naagraj"]; //......||          declarations
const myArr2 = new Array(1, 2, 3, 4); //.......... ||                       Different
// console.log(myArr2[1]); //.........................||                                 types

//Array
// myArr.push(6);
// myArr.push(7);
// myArr.pop(7);

// myArr.unshift(9); //  [9, 0, 1, 2, 3, 4, 5]
// myArr.shift(); // [ 0, 1, 2, 3, 4, 5 ]
// myArr.shift(); //[ 1, 2, 3, 4, 5 ]
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(typeof(newArr));
// console.log(typeof newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
