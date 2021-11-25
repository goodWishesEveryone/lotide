// Function eqObjects will take in two objects and returns true or false, based on a perfect match.
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Two objects are equal when:

// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const assertEqual = function(actual, expected) {
  return actual === expected ? `🙌  Assertion Passed: ${actual} === ${expected}`
    : `🙏  Assertion Failed: ${actual} !== ${expected}`;
};

const eqObjects = function (object1, object2) {
  for (let i in object1) {
    for (let j in object2) {
      if(Array.isArray(object1.i) && Array.isArray(object2.j)){
        eqArrays(object1.i, object2.j);
      } else {
        if (Object.keys(object1).length !== Object.keys(object2).length) {
          return false;
        } else if (object1.i === object2.j) {
          return true;
        }
      }      
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false



// TEST CODE
console.log(assertEqual(eqObjects(ab, ba), true));
console.log(assertEqual(eqObjects(ab, abc), false));
console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
