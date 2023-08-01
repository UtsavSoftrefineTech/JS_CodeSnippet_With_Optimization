// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

// <-------------- Befor optimized code -------------->

// function mostFrequent(array) {
//   let mostfrequent = 1;
//   let count = 0;
//   let item;

//   for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         count++;
//       }
//       if (mostfrequent < count) {
//         mostfrequent = count;
//         item = array[i];
//       }
//     }
//     count = 0;
//   }
//   console.log(`${item}, "${mostfrequent} times"`);
// }

// const inputArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// mostFrequent(inputArray);

// <-------------- After optimized code -------------->

function mostFrequent(array) {
  const frequencyMap = new Map();

  for (const item of array) {
    console.log(frequencyMap.get(item));
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    console.log(frequencyMap);
  }

  let maxFrequency = 0;
  let mostFrequentItem;

  frequencyMap.forEach((frequency, item) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      mostFrequentItem = item;
    }
  });

  console.log(`${mostFrequentItem}, "${maxFrequency} times"`);
}

const inputArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
mostFrequent(inputArray);
