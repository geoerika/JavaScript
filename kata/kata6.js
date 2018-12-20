function multiplicationArray(number) {
  var multArray = [];
  for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number; j++) {
      multArray.push(i * j);
    }
  }
  return multArray;
}

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

var multiplicationTable = function(maxValue) {
  var Table = "";
  var multArray1 = multiplicationArray(maxValue);
  var index = 0
    while (index < multArray1.length) {
      Table = Table + plusminusline(maxValue) + "\n";
      for (var i = 0; i < maxValue; i++) {
        Table = Table + "|" + " " + multArray1[index] + " ";
        var j = maxValue * maxValue;
        if (multArray1[index].toString().length < j.toString().length) {
          var lengthDif = j.toString().length - multArray1[index].toString().length;
          for (var k = 0; k < lengthDif; k++) {
            Table = Table + " ";
          }
        }
        if (i + 1 == maxValue) Table = Table + "|" + "\n";
        index++;
      }
    }
  Table = Table + plusminusline(maxValue) + "\n";
  return Table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
