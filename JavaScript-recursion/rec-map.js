const rMap = (array, callback) => {
  if (array.length === 0) {
    return [];
  }

  return [callback(array.shift())].concat(rMap(array, callback));
}

const timesTwo = (n) => {
  return 2 * n;
}

console.log(rMap([1, 2, 3], timesTwo));
console.log(rMap([10, 0, 100, 99], timesTwo));