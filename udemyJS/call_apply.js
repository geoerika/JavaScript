const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}.
                 The price is $${cost}.
                 The year is ${year}.
                 The color is ${color}.\n`);
    }
};

const car2 = {
  brand: 'Lamborghini'
};

const car3 = {
  brand: 'Ford'
};

console.log(car1.getCarDescription(80000, 2010, 'blue'));
console.log(car1.getCarDescription.call(car2, 200000, 2013, 'red')); // with call you can apply a method from another object and apply it to the second object

// call changes the where 'this' points to, this time points to car2;

console.log(car1.getCarDescription.apply(car3, [35000, 2012, 'black']));
// apply is same as call except that we use an array to pass in the arguments