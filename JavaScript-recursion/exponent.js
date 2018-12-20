const exponent = (number, base) => {
  if (number === 1) {
    return 0;
  }

  return exponent(number / base, base) + 1;
}

console.log(exponent(125, 5));