// Function declarations 1 through 4 work the same

// 1. Function declaration.
function sayHello(firstName, lastName) {
    const msg = `Hello, ${firstName} ${lastName}`;
    return msg;
}

// 2. Function expression.
const sayHelloVar = function(firstName, lastName) {
    const msg = `Hello, ${firstName} ${lastName}`;
    return msg;
}

// 3. Fat arrow syntax for function expression.
const sayHelloFatArrowVar = (firstName, lastName) => {
    const msg = `Hello, ${firstName} ${lastName}`;
    return msg;
}

// 4. Minimal fat arrow syntax for function expression.
const sayHelloMinimalFatArrowVar = (firstName, lastName) => `Hello, ${firstName} ${lastName}`;

const firstName = prompt("Enter your first name");
const lastName = prompt("Enter yout last name");

console.log(sayHelloMinimalFatArrowVar(firstName, lastName));