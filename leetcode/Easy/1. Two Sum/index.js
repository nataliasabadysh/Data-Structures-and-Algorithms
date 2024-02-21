const twoSum = (array, targetSum) => {
  // 1. array - for
  // 2. arryy[i] - target = x
  // 3. find x in the array
  // 4. array[j] - for
  // 5. if x === j
  // 6. return [x, j]

  if (!array.length) return [];

  // O(n^2)
  for (let i = 0; i < array.length; i++) {
    //  array.length -O(1)

    let findNumber = targetSum - array[i]; // O(1)

    for (let j = i + 1; j < array.length; j++) {
      if (findNumber === array[j]) {
        // O(1)
        return [i, j];
      }
    }
  }
};

// from O(n^2) to -> O(n)
const twoSumHash = (array, targetSum) => {
  const hash_map = {};
  // O(n)
  for (let i = 0; i < array.length; i++) {
    hash_map[array[i]] = i;
  }
  // O(n)
  for (let i = 0; i < array.length; i++) {
    const currvalue = array[i];
    const sum = targetSum - currvalue;

    const map_index = hash_map[sum];

    if (map_index && map_index != i) {
      return [i, map_index];
    }
  }
};
