// prints a list of duplicate characters in a string

const printDuplicateChar = (str) => {
  let duplicateChar = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]) && !duplicateChar.includes(str[i])) {
      duplicateChar.push(str[i]);
    };
  };
  return duplicateChar;
};


console.log(printDuplicateChar('anabella'));
console.log(printDuplicateChar(''));