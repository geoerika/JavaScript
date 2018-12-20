//defines function to remove spaces between words in a given text
var removeSpaces = function(input) {
  var result = "";
  let words = input.split(" ");
  for (var i = 0; i < words.length; i++) {
    result = result + words[i];
  }
  return result;
}

//finds the word square dimension
var findWordSquare = function(string) {
  var i = string.length;
  for (var j = 0; j < string.length; j++) {
    if (i <= j*j) return j;
  }
}


//console.log(removeSpaces("this is a string"));
//console.log(removeSpaces("loopy lighthouse"));
//console.log(removeSpaces("supercalifragalisticexpialidocious"));