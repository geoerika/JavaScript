const alternateSign = (array, resultArray) => {
  if (array.length === 0) {
    return [];
  }

  let elemArray = array.shift();
  if (resultArray.length === 0) {
    resultArray.push(Math.abs(elemArray));
    alternateSign(array, resultArray);
  } else {
    if (resultArray[resultArray.length - 1] >= 0) {
      resultArray.push(-Math.abs(elemArray));
      alternateSign(array, resultArray);
    } else {
      resultArray.push(Math.abs(elemArray));
      alternateSign(array, resultArray);
    }
  }

  return resultArray;
};

console.log(alternateSign([2,7,8,3,1,4], [])); // [2,-7,8,-3,1,-4]
console.log(alternateSign([-2,-7,8,3,-1,4], [])); // [2,-7,8,-3,1,-4]