def missingNumber(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# Example usage
nums = [3, 0, 1]
print(missingNumber(nums))  # Output: 2