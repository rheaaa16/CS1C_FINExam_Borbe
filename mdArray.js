// mdArray.js

// Get input using prompt (comma-separated input expected)
let namesInput = prompt("Please Enter names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise):");
let agesInput = prompt("Please Enter corresponding ages separated by commas (e.g., 24,65,21,5,9):");

// Convert input to arrays
let names = namesInput.split(',').map(name => name.trim());
let ages = agesInput.split(',').map(Number);

// Create restructured multi-dimensional array
let restructuredArray = names.map((name, index) => [name.trim(), ages[index]]);

// Log each [name, age] pair
console.log("Restructured Array:");
restructuredArray.forEach(pair => console.log(`[${pair.join(', ')}]`));
