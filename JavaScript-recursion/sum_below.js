const sumBelow = (number) => {

  if (number === 0) {
    return 0;
  }

  return sumBelow(number - 1) + number - 1;
}

console.log(sumBelow(4));
console.log(sumBelow(40));