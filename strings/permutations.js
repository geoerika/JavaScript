//prints permutations of a string

const swap = (str, i, j) => {
  let arr = str.split('');
  [arr[i], arr[j]] = [arr[j], arr[i]];
  str = arr.join('');
  return str;
};

const permute = (str, s, e) => {

    if(s === e) {
      console.log(str);
    } else {
      for (let i = s; i <= e; i++) {
        str = swap(str, s, i);
        // console.log(str1);
        permute(str, s + 1, e);
        // str = swap(str, s, i)
      };
    };
};

const permutations = (str) => {
  permute(str, 0, str.length -1);
};

console.log(permutations(''));
console.log(permutations('ab'));
console.log(permutations('abc'));
console.log(permutations('abcd'));
