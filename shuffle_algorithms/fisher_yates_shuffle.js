const shuffle_array = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap (array, i, randomIndex);
  }
  return array;
}

const swap = (array, a, b) => {
  [array[a] , array[b]] = [array[b], array[a]];
}

console.log(shuffle_array([1, 2, 3, 4, 5, 6,]));