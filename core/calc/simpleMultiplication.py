def simple_multiplication(number):
    # Check if the number is even
    if number % 2 == 0:
        # If it is, multiply by 8
        return number * 8
    else:
        # Otherwise, multiply by 9
        return number * 9


# return number * 8 if number % 2 == 0 else number * 9