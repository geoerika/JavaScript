// finds min and max in an unsorted array

const findMinMax = (arr) => {
  if (arr.length === 0) {
    return "Empty Array!";
  } else {
    let arr1 = arr.sort();
    return {min: arr1[0], max: arr[arr.length - 1]};
  }
};

console.log(findMinMax([2,5,1,4,9,6,3]));
console.log(findMinMax([]));
console.log(findMinMax([1]));