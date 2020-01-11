let list1 = [1, 2, 3, 4, 5]; // we are passing data by reference (objects and arrays)
let list2 = list1;
// let list2 = [1, 2, 3, 4, 5];

console.log(list2); // => list2= [1, 2, 3, 4, 5, 6, 7, 8]

let list2 = list1.slice(); // copy values not reference to the original list
let list2 = list1.concat([]); // another method to create a seperate reference to a new list
console.log(list2); // => list2= [1, 2, 3, 4, 5]

list1.push(6, 7, 8);


list1 = [10, 20, 30]; // list 2 remains as before

const x = 5;
const y = 'blue'; //both numbers and strings are passed as values
const z = y; // z = 'blue'; passing data as value