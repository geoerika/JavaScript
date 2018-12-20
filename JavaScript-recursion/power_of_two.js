const powerOfTwo = (number) => {

  if (number === 0) {
    return false;
  }

  if (number === 1) {
    return false;
  }

  if (number % 2 !== 0) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  return powerOfTwo(number / 2);
}

console.log(powerOfTwo(10));

console.log(powerOfTwo(16));

console.log(powerOfTwo(5889));
