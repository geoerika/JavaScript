const mergeSort = (array) => {
  if (array.length > 1) {
    const {length} = array;
    const middle = Math.floor(length / 2);
    console.log(middle);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    console.log(left, right);
    array = merge(left, right);
  }
  return array;
}

const merge = (left, right)  => {
  console.log(left, right);
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

let array1 = [6, 3, 0, 2, 7, 5, 9];
console.log(mergeSort(array1));