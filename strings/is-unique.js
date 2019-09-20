// checks if a string has all unique characters

use 'strict';

let strEx = 'unique';
let strEx2 = 'Montreal';
const isUnique = (str) => {
  let trueUnique = true;
  let strLength = str.length;
  for(let i = 0; i< strLength; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      trueUnique = false;
      break;
    }
  }
  return trueUnique;
}

console.log(isUnique(strEx));
console.log(isUnique(strEx2));