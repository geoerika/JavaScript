const sequentialSearch = (array, value) => {
  let found = false;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      console.log(value, array[i]);
      found = true;
    }
  }
  return found;
}

let array = [3, 6, 9, 22, 65];
console.log(sequentialSearch(array, 22));
console.log(sequentialSearch(array, 100));