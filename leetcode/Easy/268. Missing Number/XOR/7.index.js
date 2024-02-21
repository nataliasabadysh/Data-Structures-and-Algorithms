// Checking if two numbers have opposite signs using XOR:

const haveOppositeSigns = (x, y) => (x ^ y) < 0;

console.log(haveOppositeSigns(5, -3)); // true
console.log(haveOppositeSigns(-4, -7)); // false
