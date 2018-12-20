const isEven = (number) => {
  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return isEven(number - 2);
}

console.log(isEven(3));
console.log(isEven(44));