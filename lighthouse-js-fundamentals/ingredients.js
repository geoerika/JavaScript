var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let whileindex = 0;
while (whileindex < ingredients.length) {
  console.log(ingredients[whileindex]);
  whileindex++;
}

for (var forIndex = 0; forIndex < ingredients.length; forIndex++) {
  console.log(ingredients[forIndex]);
}


for (var forIndex1 = ingredients.length - 1; forIndex1 >= 0; forIndex1--) {
  console.log(ingredients[forIndex1]);
}