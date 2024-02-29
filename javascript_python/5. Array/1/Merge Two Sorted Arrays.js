function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
console.log("merged ad sorted", mergeSortedArrays([2, 13, 4, 6], [2, 5, 6]));

function mergeSortedUniqArrays(arr1, arr2) {
  // merge
  const merged = arr1.concat(arr2);

  // remove duplicates
  const set = new Set(merged); // Set(5) { 2, 13, 4, 6, 5 }

  // from Set Obj to Array
  return [...set];
}

console.log("with set method", mergeSortedUniqArrays([2, 13, 4, 6], [2, 5, 6]));

function mergeSortedUniqListArrays(arr1, arr2) {
  const merged = arr1.concat(arr2);
  const unique = [];

  for (let i = 0; i < merged.length; i++) {
    if (!unique.includes(merged[i])) {
      unique.push(merged[i]);
    }
  }
  return unique;
}

console.log(
  "without set method",
  mergeSortedUniqListArrays([2, 13, 4, 6], [2, 5, 6])
); // Output: [2, 13, 4, 6, 5]
