var x = 10;

function y() {
  x = 100;
  return;
  function x() {}
}

y();

console.log(x); // => x = 10;

// code above is equal to:

var x = 10;

function y() {
  function x() {} // function x declaration is hoisted on top of the function y scope
  x = 100; // so here we will give a value of 100 to the function x not to the global variable x
  return;
}

y();
