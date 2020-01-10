//singly or doubly invoked function

function getTotal() {
  var args = Array.prototype.slice.call(arguments); //to get the array of arguments passed to the function
  console.log(args);
  if (args.length === 2) {
    return args[0] + args[1];
  } else if (args.length === 1) {
    return function(num2) {
      return args[0] + num2;
    }
  }
}

console.log(getTotal(10, 20));
console.log(getTotal(10)(20));
