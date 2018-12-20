const numToText = (str) => {
  if (str === '') {
    return '';
  }

  let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };

  if (numbers[str.substring(0, 1)]) {
    return numbers[str.substring(0, 1)] + numToText(str.substring(1));
  } else {
    return str.substring(0, 1) + numToText(str.substring(1));
  }
};

console.log(numToText("I have 5 dogs and 6 ponies"));
