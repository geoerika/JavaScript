// find the missing number in a given integer array of 1 to 100

const missingNumber = (arr => {
  let missNumArray = [];
  for (let i = 1; i <= 100; i++) {
    if(!arr.includes(i)) {
      missNumArray.push(i);
    }
  };
  return missNumArray;
});

let numArray = [1,2,3,4,5,78,34,89,99,100];
console.log(missingNumber(numArray));
console.log(missingNumber([]));
