// finds all pairs in an array that add up to a given sum

const pairSum = (arr, sum) => {
  let pairArray = [];
  if(arr.length <= 0) {
    return "Array doesn't have enough numbers!";
  } else {
    for(let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
          pairArray.push([arr[i], arr[j]]);
          arr.shift[i];
          arr.splice(j,1);
        };
      };
    };
  };
  return pairArray;
};

console.log(pairSum([1,2,3,4,5,6,7], 8));