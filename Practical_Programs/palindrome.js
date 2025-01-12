// palindrome for a number

// function palindrome(number) {
//     if (number < 0) {
//         return false;
//     }
//     let originalNumber = number;
//     let reversedNumber = 0;
    
//     for (let temp = originalNumber; temp > 0 ; temp = Math.floor(temp / 10)) {
//         let lastDigit = temp % 10;
//         reversedNumber = reversedNumber * 10 + lastDigit;
        
//     }
//     return number === reversedNumber;
// }

// console.log(palindrome(121));


// palindrome for a string

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

console.log(isPalindrome("madam")); 

//palindrome for a string using array

function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}   
log(isPalindrome("madam"));