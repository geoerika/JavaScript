module.exports = function insertionSort(array) {
  const {length} = array;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

const swap = (array, a, b) => {
  [array[a] , array[b]] = [array[b], array[a]];
}

const createNonSortedArray = (size) => {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// let array1 = [6, 3, 0, 2, 7, 5, 9];
// console.log(insertionSort(array1));

// let array = createNonSortedArray(10);
// console.log(array.join());
// array = insertionSort(array);
// console.log(array.join());