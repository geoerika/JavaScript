// returns alternate sign array

const altSign = (arr) => {
  let altSignArr = [];
  if(arr.length < 2) {
    return altSignArr = arr;
  }
  let length = arr.length;
  let elem = arr.pop(arr[length - 1]);
  if(length % 2 === 0) {
    altSignArr = altSign(arr)
    altSignArr.push(-Math.abs(elem));
  } else {
    altSignArr = altSign(arr);
    altSignArr.push(Math.abs(elem));
  }
  return altSignArr;
}

console.log(altSign([]));
console.log(altSign([1,2,3,5,6])); //[1, -2, 3, -4, 5, -6]