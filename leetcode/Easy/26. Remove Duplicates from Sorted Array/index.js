/*

TASK - 26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element
 appears only once. The relative order of the elements should be kept the same.
 Then return the number of unique elements in nums.


Consider the number of unique elements of nums to be k, 
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of 
nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/*
1. You have a list of numbers that might look something like this: [1, 1, 2, 2, 3]
This list is already sorted, which means the numbers are in order from smallest to largest.


2) Now I need to remove any repeated numbers so that each number only appears once.
 But you're not allowed to just create a new list;
  you have to change the original list (nums) directly.

- Go through each number in the list, one by one.
- If the number is the same as the number before it, you ignore it.
- If the number is different (which means it's unique), you want to keep it.

3) When you're done, you will have all the unique numbers at the start of the list. 
For example,    [1, 1, 2, 2, 3] 
    becomes     [1, 2, 3, 2, 3].

The 2 and 3 at the end don't matter anymore because you're only interested in the unique numbers at the start.

Lastly, you tell whoever asked you to do this task how many unique numbers there are. 
If your list now starts with [1, 2, 3],
 you say "3" because there are three unique numbers.

That's it! You've removed the duplicates, 
kept the unique numbers in their original order, 
and reported how many unique numbers you found.

*/

function removeDuplicates(nums) {
  if (!nums.length) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    const currentNumber = nums[i];
    const prevNumber = nums[i - 1];

    if (currentNumber !== prevNumber) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

// Example Usage:
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //  5
