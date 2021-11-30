/*  This middle function will take in an array and return the middle-most element(s) of the given array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
*/

// Assertion Function
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

const middle = function(array) {
  let middleIndex = [];
  // if array has one or two elements, return empty array
  if (array.length <= 2) {
    middleIndex = [];
    // if array has odd number of elements return single middle
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
    // if array has even number of elements return 2 elements in the middle
  } else if (array.length % 2 === 0) {
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex;
};


// TEST CODEs
// For arrays with one or two elements, there is no middle; return an empty array.
console.log(middle([1]));
console.log(middle([1, 2]));
// For arrays with odd number of elements, an array containing a single middle element should be returned.
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));


// TEST ASSERTIONs

assertArraysEqual(middle([]), []);                    // => true thus PASS
assertArraysEqual(middle([1]), []);                   // => true thus PASS
assertArraysEqual(middle([1, 2, 3]), [2]);            // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);      // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);       // => true thus PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => true thus PASS
assertArraysEqual(middle(['Light', 'House', 'Labs']),['Labs']); // => false thus FAIL
assertArraysEqual(middle(['Light', 'House', 'Labs']),['House']); // => true thus PASS
assertArraysEqual(middle(['Light', 'House', 'Labs', 'Inc']),['Labs']); // => false thus FAIL
assertArraysEqual(middle(['Light', 'House', 'Labs','Inc']),['House', 'Labs']); // => true thus PASS