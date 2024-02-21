// Using XOR to check if two numbers are different:

const areDifferent = (x, y) => !!(x ^ y);

console.log(areDifferent(5, 4)); // true
console.log(areDifferent(7, 7)); // false
