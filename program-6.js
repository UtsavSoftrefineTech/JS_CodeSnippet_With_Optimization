// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]

// <-------------- Befor optimized code -------------->

// function margeArray(a1, a2) {
//   let result = [];
//   for (let i = 0; i < a1.length; i++) {
//     result[i] = a1[i];
//   }
//   let i = result.length;
//   for (let j = 0; j < a2.length; j++) {
//     result[i + j] = a2[j];
//   }
//   return result;
// }

// function removeDuplicate(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!result.includes(array[i])) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [3, 4, 5, 7];

// const mergedArray = margeArray(arr1, arr2);
// const resultArray = removeDuplicate(mergedArray);
// console.log("Expected output: ", resultArray);

// <-------------- After optimized code -------------->

function mergeAndRemoveDuplicates(arr1, arr2) {
  const mergedArray = [...new Set([...arr1, ...arr2])];
  return mergedArray;
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 7];

const resultArray = mergeAndRemoveDuplicates(arr1, arr2);
console.log(`Expected output: ${resultArray}`);
