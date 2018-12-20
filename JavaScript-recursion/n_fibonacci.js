const nthFibo = (n) => {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }

  return nthFibo(n-1) + nthFibo(n-2);
};

console.log(nthFibo(3));
console.log(nthFibo(4));
console.log(nthFibo(5));
console.log(nthFibo(6));
console.log(nthFibo(7));
console.log(nthFibo(10));
console.log(nthFibo(15));
console.log(nthFibo(16));