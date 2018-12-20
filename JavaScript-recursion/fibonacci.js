const fibonacci = (n) => {

  let fibonacciNrs = [];
  if (n === 1) {
    fibonacciNrs = [0, 1];
    return fibonacciNrs;
  }

  fibonacciNrs = fibonacci(n-1);
  fibonacciNrs.push(fibonacciNrs[n-2] + fibonacciNrs[n-1]);
  return fibonacciNrs;
}

console.log(fibonacci(10));