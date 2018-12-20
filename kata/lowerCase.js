var lowerCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    result = result + input[i].toLowerCase();
  }
  return result;
}

console.log(lowerCase("This is a String"));