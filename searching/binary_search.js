const quickSort = require('../sorting/quick_sort.js');

const binarySearch = (array, value) => {
  let found = false;
  const sortedArray = quickSort(array);
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2);
    const valueMid = array[mid];
    if (value < valueMid) {
      high = mid - 1;
    } else if (value > valueMid) {
      low = mid + 1;
    } else if (value === valueMid) {
      return found = true;
    }
  }
  return found;
}

let array = [33, 56, 2, 0 , 78, 66];
console.log(binarySearch(array, 0));
