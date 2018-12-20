const replaceKeysInObj = (obj, oldKey, newKey) => {
  if (obj[oldKey]) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  for (item in obj) {
    if (typeof obj[item] === 'object') {
      replaceKeysInObj(obj[item], oldKey, newKey);
    }
  }

  return obj;
}

var obj1 = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(replaceKeysInObj(obj1, 'e', 'a'));