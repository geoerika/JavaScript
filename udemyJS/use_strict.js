// example 1

'use strict';

city = 'London';
console.log(city); // => city is not defined but prints withour use strict

// example 2

'use strict';

function myFunc(a, a, b) { //=> duplcate name not allowed in this context
  console.log(a, a, b);
}

myFunc(1, 2, 3); // gives an error, without prints 2, 2, 3 as it overrides the first a var


// example 3

'use strict';

delete Object.prototype; // => cannot delete property