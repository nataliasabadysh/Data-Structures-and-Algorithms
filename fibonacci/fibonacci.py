# 1. loop

# def fibonacci(n):
#     a, b = 0, 1
#     for _ in range(n):
#         a, b = b, a + b
#     return a

# print(fibonacci(5)) # Outputs: 5

# 2. recursion
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5)) # Outputs: 5