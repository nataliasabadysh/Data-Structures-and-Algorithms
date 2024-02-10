function search(array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;


    while (left <= right) {
        mid = Math.floor((right-left) / 2) + left;

        if (target === array[mid]) {
            return mid;
        }
        if(target < array[mid]) {
            right = mid - 1 
        } else {
            low = mid + 1; 
        }
    }

    return -1; 
}

const myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const target = 9;
console.log(search(myArray, target)); 

// Output will be the index of `9` in `myArray`, which is 4.


