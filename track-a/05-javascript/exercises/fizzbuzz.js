// track-a/05-javascript/exercises/fizzbuzz.js

// The Goal: Print 1 to n.
// Divisible by 3? "Fizz"
// Divisible by 5? "Buzz"
// Both? "FizzBuzz"

const solveFizzBuzz = (limit) => {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// Run it
solveFizzBuzz(15);
