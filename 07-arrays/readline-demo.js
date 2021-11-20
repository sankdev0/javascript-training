// Import the Node.js readline module.
const readline = require("readline");

// Create an instance of readline interface.
const read_line_interface = readline.createInterface({
    // Assign process.stdin as input.
    input: process.stdin,
    // Assign process.stdout as output. 
    output: process.stdout
});

// Prompt one line question and read user input to variable status.
read_line_interface.question("How are you ? ", function(status) {

    // Prompt another line question and read user input to variable age.
    read_line_interface.question("How old are you ? ", function(age) {
        
        // Print user input data in the console.
        console.log(`I am ${status}, i am ${age} old`);

        // Close readline interface.
        read_line_interface.close();
    });
});

// When the readline prompt is closed, it will trigger this function.
read_line_interface.on("close", function() {
    // Print have a nice day on the console.
    console.log("\nHave a nice day !!!");
    // Exit the process.
    process.exit(0);
});