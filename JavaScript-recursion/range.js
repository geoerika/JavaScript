const range = (a, b) => {

  if (b - a === 2) {
    return [a+1];
  } else {
    let rangeList = range(a + 1, b);
    rangeList.unshift(a + 1);
    return rangeList;
  }
}

console.log(range(2,6));