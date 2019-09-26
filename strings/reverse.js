// reverse a string using recursion

const reverse = (str) => {
  if (str === '') {
    return '';
  } else {
    let char = str[0];
    return reverse(str.slice(1)) + char;
  };
};

console.log(reverse('may'));