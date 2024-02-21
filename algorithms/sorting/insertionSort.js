function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    // Move elements of array[0..i-1], that are greater than key,
    // to one position ahead of their current position
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

// Example usage
const arr = [5, 2, 4, 6, 1, 3];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr));
