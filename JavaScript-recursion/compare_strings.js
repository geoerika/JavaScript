const compareStr = (str1, str2) => {
  if (str1 === '' & str2 ==='')
    return true;

  if (str1.substring(0, 1) !== str2.substring(0, 1)) {
    return false;
  } else {
    return compareStr(str1.substring(1), str2.substring(1));
  }
}

console.log(compareStr('hi', 'hi'));
console.log(compareStr('hi', 'hello'));
console.log(compareStr('important', 'important'));