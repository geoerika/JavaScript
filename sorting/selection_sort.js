const selectionSort = (array) => {
  const {length} = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    console.log(' indexMin:', indexMin);
    for (let j = i; j < length; j++) {
      console.log('array[indexMin], array[j]:', array[indexMin], array[j]);
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
      console.log(array);
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

let array1 = [6, 3, 0];
console.log(selectionSort(array1));

let array = createNonSortedArray(10);
console.log(array.join());
array = selectionSort(array);
console.log(array.join());