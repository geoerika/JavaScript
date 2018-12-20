const sumArray = (numberArray) => {

  if (numberArray.length === 0) {
    return 0;
  }

  let addNumber = numberArray.shift();
  if (typeof addNumber === 'object') {
    return sumArray(addNumber) + sumArray(numberArray);
  } else {
    return addNumber + sumArray(numberArray);
  }
}

console.log(sumArray([1,2,3,9]));
console.log(sumArray([1, [2, 3, 4]]));
console.log(sumArray([[2, 3, 4], [1, 1], 1]));