def factorial(n):
# Recursion
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Loop
    # result = 1
    # for i in range(2, n + 1):
    #     result *= i
    # return result

print(factorial(5)) # Outputs: 120

