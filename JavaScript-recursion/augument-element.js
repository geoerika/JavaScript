const augElem =(factor, arr) => {
  if (arr.length === 0) {
    return [];
  };

  let result = [];
  let elem = arr.pop();
  result = augElem(factor, arr);
  elem.push(factor);
  result.push(elem);
  return result;
};

console.log(augElem(3, []));
console.log(augElem(3, [[], [1], [5, 6]]));
console.log(augElem(5, [[],[3],[7]])); // [[5],[3,5],[7,5]]