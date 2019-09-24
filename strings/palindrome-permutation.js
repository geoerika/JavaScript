//checks if a string is a palindrome permutation

const frequencyObj = (str) => {
  let freqObj = {};
  for(char of str.split('')) {
    if(freqObj[char]) {
      freqObj[char]++;
    } else {
      freqObj[char] = 1;
    }
  };
  return freqObj;
};

const onlyOneOddMax = (freqObj) => {
  console.log(freqObj);
  let nrOdd = 0;
  for(key in freqObj) {
    if ((freqObj[key] % 2) !== 0) {
      nrOdd++;
    }
  };
  console.log(nrOdd);
  return nrOdd < 2;
};

const isPalindromPermutation = (str) => {
  let freqObj = frequencyObj(str);
  return onlyOneOddMax(freqObj);
};

console.log(isPalindromPermutation('aha'));
console.log(isPalindromPermutation('haa'));
console.log(isPalindromPermutation('tacocat'));
console.log(isPalindromPermutation('London'));