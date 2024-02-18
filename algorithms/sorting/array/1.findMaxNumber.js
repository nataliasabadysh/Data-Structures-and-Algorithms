const array = [1, 5, 8, 29, 49, 3, 565, 2, 1, 5];

function findMaxNumber(nums) {
  let maxValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxValue = Math.max(maxValue, nums[i]);
  }

  return maxValue;
}

console.log(findMaxNumber(array));
