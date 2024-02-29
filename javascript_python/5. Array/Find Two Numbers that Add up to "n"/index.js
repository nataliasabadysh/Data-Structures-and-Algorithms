// Find Two Numbers that Add up to "n"
function findTwoNumbers(nums, target) {
  // Initializes a new Map object to store each number and its index from the array
  let map = new Map();

  // Starts a loop to go through each element in the array 'nums'
  for (let i = 0; i < nums.length; i++) {
    // Calculates the complement of the current number to reach the target by subtracting the current number from the target
    let complement = target - nums[i];

    // Checks if the complement exists in the map; if so, it means a pair that sums up to the target has been found
    if (map.has(complement)) {
      // Returns an array containing the index of the complement from the map and the current index 'i'
      return [map.get(complement), i];
    }
    // If the complement is not found, the current number and its index are stored in the map for future reference
    map.set(nums[i], i);
  }
  // Returns an empty array if no two numbers sum up to the target value after checking the entire array
  return [];
}

// Example usage:
// Defines an array of numbers
const nums = [2, 7, 11, 15];
// Defines the target sum
const target = 9;
// Calls the 'findTwoNumbers' function with the 'nums' array and 'target' sum, then logs the output
console.log(findTwoNumbers(nums, target)); // Output: [0, 1]
