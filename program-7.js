// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

// <-------------- Befor optimized code -------------->

// function removeDuplicate(array) {
//   let result = [];
//   let uniqueObject = {};

//   for (let i = 0; i < array.length; i++) {
//     let uniqueTitle = array[i].title;
//     uniqueObject[uniqueTitle] = array[i];
//   }

//   for (let key in uniqueObject) {
//     result.push(uniqueObject[key]);
//   }

//   return result;
// }

// array = [
//   { title: "C++", author: "Bjarne" },
//   { title: "Java", author: "James" },
//   { title: "Python", author: "Guido" },
//   { title: "Java", author: "James" },
// ];

// const result = removeDuplicate(array);
// console.log("Expected Output:", result);

// <-------------- After optimized code -------------->

function removeDuplicateObjects(array) {
  const uniqueObjects = [];
  const uniqueTitles = new Set();

  for (const obj of array) {
    if (!uniqueTitles.has(obj.title)) {
      uniqueTitles.add(obj.title);
      uniqueObjects.push(obj);
    }
  }

  return uniqueObjects;
}

const array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

const result = removeDuplicateObjects(array);
console.log("Expected Output:", result);
