const modulo = (x, y) => {
  if (x < y) {
    return x;
  }

  return modulo(x - y, y);
}

console.log(modulo(5,2));
console.log(modulo(17, 5));
console.log(modulo(0, 5));