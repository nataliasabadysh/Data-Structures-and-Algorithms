// Swapping two numbers without a temporary variable:
let a = 5; // Binary: 101
let b = 7; // Binary: 111

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a); // 7
console.log(b); // 5
