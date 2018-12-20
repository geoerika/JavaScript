const multiply = (x, y) => {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return y;
  }

  let result = y + multiply(x - 1, y);
  return result;
}

console.log(multiply(3, 6));