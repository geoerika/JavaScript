const myArray = [5];
const anotherArray = myArray;

console.log([10, 20, 30, 40, 50].indexOf(30)); // => 2
console.log([{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // => -1 two objects are not equal
console.log('hello world'.indexOf('o')); // => 4, indexOf here is the string method
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); // => 4, as both reference the sam eobject so they are equal
console.log([[1], [2], [3], [4]].indexOf([2])); // => -1, [2] is an object which is passed as reference
