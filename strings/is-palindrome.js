// checks if a string is a palindrome

const isPalindrome = (str) => {
     console.log(str);
  if (str.length < 2) {
    return true;
  } else {
      if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1));
      } else {
        return false;
      }
  }
}

console.log(isPalindrome('ana'));
console.log(isPalindrome('cattac'));
