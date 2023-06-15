In the code snippet:

```javascript

const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map(x => x * 2);
```
The map() method is being used on the array1 array to create a new array called map1. The map() method applies a provided function to each element of the array and returns a new array with the results.

In this case, the function (x => x * 2) is passed as an argument to map(). ```It is an arrow function``` that takes a single parameter x and multiplies it by 2. ```The arrow => separates the function parameter from the function body.```

So, when the map() method is applied to array1, it iterates over each element of the array and applies the ```function (x => x * 2)``` to each element. It then collects the resulting values and returns a new array.

The resulting map1 array will contain the elements of array1 multiplied by 2:

```javascript
console.log(map1); // Output: [2, 8, 18, 32]
```
In this case, array1 contains the values ```[1, 4, 9, 16]```, and map1 will contain the values ```[2, 8, 18, 32]``` after applying the function (x => x * 2). Each element of array1 is multiplied by 2 to produce the corresponding element in map1.