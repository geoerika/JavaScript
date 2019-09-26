// checks if a string is a rotation of another string

const isRotation = (str1, str2) => {
  let str = str2 + str2;
  return str.includes(str1);
};

console.log(isRotation('sweetpanda', 'etpandaswe'));
console.log(isRotation('sweetpanda', ''));