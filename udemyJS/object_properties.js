const a = {};
const b = { name: 'b'};
const c = { name: 'c'};

a[b] = 200; // a[['object object']] = 200;
console.log(a);
// only strings can be property on objects
a[c] = 400; // a[['object object']] = 400;

console.log(a[b]); // => 400
// console.log(a['[object object']);