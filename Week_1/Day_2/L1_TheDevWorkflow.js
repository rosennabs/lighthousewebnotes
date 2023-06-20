/**
  PROBLEM:

  Write a Node program that takes in an unlimited number of commandline arguments,
  goes through each and prints out the sum of them.

  If any argument is NOT a whole number, skip it.
  Do not support negative numbers.
  If any argument is not a number, output an error message.
  We need at least two arguments.
*/

// 1) how to take in an unlimited number of command line arguments?

// 2) how can we go through each one of command line arguments?

// 3) how can we print the sum of them?...

const commandLineArgs = process.argv.slice(2);

// Sum numbers passed in the command line
const sumNumbers = (nums) => {
  let sum = 0;
  let countNumbers = 0;
  // Receives at least two arguments
  if (commandLineArgs.length >= 2) {
    for (let i = 0; i < commandLineArgs.length; i++) {
      let number = Number(commandLineArgs[i]);
      
      // Eliminates non-numericals and negatives
      if (!isNaN(number) && number > 0) {
        countNumbers ++;
        sum += number;
      }
    }
    //Count numbers contained in the argument
    if (countNumbers === 0) {
      console.log("Error! No numbers found.")
    }
  } else {
    console.log("Error! Input at least 2 arguments.");
  }
   console.log(sum);
}

sumNumbers(commandLineArgs);

