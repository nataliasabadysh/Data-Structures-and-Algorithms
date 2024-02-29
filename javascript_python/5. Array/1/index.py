# Merge 2 array 
def merge_sorted_arrays(arr1, arr2):
    # return sorted(arr1 + arr2) # merge and sort 
    return list(set(arr1 + arr2)) # Merge 2 array + set all uniq value 

# Example usage
print(merge_sorted_arrays([2, 13, 4, 6], [2, 5, 6]))  #



def merge_sorted_arrays(arr1, arr2):
    # sorted() - function is used to sort the unique elements. 
    # set - function is used to remove duplicates from the merged list
    return sorted(set(arr1 + arr2))

# Example usage
print(merge_sorted_arrays([2, 13, 4, 6], [2, 5, 6]))  # Output: [2, 4, 5, 6, 13]


# with out any methods 
def merge_sorted_arrays(arr1, arr2):
    merged = arr1 + arr2
    unique = []
    for item in merged:
        if item not in unique:
            unique.append(item)
    return unique

# Example usage
print(merge_sorted_arrays([2, 13, 4, 6], [2, 5, 6]))