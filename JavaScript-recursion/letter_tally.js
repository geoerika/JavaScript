const letterTally = (str, obj) => {
  if (str === '') {
    return {};
  }

  let letter = str.substring(0, 1);
  if (!obj[letter]) {
    obj[letter] = 1;
  } else {
    obj[letter] = obj[letter] + 1;
  }
  letterTally(str.substring(1), obj);
  return obj;
}

console.log(letterTally('potato', {}));