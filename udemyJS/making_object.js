//object literal syntax

const myBoat = {
  length: 24,
  maxSpedd: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};


console.log(myBoat);

//new keyword and Object constructor

const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ['English', 'Alebra', 'Chemistry'];
student.getClasses = function() {
  return this.classes;
};

console.log(student);

//constructor function

function Car(color, brand, year) {
  this.color = color; //this here refers to the future object created with this constructor function
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function() {
  return this.color;
};

const carlyscar = new Car('blue', 'ferrari', 2015);
const jimscar = new Car('red', 'tesla', 2014);

console.log(carlyscar, carlyscar.getColor());
console.log(jimscar, jimscar.getColor());