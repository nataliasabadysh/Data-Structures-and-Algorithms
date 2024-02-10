# O(log n) - logarithmically, size of the input data (n) increases
input size doubles, the number of operations required to complete the task increases by a constant amount, rather than doubling.

## Binary Search Algorithm:
1) Start with two variables, 'low' and 'high'

Data    | Operations

100     | 7      
10,000  | 14


```js
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
```


```md
Binary search is O(log n) 
because it splits the search interval in half each time. 

After each comparison, half of the remaining elements are eliminated, 
making the search efficiently narrow down the possible 
location of the target value logarithmically 
relative to the total number of elements in the array.
```


