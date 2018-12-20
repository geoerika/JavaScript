const createArray = (str) => {

  if (str.length === 1) {
    return [str];
  }

  if (str.length === 0) {
    return [];
  }

  return [str.substring(0, 1)].concat(createArray(str.substring(1)));
}

console.log(createArray('a'));
console.log(createArray('hi'));
console.log(createArray('hello'));