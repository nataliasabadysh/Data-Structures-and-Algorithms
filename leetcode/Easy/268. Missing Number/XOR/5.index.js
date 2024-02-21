// Finding the unique number in an array
// where every other number appears twice:

const nums = [2, 3, 4, 2, 3];

const unique = nums.reduce((acc, curr) => acc ^ curr, 0);
console.log(unique); // 4
