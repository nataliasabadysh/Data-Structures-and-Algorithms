const array = [333, 444, 245, 543, 333, 444];

function findUniqNumber(nums) {
  let uniqNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    let alreadyExist = false;

    for (let index = 0; index < uniqNumbers.length; index++) {
      if (uniqNumbers[index] === nums[i]) {
        alreadyExist = true;
        break; // No need to continue the loop once a match is found
      }
    }

    if (!alreadyExist) {
      uniqNumbers.push(nums[i]);
    }
  }

  return uniqNumbers;
}

console.log(findUniqNumber(array));
