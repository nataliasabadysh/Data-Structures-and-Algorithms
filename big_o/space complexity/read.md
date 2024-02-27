# Space Complexity:

## Constant space - O(1)
- Most primitives: Boolean, numbers, undefined, null

## String O(n)
## Array(length), Obj(keys) - O(n)

```js
ar.length // 2 = space, but if 130 = another space 
```

#### exmaple: Space and Time 

```md
Space: 
- let total = 0;
- loop: let index = 0;

Time: array.length
```

```js
- Space: O(1)
function sum(array){
    let total = 0; // space: numbers 

     // space: numbers
    for (let index = 0; index < array.length; index++) { // Time: array.length
        // Space: O(1)
        total += array[index];
    }
    return total
}

// VS 
- Space: O(n)
function double(array){
    let newArray = []; // space: array

     // Space: numbers
    for (let index = 0; index < array.length; index++) { // Time: array.length
        // Space: O(n)
        newArray.push( 2 * array[index]);
    }
    return newArray
}

console.log(double([2, 5, 6, 7, 8,12, 445,5]));
// [
//     4, 10,  12, 14,
//    16, 24, 890, 10
//  ]
```
