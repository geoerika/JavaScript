const reverseString = (string) => {

  if (string === '') {
    return '';
  }

  string = reverseString(string.substring(1)) + string.substring(0, 1);
  return string;
}

console.log(reverseString('Hello! How are you?'));