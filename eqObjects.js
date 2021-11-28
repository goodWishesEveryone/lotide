// Function eqObjects will take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Two objects are equal when:
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

// Within our loop, we can use Array.isArray against both values to see if array comparisons need to be made.
// When there is an array value being encountered for a key, ensuring that our newly added array tests fully pass, by eqArrays function.
// Otherwise (else): assume that they are primitives and continue to use === to compare the two values.

const eqArrays = function(arr1, arr2) {
  // 1) check if both array lengths are the same, if not return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // check if values are equal and of the same type, if not return false
  for (let i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      return eqArrays(object1[i], object2[i]);
    } else if (Object.values(object1).length !== Object.values(object2).length) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  return actual === expected ? `🙌  Assertion Passed: ${actual} === ${expected}`
    : `🙏  Assertion Failed: ${actual} !== ${expected}`;
};

////////  TEST CODEs:  /////////
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));         // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));        // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));         // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));        // => false

console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));