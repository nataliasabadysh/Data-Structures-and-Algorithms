// C(1) Define the firstPalindrome function
const firstPalindrome = (s) => {
  // C(2) Preprocess the input string
  const string = s.toLowerCase().replace(/[\W_]/g, "");

  // C(3) Initialize two pointers for comparison
  let left = 0;
  let right = string.length - 1;

  // C(4) Check if the string is a palindrome
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  // C(5) Return true if the string is a palindrome
  return true;
};

// C(6) Test cases
console.log(firstPalindrome("LOOL")); // true
console.log(firstPalindrome("ggygga")); // false
