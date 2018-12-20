const reverseArr = (array ) => {
  if (array.length === 0) {
    return [];
  }

  let firstElem = array.shift();
  let result = reverseArr(array)
  result.push(firstElem);
  return result;
}

console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr([1]));
console.log(reverseArr([]));