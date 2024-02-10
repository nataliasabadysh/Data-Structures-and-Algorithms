def summation(num):
    sum = 0
    for i in range(1, num + 1):
        sum += i
    return sum

# def summation(num):
#     return num * (num + 1) // 2

print(summation(2))  # Outputs: 3
print(summation(8))  # Outputs: 36
