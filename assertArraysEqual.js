// assertArraysEqual will take in two arrays and console.log an appropriate message to the console.
// This assertion function will make use of your eqArrays function for array comparison.
// We will not be writing assertions (test code) for assertArraysEqual.

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


const assertArraysEqual = function(a1, a2) {

  if (eqArrays(a1, a2) === true) {
    return console.log(`🙌 Assertion Passed: ${a1} === ${a2}`);
  } else {
    return console.log(`🙏 Assertion Failed: ${a1} !== ${a2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);              // => true thus PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);              // => false thus fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // => true thus PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);    // => false thus fail
assertArraysEqual(["1", "2", "3"], ["1", "2"]);       // => false thus fail
assertArraysEqual(["1", "2", "3"], []);               // => false thus fail