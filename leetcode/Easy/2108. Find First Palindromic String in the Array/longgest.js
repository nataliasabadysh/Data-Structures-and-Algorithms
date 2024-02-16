/**
 * This function calculates the longest palindromic substring.
 *
 * Time Complexity:
 * O(n^2), where n is the length of the input string.
 * The outer loop runs for each character in the string (n iterations), and for each character,
 * it potentially expands around the middle for both odd and even length palindromes.
 * The expansion in the worst case can go up to the length of the string (n/2 expansions for each side),
 * which makes it O(n^2) in time complexity.
 *
 * Space Complexity:
 * O(1), since it uses a constant amount of space regardless of the input string size.
 * The variables 'startIndex', 'maxLength', and the space for the function call stack during the
 * expansion do not grow with the input size.
 */
function longestPalindrome(str) {
  let startIndex = 0;
  let maxLength = 1; // A single char itself is a palindrome, hence length is at least 1

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    expandAroundMiddle(i - 1, i + 1); // Check for odd length palindrome
    expandAroundMiddle(i, i + 1); // Check for even length palindrome
  }

  return str.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome("ABdsssBD"));
