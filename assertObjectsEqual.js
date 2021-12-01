// assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
};



module.exports = assertObjectsEqual;