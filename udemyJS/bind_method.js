this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function(unit, caption) {
    return this.distance;
  }
};

const roadTrip2 = {
  distance: 5000
};

let getTripDistance = roadTrip1.getDistance;
console.log(getTripDistance()); //=> 10000, this points to the global context here

const getTripDistance1 = roadTrip1.getDistance.bind(roadTrip2, 'km');
//=> binds this to roadTrip2 obj and keeps 'unit' constant
console.log(getTripDistance1(' in total')); // caption can change from instance to instancew