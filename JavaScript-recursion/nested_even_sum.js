const nestedEvenSum = (obj) => {
  let sum = 0;

  for (item in obj) {
    if (typeof obj[item] === 'object') {
      console.log('item:', item);
      sum = sum + nestedEvenSum(obj[item]);
    } else {
      if (obj[item] % 2 === 0) {
        console.log('obj[item]: ', obj[item]);
        sum = sum + obj[item];
      }
    }
  }
  return sum;
};

var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj1));