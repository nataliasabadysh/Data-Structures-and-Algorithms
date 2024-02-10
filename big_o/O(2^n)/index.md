# O(2^n)

```md
Data    | Operations 

10      | 1 024
10 000  | 1 048 576
```

```js
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(10)); 
```

