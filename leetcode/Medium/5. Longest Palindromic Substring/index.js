// 0(1)
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
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }

  return str.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("babad")); // bab
