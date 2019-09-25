// removes duplicate number from an array

const removeDuplicate = (arr) => {
  for (let i =0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      let lastIndex = arr.lastIndexOf(arr[i]);
      arr.splice(lastIndex, i);
    };
  };
  return arr;
};

console.log(removeDuplicate([2,6,4,3,2,6]));
console.log(removeDuplicate([]));
console.log(removeDuplicate([2,6,4,3]));