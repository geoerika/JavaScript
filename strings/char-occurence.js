// counts the occurence of a chracter in string

const charOcc = (char, str) => {
  let charOcc = 0;
  if(!((str.length === 0) || (str === ' '))) {
    for(let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        charOcc++;
      };
    };
  };
  return charOcc;
};

console.log(charOcc('a', 'anamaria'));
console.log(charOcc('a', ' '));
