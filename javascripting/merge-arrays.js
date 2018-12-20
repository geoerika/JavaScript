function merge(array1, array2) {
  var arrayresult = [];
  var i = 0;
  var j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      arrayresult.push(array1[i]);
      i++;
    } else {
        arrayresult.push(array2[j]);
        j++;
    }
  }
  if (i == array1.length) {
    if (j !== array2.length) {
      for (var j1 = j; j1 < array2.length; j1++) {
        arrayresult.push(array2[j1]);
      }
    }
  } else {
      for (var i1 = i; i1 < array1.length; i1++) {
        arrayresult.push(array1[i1]);
      }
  }
  return arrayresult;
}

console.log(merge([], []), "=?", []);
console.log(merge([ ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ 5 ], [ 2, 5, 8 ]), "=?", [ 2, 5, 5, 8 ]);
console.log(merge([ 4 ], [ 1 , 2, 5]), "=?", [ 1, 2, 4, 5]);
console.log(merge([ 4, 5], [ 1 ]), "=?", [ 1, 4, 5 ]);
console.log(merge([ 4, 5], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5 ]);