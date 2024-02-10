# O(n2) - 0(n*n)
- increases quadratically with the increase in input size

## cases: 
- Nested Loops
- Bubble Sort

```md
Data    | Operations 

10      | 100
10 000  | 100 000 000 = 100m

```
## The execution time does not depend on the size of the input data set.

```js
function getMultiplyList(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i} * ${j} = ${i * j}`); 
        }
    }
}

getMultiplyList(2); // 0(n*n)

// 1 * 1 = 1
// 1 * 2 = 2
// 2 * 1 = 2
// 2 * 2 = 4
```

