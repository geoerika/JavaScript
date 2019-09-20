// checks if one string is a permutation of another string

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }
};

console.log(isPermutation('aha','haa'));
console.log(isPermutation('aha','hah'));