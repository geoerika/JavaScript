//find duplicate numbers in an array

const duplicateNumber = (arr) => {
  let duplicateArray = [];
  for(num of arr) {
    if(arr.indexOf(num) !== arr.lastIndexOf(num) && (!duplicateArray.includes(num))) {
      duplicateArray.push(num);
    };
  };
  return duplicateArray;
};

console.log(duplicateNumber([1,2,3,2,5]));
console.log(duplicateNumber([]));
