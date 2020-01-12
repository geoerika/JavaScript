let isPalindrome = (str) => {
  return (str.split('').reverse().join('') === str)
};

console.log(isPalindrome('ana'));
console.log(isPalindrome('daniel'));
