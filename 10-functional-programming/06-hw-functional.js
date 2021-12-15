const arrays = [[1, 4], [11], [3, 5, 7]];

const sumFn = array => array.reduce((sum, x) => sum + x, 0);

let arraysSum = arrays.reduce((sum, x) => sum + sumFn(x) , 0)

console.log(arraysSum); // Should show 31