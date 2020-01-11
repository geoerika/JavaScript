const user1 = {
  name: 'Jordan',
  age: 28
}

const user2 = {
  name: 'Jordan',
  age: 28
}

console.log(user1 == user2); // => false, each constant points to a diferent objects
console.log(user1 === user2); // => false

console.log(JSON.stringify(user1) === JSON.stringify(user2)); // => true

const user3 = user1;

console.log(user1 == user3); // => true, each constant references the same object in the memory
console.log(user1 === user3); // => true