const countingSort = (array) => {

  if (array.length < 2) {
    return array;
  }

  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1); //declares an array of value counts

  array.forEach(element => {
    if(!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while(count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });

  return array;
}

const findMaxValue = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  return max;
}

let array1 = [6, 3, 0, 2, 7, 5, 9];
console.log(countingSort(array1));