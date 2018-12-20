const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
    return gcd(num2, num1 % num2);
}

console.log(gcd(20, 30));