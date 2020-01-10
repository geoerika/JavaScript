var num = 50;

function logNumber() {
  console.log(num);
  var num = 100;
}

logNumber(); // => undefined because the second num var is hoisted in the function scope