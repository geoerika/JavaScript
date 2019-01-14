const interpolationSearch = (array, value) => {

  let found = false;

  const {length} = array;
  let low = 0;
  let high = length - 1;
  let position = -1;
  let delta = -1;

  while ( low <= high &&
          value >= array[low] &&
          value <= array[high]) {
    delta = (value - array[low]) / (array[high] - array[low]);
    position = low + Math.floor((high - low) * delta);
    if (array[position] === value) {
      return found = true;
    }
    if (array[position] < value) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return found;
}

console.log(interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8], 10));
console.log(interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8], 0));