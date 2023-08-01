// Write a JavaScript function which taken an array as an argument and returns sorted array in ascending order.

// Sample Input: [ -3, 8, 7, 6, 5, -4, 3, 2, 1];
// Expected Output: [ -4, -3, 1, 2, 3, 5, 6, 7, 8]

// <-------------- Befor optimized code -------------->

// let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = 0; j < array.length - i - 1; j++) {
//     if (array[j] > array[j + 1]) {
//       var temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

// console.log("Expected Output: ", array);

// <-------------- After optimized code -------------->

// first ways
// function bubbleSort(array) {
//   let swapped;

//   for (let i = 0; i < array.length - 1; i++) {
//     swapped = false;

//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap array[j] and array[j+1]
//         swapped = true;
//       }
//     }

//     if (!swapped) break; // If no swapped in the inner loop, that means array is already sorted
//   }

//   return array;
// }

// let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// const sortedArray = bubbleSort(array);

// console.log("Expected Output:", sortedArray);

// Second Ways
let array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const sortedArray = array.sort((a, b) => a - b);

console.log("Expected Output:", sortedArray);
