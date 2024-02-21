# LOL
# CAT

# O(n)

s = 'abc'
reversed = s[::-1]  # cba

# O(1)
def isPalindrome(s="LOOL"):
    left =0;
    right =len(s)-1
    while left < right:
        if s[left] != s[right]:
            return False
        left+=1
        right-=1
    return True

print(isPalindrome())