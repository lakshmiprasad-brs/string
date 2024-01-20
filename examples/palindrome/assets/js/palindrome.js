

// Palindrome
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Implementation
const str = "abcd"; //str[i] !== str[j]
const palindrome = isPalindrome(str);
if (palindrome) {
  console.log(`The given string '${str}' is a palindrome string`);
} else {
  console.log(`The given string '${str}' is not a palindrome string`);
}

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)

//Palindrome
// palindrome - word/phrase/number or other sequence of characters that reads the same forward and backward
