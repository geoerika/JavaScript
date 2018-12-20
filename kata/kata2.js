var conditionalSum = function(nrArray, condition) {
  let result = 0;
  let condition1 = "even";
  if (nrArray != []) {
    if (condition1 == condition) {
      for (var i = 0; i < nrArray.length; i++) {
        if (nrArray[i] % 2 == 0) {
          result += nrArray[i];
        }
      }
    }else{
      for (var i = 0; i < nrArray.length; i++) {
        if (nrArray[i] % 2 != 0) {
          result += nrArray[i];
        }
      }
    }
  }
  return result;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));