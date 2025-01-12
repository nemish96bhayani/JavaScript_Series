/*

Question 1: sum of all numbers from 1 to n

sum of 1 to 5: 15

*/

function sumOfNatureNumber(num) {
  //   let sum = 0;
  //   for (let i = 1; i <= num; i++) {
  //     sum += i;
  //   }
  //   return sum;
  return (num * (num + 1)) / 2;
}

// console.log(sumOfNatureNumber(5));
// console.log(sumOfNatureNumber(15));
// console.log(sumOfNatureNumber(10));

/*

Question 2: Sum of digits of number

1287: 1+2+8+7 = 18

*/

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigits(1287));

/*

Question: 3 Count the number of digits of a number

34252: 5

3425
342
34
3
0
*/

function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(countDigits(121));
console.log(countDigits(-1211413131));
