// Flipping all bits of a binary number:

const num = 5; // Binary: 101
const flipped = ~num & ((1 << 3) - 1); // Assuming we're working with 3 bits
console.log(flipped); // 2 (Binary: 010)
