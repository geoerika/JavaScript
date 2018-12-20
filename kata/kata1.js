var repeatNumbers = function(array) {
  let result = "";
  for (var i = 0; i < array.length; i++) {
    var subarray = array[i];
    for (var j = 0; j < subarray[1]; j++) {
      result += subarray[0];
      if (j + 1 == subarray[1] && array.length > 1 && i + 1 < array.length) {
        result += ", ";
      }
    }
  }
  return result;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));