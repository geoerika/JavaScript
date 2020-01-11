const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

console.log(data2); // => ['S', 'm', 'i', 't', 'h'];

// call binds this to a string (data1) and than we can use some array methods such as filter on strings
// can use only read-only methods such as filter, forEach, map, some, every
//cannot useoush, pop, shift, reverse that changes the array