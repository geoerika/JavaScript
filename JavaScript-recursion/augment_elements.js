const augmentElements = (array, aug) => {
  if (array.length === 0) {
    return [];
  }

  let arrayElem = array.pop();
  console.log(arrayElem);
  if (arrayElem.length === 0) {
    return augmentElements(array, aug).concat([[aug]]);
  } else {
    return augmentElements(array, aug).concat([[arrayElem[0], aug]]);
  }
};

console.log(augmentElements([[],[3],[7]], 5)); // [[5],[3,5],[7,5]]