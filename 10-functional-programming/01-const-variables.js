// Using const vars instead of let is better, bc it helps to avoid unnecessary reassignments.
const a = 10;
const str = "Banana";
const obj = {
    firstProp: 111
}
const animals = ["Cat", "Dog"];

// OK actions
obj.firstProp = 2;
obj.newProp = "new propery";
animals.push("Parrot");

console.log("===>>> Changed object contents:");
console.log(obj);
console.log("===>>> Changed array contents:");
console.log(animals);

// Illegal actions
//a++;
//str = "New string";
//obj = {};
//animals = ["Chewbacca"];