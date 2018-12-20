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

var pascalCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (i == 0 || input[i - 1] === " ") {
        result = result + input[i].toUpperCase();
      } else result = result + input[i];
    }
  }
  return result;
}

var snakeCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (input[i - 1] === " ") {
        result = result + "_" + input[i];
      } else result = result + input[i];
    }
  }
  return result;
}

var kebabCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (input[i - 1] === " ") {
        result = result + "-" + input[i];
      } else result = result + input[i];
    }
  }
  return result;
}

var titleCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      if (i == 0) {
        result = result + input[0].toUpperCase();
      } else if (input[i - 1] === " ") {
          result = result + " " + input[i].toUpperCase();
      } else result = result + input[i];
    }
  }
  return result;
}

function isVowel(character) {
  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    return true;
  } else return false;
}

var vowelCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (isVowel(input[i]) === true) {
        result = result + input[i].toUpperCase();
    } else result = result + input[i];
  }
  return result;
}

var consonantCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    if (isVowel(input[i]) === false) {
        result = result + input[i].toUpperCase();
    } else result = result + input[i];
  }
  return result;
}

var upperCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    result = result + input[i].toUpperCase();
  }
  return result;
}

var lowerCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++) {
    result = result + input[i].toLowerCase();
  }
  return result;
}


var makeCase = function(string,case1) {
  var result = "";
  if (typeof case1 === "string") {
    if (case1 === "camel") result = camelCase(string);
    else if (case1 === "pascal") result = pascalCase(string);
    else if (case1 === "snake") result = snakeCase(string);
    else if (case1 === "kebab") result = kebabCase(string);
    else if (case1 === "title") result = titleCase(string);
    else if (case1 === "vowel") result = vowelCase(string);
    else if (case1 === "consonant") result = consonantCase(string);
    else if (case1 === "upper") result = upperCase(string);
    else if (case1 === "lower") result = lowerCase(string);
  }
  else {
    var string1 = makeCase(string, case1[0]);
    result = makeCase(string1, case1[1]);
  }
  return result;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("This is a String", ["pascal", "lower"]));

//makeCase("this is a string", "camel") === "thisIsAString";
//makeCase("this is a string", "pascal") === "ThisIsAString";
//makeCase("this is a string", "snake") === "this_is_a_string";
//makeCase("this is a string", "kebab") === "this-is-a-string";
//makeCase("this is a string", "title") === "This Is A String";
//makeCase("this is a string", "vowel") === "thIs Is A strIng";
//makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
//makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";