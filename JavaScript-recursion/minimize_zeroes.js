const minimizeZeroes = (array) => {
  if (array.length === 0) {
    return [];
  }

  let elemArray = array.pop();
  if (elemArray === 0 && array[array.length - 1] === 0) {
    return minimizeZeroes(array);
  } else {
    return minimizeZeroes(array).concat([elemArray]);
  }
};

console.log(minimizeZeroes([2,0,0,0,1,4])) // [2,0,1,4]
console.log(minimizeZeroes([2,0,0,0,1,0,0,4])) // [2,0,1,0,4]