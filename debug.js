/*
  Debugging practice:
  - Program A: syntax error
  - Program B: runtime error
  - Program C: logic error
*/

// Program A
// This program is intended to display a simple prompt in the console.
console.log("Welcome to the bootcamp");

// Program B
// This code multiplies each number in an array by 2 and displays the results.
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// Program C
// This function checks whether a number is prime.
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Not prime if divisible by any number between 2 and num - 1
    }
  }
  return true; // Prime if no divisors were found
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
