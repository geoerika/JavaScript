// checks if a string contains only digits

const onlyDigits = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (Number.isNaN(Number.parseInt(str[i]))) {
      return false;
    };
  };
  return true;
 };

console.log(onlyDigits('465732'));
console.log(onlyDigits('1a13b45'));