function getProduct(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

console.log(getProduct(10)(20));


// use

function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  }
}

const traveTimeBosNyc = getTravelTime(400);

console.log(traveTimeBosNyc(50));