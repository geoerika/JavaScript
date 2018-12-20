const flatten = (array) => {
  if (array.length === 0) {
    return [];
  }
  let flattenArray = [];

  array.forEach (elemArray => {
    if(typeof elemArray === 'object') {
      flattenArray = flattenArray.concat(flatten(elemArray));
    } else {
      flattenArray = flattenArray.concat([elemArray]);
    }
  });

  return flattenArray;

};

console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5])