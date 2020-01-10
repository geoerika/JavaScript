(function() {
  var x = y = 200; // equal to the below expressions
  // y = 200;
  // var x = y;
})();

console.log('y: ', y); // => y is 200, y is a gobal variable; if you use 'use strict' you get y undefined
console.log('x: ', x); // x is undefined, cannot access it on the global scope