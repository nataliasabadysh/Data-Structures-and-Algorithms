// C(1)
const firstPalindrome = (s) => {
  const string = s.toLowerCase().replace(/[\W_]/g, "");

  let left = 0;
  let right = string.length - 1;

  console.log(string[left]);

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

console.log(firstPalindrome("LOOL")); // LOOL
console.log(firstPalindrome("ggygga")); // false
