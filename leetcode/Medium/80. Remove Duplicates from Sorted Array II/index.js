/*
Task 80. Remove Duplicates from Sorted Array II

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:


Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
 */

function removeDuplicates(nums) {
  if (nums.length < 3) return nums.length;

  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    const currentElement = nums[i];
    const positionElementK = nums[k - 2];

    if (currentElement !== positionElementK) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5

/* STEPS
Check Initial Array Size: If the array has two or fewer elements, it's already valid (since each unique element can appear at most twice), so return the array's length.

Initialize Pointers: Set up a pointer k starting from index 2 (the third element in the array), since the first two elements can always remain in the array.

Iterate Through the Array: Loop through the array starting from the third element.

Compare and Assign: Within the loop, compare the current element with the element at the position k-2. If they are not the same, it means the current element can be included (since it's not a third duplicate).

Update Array: If the current element is different from the element at k-2, assign it to the kth position in the array. This effectively shifts unique elements (or second occurrences) up in the array.

Increment Pointer: After assigning the element, increment k. This ensures that the next unique element or second occurrence will be placed in the next available position.

Finish Loop: Continue the loop until you've gone through the entire array. By the end, all allowed elements (unique or second occurrences) will be at the beginning of the array, and k will indicate the new length of the array without extra duplicates.

Return Result: Return k. The first k elements of nums will have at most two occurrences of each unique element, and everything beyond k is irrelevant.
*/
