// Dates

let myDate = new Date();

// console.log(myDate.toString()); //Fri Dec 27 2024 15:34:14 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2024-12-27T10:04:14.458Z
// console.log(myDate.toDateString()); //Fri Dec 27 2024
// console.log(myDate.toLocaleString()); //27/12/2024, 3:34:14 pm
// console.log(myDate.toJSON()); //2024-12-27T10:04:14.458Z
// console.log(myDate.toLocaleTimeString()); //3:37:10 pm
// console.log(myDate.toLocaleDateString()); //27/12/2024
// console.log(typeof myDate); // Object

// most IMP Line Month was a start from 0 in Javascript when we inster only one number if we instert DD/MM/YYYY formate then start from 01.
// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2023"); //14/1/2023, 12:00:00 am
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()); //only today date
console.log(newDate.getMonth() + 1); //only today Month but start from 0 solve thi error
