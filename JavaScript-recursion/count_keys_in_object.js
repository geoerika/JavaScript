const countKeysInObj = (obj, key) => {

  let count = 0;

  if (obj[key]) {
    count++;
  }

  for (item in obj) {
    if (typeof obj[item] === 'object') {
      count = count + countKeysInObj(obj[item], key);
    }
  }
  return count;
}

let obj1 = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countKeysInObj(obj1, 'r')); // 1
console.log(countKeysInObj(obj1, 'e')); // 2
