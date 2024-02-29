def find_two_numbers(nums, target):
    # Initializes an empty dictionary to store each number and its index from the list
    num_map = {}

    # Iterates over the list 'nums', with 'enumerate' providing both the index (i) and the value (num) of each item
    for i, num in enumerate(nums):
        # Calculates the complement by subtracting the current number from the target
        complement = target - num

        # Checks if the complement is already in 'num_map'; if so, a pair that sums up to 'target' is found
        if complement in num_map:
            # Returns a list containing the index of the complement found in 'num_map' and the current index 'i'
            return [num_map[complement], i]

        # If the complement is not found, stores the current number and its index in 'num_map' for future reference
        num_map[num] = i

    # Returns an empty list if no two numbers sum up to the target after iterating through the entire list
    return []

# Example usage:
# Defines a list of numbers
nums = [2, 7, 11, 15]
# Defines the target sum
target = 9
# Calls 'find_two_numbers' with 'nums' and 'target', then prints the output
print(find_two_numbers(nums, target))  # Output: [0, 1]
