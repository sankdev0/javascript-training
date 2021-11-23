// This is a demo of string processing in JavaScript.
// You can run this program using Node.JS command: node <file-name.js>

const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Count all vowels in an input word.
const countVowels = function(str) {
    // Introduce a case-insencitive pattern.
    const pattern = /[aeiou]/gi;
    const vowelCount = str.match(pattern).length;
    return vowelCount;
}

// Spell the input word backwards.
const spellBackwards = function(str) {
    const inputWordLetters = Array.from(str);
    const backwardsWordLetters = [];
    
    inputWordLetters.forEach(letter => {
        backwardsWordLetters.unshift(letter);
    });

    return backwardsWordLetters.join("");
}

// Test if the input word as a palindrome.
const isPalindrome = function(str) {
    return str.toLowerCase() === spellBackwards(str).toLowerCase();
}

readlineInterface.question("Enter a word: ", (word) => {
    console.log("---");
    console.log(`The word entered is: ${word}`);
    console.log("---");
    console.log(`It contains ${countVowels(word)} vowels`);
    console.log("---");
    console.log(`It can be spelled backwards as ${spellBackwards(word)}`);
    console.log("---");
    console.log(isPalindrome(word) ? "It is a palindrome!" : "It is Not a palindrome.");
    readlineInterface.close();
})