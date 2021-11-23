/*
This function compares two values it takes in and print out a message if they match or not.

If the values match, it should print (console.log) the following:
Assertion Passed: [actual] === [expected] (but with the values filled in)
Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// Test at least the following scenarios:
// Comparing identical strings
// Comparing non-identical strings
// Comparing identical numbers
// Comparing non-identical numbers

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 8);
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");