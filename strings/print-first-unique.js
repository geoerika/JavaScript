// prints first unique character in a string

const printFirst = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      console.log(str[i]);
      break;
    };
  };
};

printFirst('annabella');