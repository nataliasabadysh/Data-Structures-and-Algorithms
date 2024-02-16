// 1) Create a temporary string in memory by reversing the original string

// Original string
const originalString = "test";

// Step 1: Split the string into an array of characters [ 't', 'e', 's', 't' ]
// Step 2: Reverse the array to [ 't', 's', 'e', 't' ]
// Step 3: Join the reversed array back into a string "tset"

const reversedString = originalString.split("").reverse().join("");

// The time complexity of this operation is O(n) where n is the length of the string.

// 2) if we need remove non-alphanumeric characters and convert to lowercase

// Punctuation marks: !, ?, ., ,, ;, :, ', "
// Special symbols: @, #, $, %, ^, &, *, (, ), -, +, =, {, }, [, ], |, \, /, <, >, ~
// Whitespace characters: spaces, tabs (\t), newline characters (\n)

// Sanitize the input string
const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
