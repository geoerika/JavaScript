const frequencyObj = (str) => {
  let freqObj = {};
  let strCompressed = true;
  for(char of str.split('')) {
    if(freqObj[char]) {
      freqObj[char]++;
      strCompressed = false;
    } else {
      freqObj[char] = 1;
    }
  };
  return [freqObj, strCompressed];
  console.log(freqObj);
};

const strCompression = (str) => {
  let freq = frequencyObj(str);
  let returnCompressed = '';
  if (freq[1] === true) {
    return str;
  } else {
    for(key in freq[0]) {
      returnCompressed = returnCompressed + key + freq[0][key];
    };
    return returnCompressed;
  }
};


console.log(strCompression('aabcccccaaaa'));
console.log(strCompression('abcd'));
