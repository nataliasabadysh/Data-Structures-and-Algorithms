# Array

```js

const array = [1]; // Integer = 4 Bytes or 32 bits 

```


# Static array 
- is a fixed-size data structure

1. Fixed size: The size is defined when the array is created and cannot be changed.
2. Memory allocation: Memory is allocated at compile-time.
3. Performance: Accessing elements is fast because they are stored in contiguous memory locations.
4. Limitation: The size limit must be known in advance and cannot be altered during execution.


```C++
int staticArray[5] = {1, 2, 3, 4, 5}; // Array of size 5, cannot be resized
```


# Dynamic Array


1. Resizable: The array can grow or shrink in size as needed.
2. Memory allocation: Memory is allocated at runtime, and can be reallocated if the array needs to grow.
3. Overhead: There's a performance overhead for growing the array (like copying elements to a new, larger memory area).
4. Flexibility: More flexible as it can adapt to the data set size dynamically.
5. Pythons, Javascript 

```py
dynamicArray = [1, 2, 3]
dynamicArray.append(4)  # Array size can be changed by adding an element
dynamicArray.pop()      # Size can be decreased by removing an element
```

```
static array example, the size is set to 5 and cannot be changed. 
In the dynamic array example, elements can be added or removed, 
allowing the array to change size during the program's execution.

```


