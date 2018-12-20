var camelCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (input[i - 1] === " ") {
        result = result + input[i].toUpperCase();
      } else result = result + input[i];
    }
  }
  return result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));