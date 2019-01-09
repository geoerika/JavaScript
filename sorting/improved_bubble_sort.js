const bubbleSort= (array) => {
  const { length} = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++){
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

const swap = (array, a, b) => {
  /*const temp = array[a];
  array[a] = array[b];
  array[b] = temp;*/
  [array[a] , array[b]] = [array[b], array[a]];
}

const createNonSortedArray = (size) => {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

let array1 = [3, 6, 4, 2, 10, 1, 0, 5];
console.log(bubbleSort(array1));

let array = createNonSortedArray(10);
console.log(array.join());
array = bubbleSort(array);
console.log(array.join());