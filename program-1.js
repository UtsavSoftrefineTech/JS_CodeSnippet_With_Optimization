// Write a JavaScript program to clone an array.

// <-------------- Befor optimized code -------------->

// let arr = [1, 2, 3];
// let arrClone = [];

// for (let i = 0; i < arr.length; i++) {
//   arrClone[i] = arr[i];
// }

// console.log(arrClone);

// <-------------- After optimized code -------------->
let arr = [1, 2, 3];
let arrClone = arr.slice();

console.log(arrClone);
