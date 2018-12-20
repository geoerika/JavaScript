const fizzBuzz = (n) => {
  if (n === 0) {
    return [];
  }

  if ((n % 3 === 0) && (n % 5 === 0)) {
    return fizzBuzz(n - 1).concat(['FizzBuzz']);
  } else {
    if (n % 3 === 0) {
      return fizzBuzz(n - 1).concat(['Fizz']);
    } else {
      if (n % 5 === 0) {
        return fizzBuzz(n - 1).concat(['Buzz']);
      } else {
        return fizzBuzz(n - 1).concat([n]);
      }
    }
  }
}

console.log(fizzBuzz(10));
console.log(fizzBuzz(30));