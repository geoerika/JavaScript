function merge(array1, array2) {
  let arrayresult = [];
  if (array1 == [] && array2 == []) return [];
  else if (array1 == []) return array2;
  else if (array2 == []) return array1;
  else {
    let i = 0;
    let j = 0;
    while (i < array1.length || j < array2.length) {
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
}

//console.log(merge([], []), "=?", []);
//console.log(merge([ ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);