const { Table } = require("@mui/material");

const accountId = 1415;
let accountEmail = "nemish@gmail.com";
var accountPassword = "123456";
accountCity = "Surat";
let accountState;

// accountId = 2;

accountEmail = "np@gmail.com";
accountPassword = "321654";
accountCity = "ahmedabad";

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
