// let n = 5;
// let pattern = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   pattern += "\n";
// }

// console.log(pattern);

// output:
// *
// * *
// * * *
// * * * *
// * * * * *

//.................................................................................................

// let n = 5; // Number of rows
// let pattern = "";

// // Outer loop for the number of rows
// for (let i = 1; i <= n; i++) {
//   // Inner loop for spaces
//   for (let j = 1; j <= n - i; j++) {
//     pattern += "  ";
//   }
//   // Inner loop for stars
//   for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//   }
//   // New line after each row
//   pattern += "\n";
// }

// // Print the complete pattern
// console.log(pattern);

// output:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

//.................................................................................................

// let n = 5; // Number of rows
// let pattern = "";

// // Outer loop for the number of rows
// for (let i = 1; i <= n; i++) {
//   // Inner loop for spaces
//   for (let j = 1; j <= n - i + 1; j++) {
//     pattern += "*  ";
//   }
//   // Inner loop for stars
//   for (let j = 2; j <= 2 * i - 1; j++) {
//     pattern += "   ";
//   }
//   for (let j = 1; j <= n - i + 1; j++) {
//     pattern += "  *";
//   }
//   // New line after each row
//   pattern += "\n";
// }

// for (let i = 1; i <= n; i++) {
//   // Inner loop for spaces
//   for (let j = 1; j <= i + 1; j++) {
//     pattern += "*  ";
//   }
//   // Inner loop for stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += "   ";
//   }
//   for (let j = 1; j <= i; j++) {
//     pattern += "  *";
//   }
//   // New line after each row
//   pattern += "\n";
// }

// // Print the complete pattern
// console.log(pattern);

// output:
//     *
//    ***
//   *****
//  *******
// *********

//....................................................................................................

// let n = 5; // Number of rows
// let pattern = "";

// // Outer loop for the number of rows
// for (let i = 1; i <= n; i++) {
//   // Add leading spaces for center alignment
//   for (let j = 1; j <= n - i; j++) {
//     pattern += "*";
//   }
//   let toggle = 1; // Start with 1
//   // Inner loop for printing the pyramid
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += " ";
//     // pattern += toggle; // Add the current value (1 or 0)
//     // toggle = 1 - toggle; // Toggle between 1 and 0
//   }
//   for (let j = 1; j <= n - i + 1; j++) {
//     pattern += "*";
//   }
//   // New line after each row
//   pattern += "\n";
// }
// for (let i = n - 1; i >= 1; i--) {
//   // Add leading spaces for center alignment
//   for (let j = 1; j <= n - i - 1; j++) {
//     pattern += "*";
//   }
//   let toggle = 1; // Start with 1
//   // Inner loop for printing the pyramid
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     pattern += " ";
//     // pattern += toggle; // Add the current value (1 or 0)
//     // toggle = 1 - toggle; // Toggle between 1 and 0
//   }
//   // New line after each row
//   pattern += "\n";
// }

// // Print the complete pattern
// console.log(pattern);

//....................................................................................

let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern);  


// output:  
// ****
// ***
// **
// *
//
//........................................................................................


