const numbers = [1, 3, 7, 9, 0, 2];
const target = 11;

function findTwoSum(array, target) {
  for (let p_one = 0; p_one < array.length; p_one++) {
    const numberToFind = target - array[p_one]; // 11 - 1 =10

    for (let p_two = p_one + 1; p_two < array.length; p_two++) {
      if (numberToFind === array[p_two]) {
        return [p_one, p_two];
      }
    }
  }
  return null;
}

console.log(findTwoSum(numbers, target));

//  Time: O(n) and Space: O(n)
// ✅ Added Hash Map
// ⚠️ Objevt taker Momory
// 🚀 Run time - better

// const twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const numberToFind = target - nums[i];

//     if (map.has(numberToFind)) {
//       return [map.get(numberToFind), i];
//     }

//     map.set(nums[i], i);
//   }
// };
