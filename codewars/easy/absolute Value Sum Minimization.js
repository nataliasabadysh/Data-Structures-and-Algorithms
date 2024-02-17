function absoluteValueSumMinimization(a) {
  const isEven = a.length % 2 === 0; //  length is isEven and true
  const lowerMedian = a[a.length / 2 - 1]; // used when the array length is even

  const median = a[Math.floor(a.length / 2)]; // (a.length / 2) -  which is the median, used when the length is odd
  return isEven ? lowerMedian : median;
}

console.log(absoluteValueSumMinimization([2, 4, 7])); // 4
console.log(absoluteValueSumMinimization([2, 4, 7, 6])); // 4

console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6])); // 7
console.log(absoluteValueSumMinimization([2, 4, 7, 6, 6, 8])); // 7
