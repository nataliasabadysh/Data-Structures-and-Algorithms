function isPalindrome(input) {
  // Convert input to string to handle numbers and ensure lowercase for uniformity
  const str = input.toString().toLowerCase();

  // Remove non-alphanumeric characters and spaces
  const cleaned = str.replace(/[^a-z0-9]/gi, "");

  // Check palindrome
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Examples: 1
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("A Santa at NASA")); // true
console.log(isPalindrome(12321)); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Hello, World!")); // false

// Examples: 2
const mixedArray = [
  "level",
  "world",
  1234321,
  "Was it a car or a cat I saw?",
  "sample",
  1234
];

const palindromes = mixedArray.filter((item) => isPalindrome(item));
console.log(palindromes); // ["level", 1234321, "Was it a car or a cat I saw?"]

// Examples: 3
function findLongestPalindrome(arr) {
  return arr
    .filter((item) => isPalindrome(item)) // [ 'madam', '123454321', 'racecar' ]
    .reduce(
      (longest, current) =>
        current.toString().length > longest.toString().length
          ? current
          : longest,
      ""
    );
}

const testArray = ["madam", "123454321", "racecar", "no palindromes here"];

console.log(findLongestPalindrome(testArray)); // 123454321
