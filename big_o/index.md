# Big O notation

# O(1)
Constant time: No matter the size of the input data, the number of operations does not change. Example: Accessing any element in an array by index.

# O(log n) 
Logarithmic time: The number of operations grows logarithmically with the size of the input data. Example: Binary search in a sorted array.

# O(n) 
Linear time: The number of operations grows linearly with the size of the input data. Example: A loop through an array.

# O(n log n)
Log-linear time: Common in efficient sorting algorithms like mergesort and heapsort. The number of operations grows more than linearly but less than quadratically with input size.

# O(n^2)
Quadratic time: The number of operations is proportional to the square of the input size. Example: Nested loops comparing each element with every other element.

# O(2^n) 
Exponential time: Operations grow exponentially with the input size. Example: Recursive algorithms that solve the Fibonacci sequence without memoization.

# O(n!) 
Factorial time: The number of operations grows factorially with the input size, which becomes impractical even for relatively small input sizes. Example: Algorithms that generate all possible permutations of a set.


```md
            Data    | Operations 
____________________________________
 O(1)       1 000   |     1      
                    |            
 O(log n)   1 000   |    ~10     
                    |            
 O(n)       1 000   |  1 000     
                    |            
 O(n log n) 1 000   | ~10 000    
                    |            
 O(n^2)     1 000   |1 000 000   
                    |            
 O(2^n)     1 000   |    *       
                    |            
 O(n!)      1 000   |    *

```