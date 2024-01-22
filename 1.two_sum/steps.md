
# TowSum 

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target. 



# AgeCases: ask: Verify the constraints :

Are all the numbers positive or ca there be negetive ?(no)

Are there duplicate numbers in the array ?(no)

Will there always be a solution avalible ?(no)
case as : [], [1], .. 

what do we return if there is no solution? (null)


can there be multiple pairs that add up the target ?(no, only 1)

# Write out some test case

No Possible Solution: - we return null. 
Examples: [], [1] (target 9).
Empty Array: [] - return null.
Single Element: [5] (target 9) - return null.

Valid Pair: [1, 6] (target 7) - The solution is [0, 1]



# Figure out a solution without code 

num = [1, 3, 7, 9, 2] t=11

1. we can try every possible pairs of numbers 

we can pick one number first 

2. Two Pointer approach






