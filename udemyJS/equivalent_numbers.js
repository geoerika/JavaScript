console.log(900.9 === 300.3 * 3); // => false
console.log(300.3 * 3); //> 900.9000000000001 so it is not equal to 900.9
// decimals are binary encoded and they are not acurately represented in the memory
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);