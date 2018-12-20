  for (var number = 100; number <= 200; number++){
    var result = "";
    if (number % 3 === 0 && number % 4 === 0) {
      result = "LoopyLighthouse";
    } else if (number % 3 === 0) {
      result = "Loopy";
      } else if (number % 4 === 0) {
      result = "Lighthouse";
      } else result = number;
    console.log(result);
  }