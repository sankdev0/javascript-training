// You can use Node.js to run this script with command^
// node <file-name.js>
// Alternatively you can reference the script in an html file and run in a web browser.

// Create an array.
const musketeers = ["Athos", "Porthos", "Aramis"];

// Iterate with For loop.
console.log("===>>> 1. Iterate with For loop. :");
for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i]);
}

// Add element to the end of the array.
musketeers.push("D'Artagnan");

// Iterane with forEach loop.
console.log("===>>> 2. Iterate with forEach loop: ");
musketeers.forEach(tempMusketeer => {
    console.log(tempMusketeer);
});

// Delete element from the array.
musketeers.splice(2, 1);

// Iterate with for-of loop.
console.log("===>>> 3. Iterate with for-of loop: ");
for (const tempMusketeer of musketeers) {
    console.log(tempMusketeer);
}

// Delete element from the end of the array.
musketeers.pop();

console.log("===>>> 4. Deleted the last element: ");
for (const tempMusketeer of musketeers) {
    console.log(tempMusketeer);
}

// Add element to the beginning of the array.
musketeers.unshift("Atroq");

console.log("===>>> 5. Added element to the beginning: ");
for (const tempMusketeer of musketeers) {
    console.log(tempMusketeer);
}