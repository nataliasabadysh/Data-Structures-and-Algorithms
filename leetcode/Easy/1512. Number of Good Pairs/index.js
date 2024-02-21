/**
 * @param {number[]} nums
 * @return {number}
 */
//  Given an array of integers nums, return the number of good pairs.
//  A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function (nums) {
  //   [1,2,3,1,1,3]

  // [0, 3]
  // [0, 4]
  // [2, 5]
  // [3, 4]

  // [0, 1]
  // [0, 2]
  // [0, 3]

  // [1, 2]
  // [1, 3]
  // [2, 3]

  // step :
  // first_el = nums[0]
  // for first_el === index

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        sum++;
      }
    }
  }
  return sum;
};

// 2:
var numIdenticalPairs = function (nums) {
  const map = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let counter = map[currentNumber];

    if (!counter) {
      map[currentNumber] = 1;
    } else {
      map[currentNumber] += 1;
      sum += counter;
    }
  }
  return sum;
};
