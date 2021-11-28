// assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

const eqArrays = function (arr1, arr2) {
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

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
      return eqArrays(object1[i], object2[i]);
    } else if (Object.values(object1).length !== Object.values(object2).length) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
};

////////  TEST CODEs:  /////////
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const abc = { a: "1", b: "2", c: "3" };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(eqObjects(cd, cd2), false);    // => false
assertObjectsEqual(eqObjects(cd, cd2), false);    // => false
assertObjectsEqual(eqObjects(ab, ba), true);      // => true
assertObjectsEqual(eqObjects(ab, abc), false);    // => false
assertObjectsEqual(eqObjects(cd, dc), true);      // => true