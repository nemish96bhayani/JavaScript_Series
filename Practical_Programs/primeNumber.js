const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask user for input
rl.question("Enter a number to check if it's prime: ", (input) => {
  const num = parseInt(input, 10);

  // Function to check if the number is prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Output the result
  console.log(isPrime(num) ? `${num} is a prime number.` : `${num} is not a prime number.`);
  
  rl.close(); // Close the input stream
});
