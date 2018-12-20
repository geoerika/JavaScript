let change = [ [2000, 'twenty'], [1000, 'ten'], [500, 'five'], [200, 'twoDollar'], [100, 'dollar'], [25, 'quarter'], [10, 'dime'], [5, 'nickel'], [1, 'penny']];

var calculateChange = function(total, cash) {
  var rest = cash-total;
  var howmuchchange = 0;
  var changeReturned = [];
  var objChangeReturned = {};
//create an array of subarrays of cash type and amount
  if (rest > 0) {
    for (var i = 0; i < change.length; i++) {
     howmuchchange = Math.floor((rest / change[i][0]));
      if (howmuchchange != 0) {
        changeReturned.push([change[i][1], howmuchchange]);
        rest = rest - howmuchchange * change[i][0];
      }
    }
  }
//creates objChangeReturned with properties as cash type and values as the amount of cash type given back
  for (var j = 0; j < changeReturned.length; j++) {
    objChangeReturned[changeReturned[j][0]] = changeReturned[j][1];
  }

  return objChangeReturned;

}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));