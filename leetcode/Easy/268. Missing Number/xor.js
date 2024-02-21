function missingNumber(nums) {
  let allXor = 0; // Initialize XOR accumulator

  // XOR all numbers from 0 to n (inclusive)
  for (let i = 0; i <= nums.length; i++) {
    allXor ^= i;
  }

  // XOR all numbers in the input array
  for (let num of nums) {
    allXor ^= num;
  }

  // The remaining value is the missing number
  return allXor;
}

const nums = [3, 0, 1]; // Missing number is 2

console.log(missingNumber(nums)); // Output: 2
