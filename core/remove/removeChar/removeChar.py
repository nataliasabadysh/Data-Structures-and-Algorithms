def remove_char(s):
    return s[1:-1]

    # return s[slice(1, -1)]

# 
def remove_char(s):
    if len(s) > 2:
        return s[1:-1]
    return ''  # Return an empty string if the input is too short

# 
import re
def remove_char(s):
    return re.sub(r'^.(.*).$', r'\1', s)
# 

def remove_char(s):
    lst = list(s)
    return ''.join(lst[1:-1])
