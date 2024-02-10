# O(n1)
# factorial 

```md
Data    | Operations 

10      | 
10 000  | 

```


```js

// factorial of 3 
// 3! = 3*2*1  = 6

// factorial of 3 
// 5! = 5*4*3*2*1 = 120
// ..
// 6! = 720
// 7! = 5040

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120

```