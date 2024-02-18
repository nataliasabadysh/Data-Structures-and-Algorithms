const array = [1, 5, 8, 29, 49, 3, 565, 2, 1, 5];

function findMaxNumber(nums) {
  let maxValue = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxValue = Math.max(maxValue, nums[i]);
  }

  let secondMaxValue = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] < maxValue) {
      secondMaxValue = Math.max(secondMaxValue, nums[j]);
    }
  }

  return {
    maxValue,
    secondMaxValue
  };
}

console.log(findMaxNumber(array)); // { maxValue: 565, secondMaxValue: 49 }
