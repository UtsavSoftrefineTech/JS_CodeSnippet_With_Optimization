// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

// <-------------- Befor optimized code -------------->

// function findDifference(arr1, arr2) {
//   const result = [];

//   function isInArr1(element) {
//     return arr1.includes(element);
//   }

//   function isInArr2(element) {
//     return arr2.includes(element);
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (!isInArr2(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!isInArr1(arr2[i]) && !result.includes(arr2[i])) {
//       result.push(arr2[i]);
//     }
//   }

//   for (let i = 0; i < result.length; i++) {
//     for (let j = 0; j < result.length - i - 1; j++) {
//       if (result[j] > result[j + 1]) {
//         var temp = result[j];
//         result[j] = result[j + 1];
//         result[j + 1] = temp;
//       }
//     }
//   }

//   return result;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];
// const difference = findDifference(arr1, arr2);
// console.log("Expected Output: ", difference);

// <-------------- After optimized code -------------->

function findDifference(arr1, arr2) {
  const difference = arr1
    .filter((element) => !arr2.includes(element))
    .concat(arr2.filter((element) => !arr1.includes(element)))
    .sort((a, b) => a - b);

  return difference;
}

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];
const difference = findDifference(arr1, arr2);
console.log(`Expected Output: ${difference}`);
