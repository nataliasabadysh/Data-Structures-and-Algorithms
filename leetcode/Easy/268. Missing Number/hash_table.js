function missingNumber(nums) {
  const numSet = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
}

// VS object
function missingNumber(nums) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    numObj[nums[i]] = true;
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!numObj[i]) {
      return i;
    }
  }
}

const nums = [3, 0, 1]; // Missing number is 2

console.log(missingNumber(nums)); // Output: 2
