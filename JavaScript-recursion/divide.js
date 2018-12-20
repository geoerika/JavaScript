const divide = (x, y)  => {
  if (x < y) {
    return 0;
  }

  return 1 + divide(x - y, y);
}

console.log(divide (5,2));