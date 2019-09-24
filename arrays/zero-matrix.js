const zeroMatrix = (arr) => {
  console.log(arr);
  let arr1 = [];
  // the following lines are to clone a nested array
  for(let i = 0; i < arr.length; i++) {
    arr1[i] = [...arr[i]];
  };
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j] === 0){
        for(let index = 0; index < arr[i].length; index++) {
          arr1[i][index] = 0;
        };
        for(let index = 0; index  < arr.length; index++) {
          arr1[index][j] = 0;
        };
      };
    };
  };
  return arr1;
}

console.log(zeroMatrix([[1,2,3],[2,3,0],[1,2,3]]));