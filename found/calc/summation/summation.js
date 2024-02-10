var summation = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

// var summation = function (num) {
//   return (num * (num + 1)) / 2;
// };

console.log(summation(2)); // Outputs: 3
console.log(summation(8)); // Outputs: 36
