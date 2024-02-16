// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string ""
// A string is palindromic if it reads the same forward and backward.

// Steps

// Iterate over each string in the array.
// For each string, check if it is a palindrome.
// If a palindrome is found, return it immediately.
// If no palindromic string is found after checking the entire array, return an empty string "".

// Constraints
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists only of lowercase English letters.

function firstPalindrome(words) {
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }
  return "";
}

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"])); // Output: "ada"

// console.log(firstPalindrome(["notapalindrome", "racecar"])); // Output: "racecar"
// console.log(firstPalindrome(["def", "ghi"])); // Output: ""

console.log(firstPalindrome(["def", "def"]));

// This code defines a function findFirstPalindrome that takes an array of strings as
// input and returns the first palindromic string found. The helper function
// isPalindrome checks if a given string is a palindrome by comparing characters
// from the beginning and end of the string moving towards the center.
