const buildList = (value, length) => {
  if (length === 0) {
    return [];
  }

  return [value].concat(buildList(value, length - 1));
}

console.log(buildList(5,7));
console.log(buildList(5,0));