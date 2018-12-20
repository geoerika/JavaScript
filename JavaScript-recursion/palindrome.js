const palindrome = (word) => {

  if (word === '' || word.length === 1) {
    return true;
  }

  if (word[0] === word[word.length -1]) {
    return palindrome(word.substring(1, word.length - 1));
  } else {
    return false;
  }
}

console.log(palindrome('eve'));
console.log(palindrome('maria'));
console.log(palindrome('racecar'));
console.log(palindrome('kayak'));
console.log(palindrome('important'));