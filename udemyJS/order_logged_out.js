function logNumbers() {
  console.log(1);
  setTimeout(function(){console.log(2)}, 1000);
  setTimeout(function(){console.log(3)}, 0);
  console.log(4);
}

//event loop in the browser which processes the events in a queue, console.log is not placed there
//so we have 4 printed before 3

logNumbers(); // 1, 4, 3, 2