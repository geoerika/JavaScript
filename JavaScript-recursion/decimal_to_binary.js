const decimalToBinary = (dec) => {
  if (dec === 0) {
    return '0';
  }

  if (dec === 1) {
    return '1';
  }

  if (dec % 2) {
    return decimalToBinary((dec - 1) / 2) + 1;
  } else {
    return decimalToBinary(dec / 2) + 0;
  }
}

console.log(decimalToBinary(8));
console.log(decimalToBinary(15));
