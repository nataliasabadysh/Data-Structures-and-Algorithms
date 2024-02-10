# counts the number of sheep present in the array (true means present).

def count_sheeps(sheep_array):
    count = 0
    for sheep in sheep_array:
        if sheep is True:
            count += 1
    return count

def count_sheeps(sheep_array):
    return sum(1 for sheep in sheep_array if sheep is True)

# sheep_array = [None, None, False, True, True, False, None, None]
# print(count_sheeps(sheep_array))
