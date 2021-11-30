// This function compares two values it takes in and print out a message if they match or not.

// If the values match, it should print (console.log) the following:
// Assertion Passed: [actual] === [expected] (but with the values filled in).  Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;