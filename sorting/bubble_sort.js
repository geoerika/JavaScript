const bubbleSort= (array) => {
  const { length} = array;
  for (let i = 0; i< length; i++) {
    for (let j = 0; j < length - 1; j++){
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

let array1 = [3, 6, 4, 2, 10, 1, 0, 5];
console.log(bubbleSort(array1));
