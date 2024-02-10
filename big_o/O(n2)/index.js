function bubbleSort(array) {
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (array[i - 1] > array[i]) {
                // Swap the elements
                let temp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = temp;
                swapped = true;
            }
        }
        // Reduce n because the highest element will have bubbled to its correct position
        n--;
    } while (swapped);
    return array;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));
