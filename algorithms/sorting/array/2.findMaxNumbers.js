const array = [1, 5, 8, 29, 49, 3, 565, 2, 1, 5];

function findMaxNumber(nums) {
  let maxValue = 0;

  for (let i = 1; i < nums.length; i++) {
    maxValue = Math.max(maxValue, nums[i]);
  }

  let secondMaxValue = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] < maxValue) {
      secondMaxValue = Math.max(secondMaxValue, nums[j]);
    }
  }

  let thirdMaxValue = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] < secondMaxValue) {
      thirdMaxValue = Math.max(thirdMaxValue, nums[j]);
    }
  }

  return {
    1: maxValue,
    2: secondMaxValue,
    3: thirdMaxValue
  };
}

console.log(findMaxNumber(array)); // { '1': 565, '2': 49, '3': 29 }
