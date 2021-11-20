// Get process.stdin as the standard input object.
const standard_input = process.stdin;
// This array will hold user input tokens.
const words = [];

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input words in command line. Enter \"exit\" to stop.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\r\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        // Print the contents of the array.
        console.log("===>>> User input result: ")
        words.forEach(tempWord => {
            console.log(tempWord);
        });
        process.exit();
    } else {
        // Add word to the array.
        words.push(data);
        // Print that a word was added to the array.
        console.log('Word added: ' + data);
    }
});