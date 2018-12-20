const capitalizeWords = (array) => {
  if (array.length === 0) {
    return [];
  }

  let stringElem = array.pop().toUpperCase();
  return capitalizeWords(array).concat([stringElem]);
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));