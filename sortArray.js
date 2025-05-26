// sortArray.js

// Get input using prompt (comma-separated input expected)
let numbers = prompt("Please Enter numbers separated by comma:");
let names = prompt("Please Enter names separated by comma:");

// Convert input strings to arrays
numbers = numbers.split(',').map(Number);
names = names.split(',');

// Merge arrays and log
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order and log
numbers.sort((a,b)=>a-b);
let sortedNumbers = numbers.toReversed();
console.log("Numbers sorted in reverse:", sortedNumbers);

// Sort names alphabetically and log
names.sort();
console.log("Names sorted alphabetically:", names);
