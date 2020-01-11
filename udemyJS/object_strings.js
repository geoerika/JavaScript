var string1 = 'Tampa';
var string2 =  string1;

string 1 = 'Venice';

console.log(string2); // => Tampa


var person1 = {
  name: 'Alex,
  age: 30'
};

var person2 = person1;
person1.name = 'Kyle';

console.log(person1); // => name: Kyle because we pass objects by reference not value