// Show squares of whole numbers 1 through 10.
const square = x => Math.pow(x, 2);

const listSquaresOneToTen = function() {
    for(let i = 0; i < 11; i++) {
        console.log(square(i));
    }
}

// Call the function via variable.
listSquaresOneToTen();