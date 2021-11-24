// Function eqArrays takes in two arrays and returns true or false, based on a perfect match.
// Here is one possible way of structuring our function's logic:

// First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
// After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. Other loop types can work too, but this one is most elegant and idiomatic, thanks to ES6
// Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
// As soon as there is not a match, we can return false
// Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🙌 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3]));              // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));              // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));  // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));    // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2"]));       // => false
console.log(eqArrays(["1", "2", "3"], []));               // => false

// Use assertEqual to write test cases for various scenarios.
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);             // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);            // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);  // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);     // => should PASS
assertEqual(eqArrays(["1", "2", "3"], []), false);             // => should PASS