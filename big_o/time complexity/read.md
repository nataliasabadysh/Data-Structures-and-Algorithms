
# Time complexity: 

# O(1)
- Arithmetic operations: "+", "-", "/"
- Variable assignments: var = value
- Accessing elements in an array: arr[1], obj.key
- Looping with a fixed number of iterations: 
for (let i = 0; i < 5; i++)


## example: O(1)
- always 3 operations 
 
```js
function add(n){
    return n*(n*1)/2;
}
console.log(add(30)); // 450
```

## O(1)
- loop will run at most JUST 6 times (from 0 to 5 inclusive)
- Even if n is larger than 5, 
- number of operations is bounded by a constant

```js
function logAtLeast5(n){
    for (let index = 0; index <= Math.min(5, n); index++) {
        console.log(i)   
    }
}
console.log(add([3, 5, 6, 8, 9, 12, 12, 23]))
```

## O(1) - Constant Time Complexity
 - performance is not affected by the size of the input
 - 
## VS O(n) - Linear Time Complexity
- performance scales linearly with the size of the input.

```js
// As n grows, the number of iterations grows
function logAtLeast5(n) {
    // If n = 10 million, then there will be 10 million iterations - O(n)
    for (let index = 0; index <= Math.max(5, n); index++) {
        console.log(index); // Fixed from 'i' to 'index'
    }
}
logAtLeast5(10); // Example call to the function

```


## O(n)
- `n` is the length of the input array
- contains a single loop that iterates over each element 
- loop of each el array once of the size of the input array

```js
function add(n){
    let total = 0;

    // Input 'n' and iterates over each element in the array, 
    for (let index = 0; index < n.length; index++) {
        // incrementing the total variable by 1 for each iteration
        total+=1
    }
    return total
}

console.log(add([1, 2, 6, 8, 2, 3])); // 6
```



# O(n)

```js
function countUpAndDown(n){
    console.log('Going UP!')
 
    // O(n)
    for (let index = 0; index < n.length; index++) {
     console.log(index)
    }
 
    console.log('At the top, Going down.. ')
     // O(n)
    for (let j = n.length - 1; j >= 0 ; j--) {
     console.log(j)
    }

    console.log('Back down. Bye!')
 }
 
    // Going UP!
    // 0
    // 1
    // At the top, Going down.. 
    // 1
    // 0
    // Back down. Bye!

console.log(countUpAndDown([7, 8,]));

```




## O(n^2)
- n - Input grows 
- n - RunTime Grows in ^2

```js
function printAllPairs(n){
    // O(n)
    for (let i = 0; i < n.length; i++) {
        // O(n^2)
        for (let j = 0; j < n.length; j++) {
            console.log(i, j)   
        } 
    }
}
// 0 0
// 0 1
// 1 0
// 1 1
printAllPairs([2, 6])
```
