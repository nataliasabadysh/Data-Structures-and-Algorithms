const array = [1, 5, 8, 29, 49, 3, 565, 2, 1, 5];

function findMaxUnderBoundary(nums, topBoundary) {
  let current = -Infinity;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < topBoundary) {
      current = Math.max(current, nums[index]);
    }
  }
  return current;
}

console.log("1", findMaxUnderBoundary(array, 40)); // 29

function findTopElements(array, numOfElements) {
  let topElements = [];
  let previewMax = Infinity;

  for (let index = 0; index < numOfElements; index++) {
    let currentMax = findMaxUnderBoundary(array, previewMax);

    if (currentMax === -Infinity) {
      break; // No more elements to add
    }
    topElements.push(currentMax);
    previewMax = currentMax;
  }
  return topElements;
}

console.log("2", findTopElements(array, 4)); // [ 565, 49, 29, 8 ]
