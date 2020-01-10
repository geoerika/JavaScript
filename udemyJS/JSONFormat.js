// TASK:
// 1. Describe what JSON format is.
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

const myJsonObj = {
  myString: [some string],
  myNumber: [some number],
  myNull: [null],
  myBoolean: [false],
  myUndefined: [undefined], // not allowed in JSON Format
  myArray: [some array],
  myFunction: [some function], // not allowed in JSON Format
  myObject: [some object]
};

//these are the values allowed in JSON Format
// all properties are strings so we have to wrap them in quotes
const myJsonObj = {
  "myString": "blue", // always double quotes in JSON Format
  "myNumber": 10,
  "myNull": null,
  "myBoolean": false,
  "myArray": [1, 2, "orange"],
  "myObject": { "firstName": "Fred", "lastName": "Coppernicus", "age": 30}
};