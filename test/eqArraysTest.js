const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODEs eqArrays
console.log('------  Testing eqArrays function  ------');
console.log(eqArrays([1, 2, 3], [1, 2, 3]));              // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));              // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));  // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));    // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2"]));       // => false
console.log(eqArrays(["1", "2", "3"], []));               // => false


console.log('------  Testing eqArrays function with assertEqual ------');
// Use assertEqual to write test cases for various scenarios.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);             // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);            // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);     // => should PASS
assertEqual(eqArrays(["1", "2", "3"], []), false);             // => should PASS