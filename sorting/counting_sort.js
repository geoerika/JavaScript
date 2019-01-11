const findMaxValue = (array) => {
  let max = array[0];
  for (let i = o; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}