# O(1) - constant time complexity.

```md
Data    | Operations 

10      | 1
10 000  | 1
```
## The execution time does not depend on the size of the input data set.

```js
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log(getLastElement([2, 3, 7]));

```

This is because it doesn't matter whether we have 
an array like [2, 3, 7] 
or an array of 1000 numbers;

we are always just taking the last element. 

The operation to retrieve the last element is performed in constant time,
regardless of the array's size.


