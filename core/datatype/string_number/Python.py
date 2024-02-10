def number_to_string(num):
    #  str(num) - readable way to convert
    #  "%s" % num # String Formatting with % Operator:
    #  "{}".format(num)# tring Formatting with format Method - good choice
    #  f"{num}"# f-strings (Formatted String Literals): - best practice
    #  "" + str(num) # Concatenation with an Empty String:
    #  repr(num) # Using repr function:
    return format(num, '.2f')  # 2 - Decimal to String Conversion:

str(num): This is the most straightforward and universally readable way to convert a number to a string. It's clear, concise, and the best choice for most situations where you simply need the string representation of a number without any special formatting.

f"{num}" (f-strings): For Python 3.6 and newer, f-strings are considered the best practice when you need to embed expressions within strings due to their readability and performance. They're especially useful for more complex strings that involve variables and expressions.

"{}".format(num): Before f-strings were introduced, the format method was the recommended way to include variables in strings. It's still a good choice for codebases that must maintain compatibility with Python versions older than 3.6.

"%s" % num: The % operator is largely considered outdated for new code but might still be seen in older codebases. It's less preferred due to its verbosity and less intuitive syntax compared to newer methods.

Concatenation with an Empty String ("" + str(num)): This method is not standard for converting numbers to strings and can be less clear than directly using str(num). It's generally not recommended.

repr(num): This is useful for getting a string representation that includes more detailed information for debugging. However, for converting numbers to strings in user-facing output, str is usually more appropriate.

format(num, '.2f'): If you need to format a number with a fixed number of decimal places, this method (or using an f-string with formatting specifications) is the best practice. It's specifically useful when you need to control the format of the output string, such as in financial applications.