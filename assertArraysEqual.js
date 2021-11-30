const eqArrays = require('./eqArrays');

// assertArraysEqual will take in two arrays and console.log an appropriate message to the console. This assertion function will make use of eqArrays function for array comparison.


const assertArraysEqual = function(a1, a2) {

  if (eqArrays(a1, a2) === true) {
    return console.log(`🙌 Assertion Passed: ${a1} === ${a2}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${a1} !== ${a2}`);
  }
};

////////   TERNARY  ////////
// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual, expected)
//     ? `🙌 Assertion Passed: ${actual} === ${expected}`
//     : `🙏 Assertion Failed: ${actual} !== ${expected}`;

// };

module.exports = assertArraysEqual;