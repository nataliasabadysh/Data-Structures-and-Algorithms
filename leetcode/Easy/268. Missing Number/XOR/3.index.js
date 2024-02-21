// Determining if a number is odd or even using XOR:

const isOdd = (num) => !!(num & 1);

console.log(isOdd(5)); // true
console.log(isOdd(4)); // false
