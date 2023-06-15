In JavaScript, the code:

```javascript 
const [num1, num2] = process.argv.slice(2).map(Number);
``` 
is using destructuring assignment and the map() method to convert command line arguments (which are strings) to numbers.

Let's break it down step by step:

1. process.argv is an array that contains the command line arguments provided when running a Node.js script. It includes the node command and the file name, followed by any additional arguments.

2. .slice(2) is used to create a new array that starts from index 2 of process.argv. This removes the first two elements, which are typically the node command and the file name, leaving only the arguments that we're interested in.

3. .map(Number) is called on the sliced array. The map() method is used to create a new array by applying a provided function to each element of the original array. In this case, the function Number is passed as an argument to map(). This function is used to convert each element from a string to a number.

4. Finally, the destructuring assignment const [num1, num2] = is used to assign the values of the first two elements of the mapped array to the variables num1 and num2.

By using this code, you can easily convert the command line arguments to numbers and assign them to the variables num1 and num2 for further processing in your program.