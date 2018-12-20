const compress = (list) => {
  if (list.length === 0) {
    return [];
  }

  let elemList = list.pop();
  if (list[list.length-1] !== elemList) {
    return compress(list).concat([elemList]);
  } else {
    return compress(list);
  }
};

console.log(compress([1,2,2,3,4,4,5,5,5])); // [1,2,3,4,5]
console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4])); // [1,2,3,4,2,5,4]