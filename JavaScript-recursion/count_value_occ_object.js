const countValuesInObj = (obj, value) => {

  let count = 0;

  for (item in obj) {
    if (obj[item] === value) {
      count++;
    }
    if(typeof obj[item] === 'object') {
      count = count + countValuesInObj(obj[item], value);
    }
  }
  return count;
}

let obj1 = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countValuesInObj(obj1, 'r'));// 2
console.log(countValuesInObj(obj1, 'e')); // 1