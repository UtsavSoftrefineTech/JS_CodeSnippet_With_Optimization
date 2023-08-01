// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

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

// function sortArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// const arr1 = [3, 5, 1];
// const arr2 = [4, 2];

// const mergedArray = margeArray(arr1, arr2);
// const mergedAndSortArray = sortArray(mergedArray);
// console.log("Expected output: ", mergedAndSortArray);

// <-------------- After optimized code -------------->

// ********** First Way *********** //
// function mergeAndSortArrays(arr1, arr2) {
//   let mergedArray = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   // If there are any remaining elements in arr1 or arr2, add them to the mergedArray
//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   // Sorting the mergedArray in ascending order
//   mergedArray.sort((a, b) => a - b);

//   return mergedArray;
// }

// const arr1 = [3, 5, 1];
// const arr2 = [4, 2];

// const mergedAndSortedArray = mergeAndSortArrays(arr1, arr2);
// console.log(`Expected output: ${mergedAndSortedArray}`);

// ********** Second Way *********** //
function mergeAndSortArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  return mergedArray.sort((a, b) => a - b);
}

const arr1 = [3, 5, 1];
const arr2 = [4, 2];

const mergedAndSortedArray = mergeAndSortArrays(arr1, arr2);
console.log(`Expected output: ${mergedAndSortedArray}`);
