# O(n) - linear time complexity.
## The execution time grows linearly with the size of the input data set.

Data    | Operations

10      | 10      
10,000  | 10,000

1) array has 10 elements, the loop inside the function executes 10 times
2) array contains 10,000 elements, the loop will execute 10,000 times

```js
function getSumOfArray(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum;
}
console.log(getSumOfArray([2, 4])); 
```


```md
Execution time and the number of operations 
increase linearly as the size of the input data set increases - O(n) time complexity. 

Input size affect the performance of an algorithm.
```


