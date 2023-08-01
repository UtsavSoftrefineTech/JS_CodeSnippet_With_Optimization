// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];

// <-------------- Befor optimized code -------------->

// function flattenArray(array) {
//   let result = [];
//   flatten(array);

//   function flatten(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i])) {
//         flatten(array[i]);
//       } else {
//         result.push(array[i]);
//       }
//     }
//   }

//   return result;
// }

// const sampleInput = [1, 2, [3, 4], [5, [6, 7]]];
// const result = flattenArray(sampleInput);
// console.log("Expected Output: ", result);

// <-------------- After optimized code -------------->

function flattenArray(array) {
  return array.flat(Infinity); // Infinity in this case, meaning all levels are flattened.
}

const sampleInput = [1, 2, [3, 4], [5, [6, 7]]];
const result = flattenArray(sampleInput);
console.log("Expected Output:", result);
