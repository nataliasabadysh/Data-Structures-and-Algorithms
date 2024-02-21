// 268. Missing Number

// Given an array nums containing n distinct
// numbers in the range [0, n],
// return the only number in the range that is missing from the array.

// o(1)
// o(n)

function missingNumber(nums) {
  // length of the input
  const n = nums.length; // 9

  // Sum we would expect if no number were missing from the array.
  // USE: arithmetic series formula or Gauss's formula
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
}

// Input: nums = [3,0,1], Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
