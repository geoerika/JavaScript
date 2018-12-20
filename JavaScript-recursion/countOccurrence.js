const countOccurrennce = (value, array) => {
  if (array.length === 0) {
    return 0;
  }

  let val = array.shift();
  if (val === value) {
    return 1 + countOccurrennce(value, array);
  } else {
    return countOccurrennce(value, array);
  }
}

console.log(countOccurrennce(1, [2, 1, 3 , 4 ,1, 1, 10, 11]));