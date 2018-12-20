var uppersnakeCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (input[i - 1] === " ") {
        result = result + "_" + input[i].toUpperCase();
      } else result = result + input[i].toUpperCase();
    }
  }
  return result;
}

console.log(uppersnakeCase("this is a string", ["upper", "snake"]));
