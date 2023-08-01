// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

// <-------------- Befor optimized code -------------->

// function unionArray(a1, a2) {
//   let result = [];
//   for (let i = 0; i < a1.length; i++) {
//     result[i] = a1[i];
//   }

//   let i = result.length;
//   for (let j = 0; j < a2.length; j++) {
//     result[i + j] = a2[j];
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

//   let resultArray = [];
//   for (let i = 0; i < result.length; i++) {
//     if (!resultArray.includes(result[i])) {
//       resultArray.push(result[i]);
//     }
//   }
//   return resultArray;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [100, 2, 1, 10];

// const result = unionArray(arr1, arr2);
// console.log("Expected Output: ", result);

// <-------------- After optimized code -------------->

function unionArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

const arr1 = [1, 2, 3];
const arr2 = [100, 2, 1, 10];

const result = unionArray(arr1, arr2);
console.log(`Expected Output: ${result}`);
sk;
