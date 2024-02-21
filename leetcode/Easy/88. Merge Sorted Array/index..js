// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be
// stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, and the last n elements are set
// to 0 and should be ignored. nums2 has a length of n.

function merge(nums1, m, nums2, n) {
  // Pointers for nums1 and nums2
  let p1 = m - 1;
  let p2 = n - 1;
  // Pointer for the end of the merged array
  let p = m + n - 1;

  // While there are elements to compare in both arrays
  while (p1 >= 0 && p2 >= 0) {
    // Compare the last elements of nums1 and nums2
    // and place the larger one at the end of nums1
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // If there are remaining elements in nums2, copy them to nums1
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
