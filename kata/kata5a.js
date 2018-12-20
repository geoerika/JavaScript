var removeSpaces = function(input) {
  var result = "";
  let words = input.split(" ");
  for (var i = 0; i < words.length; i++) {
    result = result + words[i];
  }
  return result;
}

console.log(removeSpaces("this is a string"));
console.log(removeSpaces("loopy lighthouse"));
console.log(removeSpaces("supercalifragalisticexpialidocious"));