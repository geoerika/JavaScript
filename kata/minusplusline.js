function plusminusline(number) {
  var plusminus = "";
  var maxValArray = number * number;
  if (number > 0) {
    for (var i = 1; i <= number; i++) {
      var plusminus = plusminus + "+---";
      if (maxValArray.toString().length > 1) {
        var extraminus = maxValArray.toString().length - 1;
        for (var j = 0; j < extraminus; j++) {
          plusminus = plusminus + "-";
        }
      }
      if (i == number) plusminus = plusminus + "+";
    }
  }
  return plusminus;
}

console.log(plusminusline(5));