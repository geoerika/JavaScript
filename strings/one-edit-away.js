// checks if two strings are just one edit away from each other

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
  console.log(freqObj);
};

const oneAway = (str1, str2) => {
  let str1CharFreq = frequencyObj(str1);
  let str2CharFreq = frequencyObj(str2);
  console.log(str1CharFreq, str2CharFreq);
  let countDif = 0;
  for (key in str1CharFreq) {
    if (str1CharFreq[key] !== str2CharFreq[key]) {
      countDif++;
    }
  };
  return countDif === 1;
};

const oneEditAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  } else {
    if (Math.abs(str1.length - str2.length) <= 1) {
      if (str1.length < str2.length) {
        return oneAway(str2, str1);
      } else {
        return oneAway(str1, str2);
      };
    }
  };
};

console.log(oneEditAway('palo', 'ple'));
console.log(oneEditAway('pale', 'ple'));
console.log(oneEditAway('pales', 'pale'));
console.log(oneEditAway('pale', 'bale'));
console.log(oneEditAway('pale', 'bake'));