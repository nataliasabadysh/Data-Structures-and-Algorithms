// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index
// of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
  if (needle === "") return 0;

  // needle would not fit within haystack, and there's no need to check further.

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
}

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
