// Functions

// Function declaration.
function calcCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function expression.
const circleArea = radius => Math.PI * Math.pow(radius, 2);

const radiusStr = prompt("Enter the radius of a circle you want to calculate circumference and area");
const radius = Number(radiusStr);

console.log(`Circumference of a circle with radius ${radius} is ${calcCircleCircumference(radius)}`);
console.log(`Area of a circle with radius ${radius} is ${circleArea(radius)}`);

