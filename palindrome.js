// Use prompt so that the user enter the first and second words.
let word1 = prompt("Enter the first word,(RACECAR):");
let word2 = prompt("Enter the second word,(RECORDER):");

// Function to reverse a string
function reverse_word(str) {
    return str.split().reverse().join();
}

// Reverse the words
let reversedword1 = reverseString(word1);
let reversedword2 = reverseString(word2);

// Log original and reversed strings
console.log(`Original input word 1: ${word1}`)
console.log(`Reversed input word 1: ${reversedWord1}`);
console.log(`Original input word 2: ${word2}`)
console.log(`Reversed input word 2: ${reversedWord2}`);

// Check if each word is a palindrome
console.log(`Is ${original_input_word1} reads the same backward as forward to the original word:, ${original_input_word1 === reversed_word_input1}`);
console.log(`Is ${original_input_word2} reads the same backward as forward to the original word:, ${original_input_word2 === reversed_word_input2}`);
