let capitalizeFirst = (array) => {
  if (array.length === 0) {
    return [];
  }

  let wordArray = array.pop();
  let capWord = wordArray.charAt(0).toUpperCase() + wordArray.substring(1);
  return capitalizeFirst(array).concat([capWord]);
}

console.log(capitalizeFirst(['car','poop','banana']));