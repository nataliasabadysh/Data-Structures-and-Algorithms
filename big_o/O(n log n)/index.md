# O(n log n) - Merge Sort algorithm
## for big array of data 


## Case: Merge, Quick, Heap - Sort:

Divide: The array is divided into two halves until it cannot be divided anymore (i.e., it has only one element).
Conquer: Each half is recursively sorted.
Combine: The sorted halves are merged into a single sorted array.


```js
function mergeSort(array) {
    // Base case: arrays with fewer than 2 elements are already "sorted"

    if (array.length < 2) {
        return array;
    }

    // Step 1: Divide the array in half
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Step 2 & 3: Recursively sort the two halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Function to merge two sorted arrays
function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        // Pick the smaller among the smallest elements of left and right sub arrays
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return sortedArray.concat(left.slice()).concat(right.slice());
}

// Example usage:
const unsortedArray = [34, 7, 23, 32, 5, 62, 78, 4];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // This will print the sorted array

```

# O(n log n) - Insertion sort - for small arrays 

## for small arrays -  Insertion sort 
## is often recommended for small arrays due to its simplicity, ease of implementation, and efficiency when dealing with a small number of elements. Even though its average and worst-case time complexity is O(n^2),

## making it less efficient than O(n log n) sorting algorithms for large datasets, its overhead is low, and it can be faster than more complex algorithms like merge sort or quicksort for small inputs.

